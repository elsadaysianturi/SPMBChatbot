<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PertanyaanJawabanController;
use App\Http\Controllers\ProgramStudiController;
use App\Http\Controllers\PertanyaanjawabanProgramstudiController;
use App\Http\Controllers\ChatbotController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('pages.web.dashboard.home');
});
Route::get('/categories', [KategoriController::class, 'index']);
Route::get('/categories', [PertanyaanJawabanController::class, 'getCategories']);
Route::get('/categories/{id}/questions', [PertanyaanJawabanController::class, 'getQuestionsByCategory']);
Route::get('/program-studi', [ProgramStudiController::class, 'index']);
Route::get('/program-studi/{id}/questions', [PertanyaanjawabanProgramstudiController::class, 'getQuestionsByProgramStudi']);
Route::get('/questions/{id}/answer', [PertanyaanJawabanController::class, 'getAnswerByQuestionId']);
Route::get('/program-studi-questions/{id}/answer', [PertanyaanjawabanProgramstudiController::class, 'getAnswerByQuestionId']);
Route::post('/chatbot/message', [ChatbotController::class, 'handleUserInput']);
Route::post('/chatbot/jawaban', [ChatbotController::class, 'getJawabanByPertanyaanId']);
