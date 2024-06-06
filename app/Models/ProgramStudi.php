<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramStudi extends Model
{
    use HasFactory;

    protected $table = 'program_studi';

    protected $fillable = ['nama_programstudi'];

    public function pertanyaanJawaban()
    {
        return $this->hasMany(PertanyaanjawabanProgramstudi::class, 'programstudi_id');
    }
}
