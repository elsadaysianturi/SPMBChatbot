<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pertanyaan_jawaban;
use App\Models\Rules;
use Sastrawi\Stemmer\StemmerFactory;

class ChatbotController extends Controller
{
    protected $stemmer;

    public function __construct()
    {
        $stemmerFactory = new StemmerFactory();
        $this->stemmer = $stemmerFactory->createStemmer();
    }

    public function getPertanyaanByKategori($kategoriId)
    {
        $pertanyaan = pertanyaan_jawaban::where('kategori_id', $kategoriId)->get();
        return response()->json($pertanyaan);
    }

    public function handleUserInput(Request $request)
    {
        $userInput = $request->input('message');

        $normalizedInput = $this->normalizeAndStem($userInput);

        $tokens = explode(' ', $normalizedInput);

        if (count($tokens) < 3) {
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
                return response()->json(['response' => implode(" ", $validResponses)]);
            }
        }

        return response()->json(['response' => 'Maaf, saya tidak mengerti pertanyaan Anda.']);
    }

    private function normalizeAndStem($text)
    {
        $text = strtolower($text);

        $text = preg_replace('/[^\p{L}\s]/u', '', $text);

        $stopWords = ['dan', 'di', 'ke', 'dari', 'yang', 'untuk'];
        $words = explode(' ', $text);
        $filteredWords = array_diff($words, $stopWords);

        $text = implode(' ', $filteredWords);

        $stemmedText = $this->stemmer->stem($text);

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
}
