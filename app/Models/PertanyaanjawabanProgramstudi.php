<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PertanyaanjawabanProgramstudi extends Model
{
    use HasFactory;

    protected $table = 'pertanyaanjawaban_programstudi';

    protected $fillable = ['programstudi_id', 'pertanyaan', 'jawaban'];

    public function programStudi()
    {
        return $this->belongsTo(ProgramStudi::class, 'programstudi_id');
    }
}
