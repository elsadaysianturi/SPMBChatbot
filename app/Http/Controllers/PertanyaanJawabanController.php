<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\PertanyaanJawaban;
use App\Models\PertanyaanjawabanProgramstudi;

class PertanyaanJawabanController extends Controller
{
    public function getCategories()
    {
        $categories = Kategori::all();
        return response()->json($categories);
    }

    public function getQuestionsByCategory($id)
    {
        $questions = PertanyaanJawaban::where('kategori_id', $id)->get();
        return response()->json($questions);
    }

    public function getAnswerByQuestionId($id)
    {
        $answer = PertanyaanJawaban::find($id);
        if (!$answer) {
            $answer = PertanyaanjawabanProgramstudi::find($id);
        }
        
        return response()->json(['jawaban' => $answer ? $answer->jawaban : 'Jawaban tidak ditemukan.']);
    }
}
