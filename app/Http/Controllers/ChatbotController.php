<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PertanyaanJawaban;
use App\Models\Rules;
use App\Models\Kategori;
use Sastrawi\Stemmer\StemmerFactory;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    protected $stemmer;

    public function __construct()
    {
        $stemmerFactory = new StemmerFactory();
        $this->stemmer = $stemmerFactory->createStemmer();
    }

    public function handleUserInput(Request $request)
    {
        $userInput = $request->input('message');
        Log::info('User Input: ' . $userInput);

        if (empty($userInput)) {
            return response()->json(['response' => 'Silakan masukkan pertanyaan Anda.']);
        }

        $normalizedInput = $this->normalizeAndStem($userInput);
        Log::info('Normalized Input: ' . $normalizedInput);

        $response = $this->processInput($normalizedInput);
        return $response;
    }

    private function normalizeAndStem($text)
    {
        Log::info('Original Text: ' . $text);
        $text = strtolower(preg_replace('/[^\p{L}\s]/u', '', $text));
        Log::info('After Lowercase and Punctuation Removal: ' . $text);

        $stopWords = ['dan', 'di', 'ke', 'dari', 'yang', 'untuk'];
        $words = array_diff(explode(' ', $text), $stopWords);
        Log::info('Filtered Words: ' . json_encode($words));

        $text = implode(' ', $words);
        Log::info('After Stop Words Removal: ' . $text);

        $stemmedText = $this->stemmer->stem($text);
        Log::info('Stemmed Text: ' . $stemmedText);

        return $stemmedText;
    }

    private function processInput($normalizedInput)
    {
        $kategoriKeywords = [
            'seleksi' => 'seleksi',
            'pendaftaran' => 'pendaftaran',
            'jadwal' => 'jadwal',
            'biaya' => 'biaya',
            'beasiswa' => 'beasiswa',
            'fasilitas' => 'fasilitas',
            'program studi' => 'program studi',
            'kontak' => 'kontak',
            'lainnya' => 'lainnya'
        ];
        foreach ($kategoriKeywords as $keyword => $kategoriName) {
            if (strpos($normalizedInput, $keyword) !== false) {
                if ($this->isSimpleCategoryQuery($normalizedInput, $keyword)) {
                    $kategori = Kategori::where('nama_kategori', 'LIKE', '%' . $kategoriName . '%')->first();
                    if ($kategori) {
                        return response()->json([
                            'response' => 'Berikut beberapa pertanyaan terkait kategori ' . $kategoriName . ':',
                            'questions' => $this->getPertanyaanByKategori($kategori->id)->getData(true)['response']
                        ]);
                    }
                }
            }
        }
        $response = $this->processFullPhrase($normalizedInput);
        if ($response) return $response;
    
        $response = $this->checkForCategory($normalizedInput);
        if ($response) return $response;
    
        return $this->processTokens($normalizedInput);
    }
    
    private function isSimpleCategoryQuery($input, $keyword)
    {
        $words = explode(' ', $input);
        $keywordCount = 0;
        foreach ($words as $word) {
            if (strpos($word, $keyword) !== false) {
                $keywordCount++;
            }
        }
        return $keywordCount == 1 && count($words) <= 3;
    }
    
    private function processFullPhrase($normalizedInput)
    {
        $rule = Rules::where('keyword', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($rule) {
            return response()->json(['response' => $rule->response]);
        }
        return null;
    }

    private function checkForCategory($normalizedInput)
    {
        $kategori = Kategori::where('nama_kategori', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($kategori) {
            Log::info('Kategori Ditemukan: ' . $kategori->nama_kategori);
            return response()->json([
                'response' => 'Berikut beberapa pertanyaan terkait kategori yang Anda pilih:',
                'questions' => $this->getPertanyaanByKategori($kategori->id)->getData(true)['response']
            ]);
        }
        return null;
    }

    private function processTokens($normalizedInput)
    {
        $tokens = array_filter(explode(' ', $normalizedInput));
        Log::info('Tokens: ' . json_encode($tokens));
        
        if (count($tokens) < 1) {
            return response()->json(['response' => 'Maaf, pertanyaan Anda terlalu pendek.']);
        }
    
        $priorityTokens = ['jalur', 'seleksi', 'pendaftaran', 'syarat', 'daftar', 'cara', 'beasiswa', 'asrama', 'mahasiswa', 'wajib', 'masuk', 'institut', 'teknologi', 'del', 'prodi', 'sistem', 'informasi', 'pindah', 'jurusan', 'biaya', 'psikotes', 'pengumuman', 'usm', 'laptop', 'kuliah', 'semester'];
        $relevantTokens = array_intersect($priorityTokens, $tokens);
        Log::info('Relevant Tokens: ' . json_encode($relevantTokens));
    
        if (count($relevantTokens) > 0) {
            $chosenResponse = $this->getUniqueResponse($relevantTokens);
            Log::info('Chosen Response: ' . $chosenResponse);
            return response()->json(['response' => $chosenResponse]);
        }
    
        return response()->json(['response' => 'Maaf, saya tidak mengerti pertanyaan Anda.']);
    }
    
    private function getUniqueResponse($relevantTokens)
    {
        $responses = [];
        $responseSet = []; 
    
        foreach ($relevantTokens as $token) {
            $responseForToken = $this->getResponseForToken($token);
    
            if ($responseForToken) {
                $cleanedResponse = $this->cleanResponse($responseForToken);
                if (!isset($responseSet[$cleanedResponse])) {
                    $responses[] = $responseForToken;
                    $responseSet[$cleanedResponse] = true;
                }
            }
        }
    
        return count($responses) > 0 ? implode("\n\n", $responses) : 'Maaf, saya tidak dapat menemukan jawaban yang tepat.';
    }
    
    private function cleanResponse($response)
    {
        return preg_replace('/\s+/', ' ', trim($response));
    }      

    private function getBestResponse($relevantTokens)
    {
        $responses = [];
        $uniqueResponses = []; 
    
        foreach ($relevantTokens as $token) {
            $responseForToken = $this->getResponseForToken($token);
    
            if ($responseForToken) {
                $responseHash = md5($responseForToken); 
                if (!in_array($responseHash, $uniqueResponses)) {
                    $uniqueResponses[] = $responseHash;
                    $responses[] = $responseForToken;
                }
            }
        }
    
        if (count($responses) > 0) {
            return implode("\n", $responses); 
        }
    
        return 'Maaf, saya tidak dapat menemukan jawaban yang tepat.';
    }

    private function getResponseForToken($token)
    {
        $rules = Rules::where('keyword', 'LIKE', '%' . $token . '%')->get();
        Log::info('Rules found for token "' . $token . '": ' . json_encode($rules));
    
        $responses = [];
        foreach ($rules as $rule) {
            $responses[$rule->response] = $rule->response; 
        }

        return count($responses) > 0 ? reset($responses) : null;
    }

    private function getPertanyaanByKategori($kategoriId)
    {
        try {
            $pertanyaan = PertanyaanJawaban::where('kategori_id', $kategoriId)->get();
            $pertanyaanData = $pertanyaan->map(function ($item) {
                return ['id' => $item->id, 'pertanyaan' => $item->pertanyaan];
            });
            return response()->json(['response' => $pertanyaanData]);
        } catch (\Exception $e) {
            Log::error('Error in getPertanyaanByKategori: ' . $e->getMessage());
            return response()->json(['response' => 'Terjadi kesalahan saat mengambil pertanyaan.']);
        }
    }    

    public function getJawabanByPertanyaanId(Request $request)
    {
        $pertanyaanId = $request->input('pertanyaan_id');

        if (!$pertanyaanId || !is_numeric($pertanyaanId)) {
            Log::warning('Invalid pertanyaan_id: ' . $pertanyaanId);
            return response()->json(['response' => 'ID pertanyaan tidak valid.']);
        }

        try {
            $jawaban = PertanyaanJawaban::find($pertanyaanId);
            if ($jawaban) {
                return response()->json(['response' => $jawaban->jawaban]);
            }

            $jawabanProgramStudi = \DB::table('pertanyaanjawaban_programstudi')->where('id', $pertanyaanId)->first();
            if ($jawabanProgramStudi) {
                return response()->json(['response' => $jawabanProgramStudi->jawaban]);
            }

            return response()->json(['response' => 'Jawaban tidak ditemukan.']);
        } catch (\Exception $e) {
            Log::error('Error in getJawabanByPertanyaanId: ' . $e->getMessage());
            return response()->json(['response' => 'Terjadi kesalahan saat mengambil jawaban.']);
        }
    }
}
