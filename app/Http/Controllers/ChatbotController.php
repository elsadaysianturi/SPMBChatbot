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
        $normalizedInput = $this->normalizeAndStem($userInput);
        \Log::info('Normalized Input: ' . $normalizedInput);
    
        $kategori = Kategori::where('nama_kategori', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($kategori) {
            \Log::info('Kategori Ditemukan: ' . $kategori->nama_kategori);
            return $this->getPertanyaanByKategori($kategori->id);
        }
        
        $rule = Rules::where('keyword', 'LIKE', '%' . $normalizedInput . '%')->first();
        if ($rule) {
            \Log::info('Rule Ditemukan: ' . $rule->response);
            return response()->json(['response' => $rule->response]);
        }
    
        $tokens = explode(' ', $normalizedInput);
        \Log::info('Tokens: ', $tokens);
    
        if (count($tokens) < 1) {
            return response()->json(['response' => 'Maaf, pertanyaan Anda terlalu pendek.']);
        }
    
        $responses = [];
        foreach ($tokens as $token) {
            $rules = Rules::where('keyword', 'LIKE', '%' . $token . '%')->get();
            foreach ($rules as $rule) {
                if (!in_array($rule->response, $responses)) {
                    $responses[] = $rule->response;
                }
            }
        }
    
        if (count($responses) > 0) {
            $validResponses = $this->filterValidResponses($responses, $tokens);
            if (count($validResponses) > 0) {
                \Log::info('Valid Responses: ' . implode(" ", $validResponses));
                return response()->json(['response' => implode(" ", $validResponses)]);
            }
        }
    
        return response()->json(['response' => 'Maaf, saya tidak mengerti pertanyaan Anda.']);
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
        \Log::info('Filtered Words: ', $filteredWords);
    
        $text = implode(' ', $filteredWords);
        \Log::info('After Stop Words Removal: ' . $text);
    
        $stemmedText = $this->stemmer->stem($text);
        \Log::info('Stemmed Text: ' . $stemmedText);
    
        return $stemmedText;
    }
    

    private function filterValidResponses($responses, $tokens)
    {
        $minMatchCount = 2; 
        $validResponses = [];

        foreach ($responses as $response) {
            $matchCount = 0;
            foreach ($tokens as $token) {
                if (strpos($response, $token) !== false) {
                    $matchCount++;
                }
            }
            if ($matchCount >= $minMatchCount) {
                $validResponses[] = $response;
            }
        }

        return $validResponses;
    }

    public function getPertanyaanByKategori($kategoriId)
    {
        $pertanyaan = PertanyaanJawaban::where('kategori_id', $kategoriId)->get();
        $pertanyaanText = $pertanyaan->pluck('pertanyaan', 'id')->toArray();
        return response()->json(['response' => $pertanyaanText]);
    }

    public function getJawabanByPertanyaanId(Request $request)
    {
        $pertanyaanId = $request->input('pertanyaan_id');
        $jawaban = PertanyaanJawaban::find($pertanyaanId)->jawaban;
        return response()->json(['response' => $jawaban]);
    }
}