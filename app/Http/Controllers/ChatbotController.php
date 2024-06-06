<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pertanyaan_jawaban;

class ChatbotController extends Controller
{
    public function getPertanyaanByKategori($kategoriId)
    {
        $pertanyaan = pertanyaan_jawaban::where('kategori_id', $kategoriId)->get();
        return response()->json($pertanyaan);
    }
}
