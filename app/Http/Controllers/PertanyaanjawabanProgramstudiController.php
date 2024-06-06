<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PertanyaanjawabanProgramstudi;

class PertanyaanjawabanProgramstudiController extends Controller
{
    public function getQuestionsByProgramStudi($programStudiId)
    {
        $questions = PertanyaanjawabanProgramstudi::where('programstudi_id', $programStudiId)->get();
        return response()->json($questions);
    }

    public function getAnswerByQuestionId($id)
    {
        $answer = PertanyaanjawabanProgramstudi::find($id);
        return response()->json(['jawaban' => $answer ? $answer->jawaban : 'Jawaban tidak ditemukan.']);
    }
}
