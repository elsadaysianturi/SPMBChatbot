<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PertanyaanJawaban extends Model
{
    use HasFactory;

    protected $table = 'pertanyaan_jawaban';

    protected $fillable = [
        'kategori_id',
        'pertanyaan',
        'jawaban',
    ];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }
}
