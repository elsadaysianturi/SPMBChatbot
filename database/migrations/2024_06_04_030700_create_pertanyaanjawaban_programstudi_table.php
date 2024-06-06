<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePertanyaanjawabanProgramstudiTable extends Migration
{
    public function up()
    {
        Schema::create('pertanyaanjawaban_programstudi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('programstudi_id')->constrained('program_studi');
            $table->string('pertanyaan');
            $table->text('jawaban');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pertanyaanjawaban_programstudi');
    }
}
