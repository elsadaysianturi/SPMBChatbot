<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PertanyaanJawaban;
use App\Models\Rules;
use App\Models\Kategori;
use Sastrawi\Stemmer\StemmerFactory;

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
        \Log::info('User Input: ' . $userInput);

        if (empty($userInput)) {
            return response()->json(['response' => 'Silakan masukkan pertanyaan Anda.']);
        }

        $normalizedInput = $this->normalizeAndStem($userInput);
        \Log::info('Normalized Input: ' . $normalizedInput);

        $keywords = ['institut', 'teknologi', 'del', 'institut teknologi del', 'spmb', 'mahasiswa', 'beasiswa', 'asrama', 'laptop', 'bayar', 'metalurgi', 'cicilan', 'cicil', 'PMDK'];
        
        if (in_array($normalizedInput, $keywords)) {
            \Log::info('Keyword match found: ' . $normalizedInput);
            return $this->processKeywordMatch($normalizedInput);
        } else {
            return $this->processGeneralInput($normalizedInput);
        }
    }

    private function normalizeAndStem($text)
    {
        \Log::info('Original Text: ' . $text);
        $text = strtolower($text);
        $text = preg_replace('/[^\p{L}\s]/u', '', $text);
        \Log::info('After Lowercase and Punctuation Removal: ' . $text);

        $stopWords = ['dan', 'di', 'ke', 'dari', 'yang', 'untuk'];
        $words = explode(' ', $text);
        $filteredWords = array_diff($words, $stopWords);
        \Log::info('Filtered Words: ' . json_encode($filteredWords));

        $text = implode(' ', $filteredWords);
        \Log::info('After Stop Words Removal: ' . $text);

        $stemmedText = $this->stemmer->stem($text);
        \Log::info('Stemmed Text: ' . $stemmedText);

        return $stemmedText;
    }

    private function processKeywordMatch($normalizedInput)
    {
        $response = $this->getQuestionsByKeywords($normalizedInput);
        $responseData = $response->getData(true);

        if (is_array($responseData['response']) && count($responseData['response']) > 0) {
            return response()->json([
                'response' => 'Berikut beberapa pertanyaan terkait keyword yang Anda berikan:',
                'questions' => $responseData['response']
            ]);
        } else {
            return response()->json(['response' => 'Maaf, tidak ada pertanyaan yang ditemukan untuk keyword tersebut.']);
        }
    }

    private function processGeneralInput($normalizedInput)
    {
        $response = $this->checkForCategory($normalizedInput);
        if ($response) return $response;

        $response = $this->checkForRule($normalizedInput);
        if ($response) return $response;

        $response = $this->processTokens($normalizedInput);
        if ($response) return $response;

        return response()->json(['response' => 'Maaf, saya tidak mengerti pertanyaan Anda.']);
    }

    private function checkForCategory($normalizedInput)
    {
        $kategori = Kategori::where('nama_kategori', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($kategori) {
            \Log::info('Kategori Ditemukan: ' . $kategori->nama_kategori);
            return response()->json([
                'response' => 'Berikut beberapa pertanyaan terkait kategori yang Anda pilih:',
                'questions' => $this->getPertanyaanByKategori($kategori->id)->getData(true)['response']
            ]);
        }
        return null;
    }

    private function checkForRule($normalizedInput)
    {
        $rule = Rules::where('keyword', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($rule) {
            \Log::info('Rule Ditemukan: ' . $rule->response);
            return response()->json(['response' => $rule->response]);
        }
        return null;
    }

    private function processTokens($normalizedInput)
    {
        $tokens = explode(' ', $normalizedInput);
        \Log::info('Tokens: ' . json_encode($tokens));

        if (count($tokens) < 1) {
            return response()->json(['response' => 'Maaf, pertanyaan Anda terlalu pendek.']);
        }

        $responses = $this->getResponsesFromTokens($tokens);

        if (count($responses) > 0) {
            $validResponses = $this->filterValidResponses($responses, $tokens);
            if (count($validResponses) > 0) {
                \Log::info('Valid Responses: ' . implode(" ", $validResponses));
                return response()->json(['response' => implode(" ", $validResponses)]);
            }
        }

        return null;
    }

    private function filterValidResponses($responses, $tokens)
    {
        $validResponses = [];

        foreach ($responses as $response) {
            $responseTokens = explode(' ', $response);

            $matchCount = count(array_intersect($responseTokens, $tokens));

            if ($matchCount > 0) {
                $validResponses[] = $response;
            }
        }

        return $validResponses;
    }

    private function getResponsesFromTokens($tokens)
    {
        $responses = [];
        foreach ($tokens as $token) {
            $rules = Rules::where('keyword', 'LIKE', '%' . $token . '%')->get();
            foreach ($rules as $rule) {
                if (!in_array($rule->response, $responses)) {
                    $responses[] = $rule->response;
                }
            }
        }
        return $responses;
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
            \Log::error('Error in getPertanyaanByKategori: ' . $e->getMessage());
            return response()->json(['response' => 'Terjadi kesalahan saat mengambil pertanyaan.']);
        }
    }

    public function getJawabanByPertanyaanId(Request $request)
    {
        $pertanyaanId = $request->input('pertanyaan_id');
        
        if (!$pertanyaanId || !is_numeric($pertanyaanId)) {
            \Log::warning('Invalid pertanyaan_id: ' . $pertanyaanId);
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

            return response()->json(['response' => 'Maaf, jawaban tidak ditemukan.']);
        } catch (\Exception $e) {
            \Log::error('Error in getJawabanByPertanyaanId: ' . $e->getMessage());
            return response()->json(['response' => 'Terjadi kesalahan saat mengambil jawaban.']);
        }
    }

    public function getQuestionsByKeywords($keyword)
    {
        \Log::info('Fetching questions for keyword: ' . $keyword);

        try {
            $pertanyaan1 = \DB::table('pertanyaan_jawaban')->where('pertanyaan', 'LIKE', '%' . $keyword . '%')->select('pertanyaan', 'id')->get()->toArray();
            \Log::info('Pertanyaan 1: ' . json_encode($pertanyaan1));

            $pertanyaan2 = \DB::table('pertanyaanjawaban_programstudi')->where('pertanyaan', 'LIKE', '%' . $keyword . '%')->select('pertanyaan', 'id')->get()->toArray();
            \Log::info('Pertanyaan 2: ' . json_encode($pertanyaan2));

            $allPertanyaan = array_merge($pertanyaan1, $pertanyaan2);
            \Log::info('All Pertanyaan: ' . json_encode($allPertanyaan));

            return response()->json(['response' => $allPertanyaan]);
        } catch (\Exception $e) {
            \Log::error('Error in getQuestionsByKeywords: ' . $e->getMessage());
            return response()->json(['response' => 'Terjadi kesalahan saat mengambil pertanyaan.']);
        }
    }
}
