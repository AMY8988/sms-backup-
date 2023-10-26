<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\StudentsController;
use Illuminate\Support\Facades\Route;

// Laravel
use App\Http\Controllers\Laravel_Con\LstudentsController;
//


Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'login'])->name('home');
    Route::get('/login', [AuthenticatedSessionController::class, 'login'])
        ->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->name('login.submit');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get('/students', [StudentsController::class, 'index'])
        ->name('students.index');
    Route::get('/students/search', [StudentsController::class, 'fetchData'])
        ->name('students.fetchData');
});
// Route::get('/', function () {
//     return Inertia::render('Students/Index');
// });

// require __DIR__.'/auth.php';


// CRUD
Route::post('create/Student', [StudentsController::class, 'storeStudent'])->name('create.student');
Route::post('update/Student/{id}', [StudentsController::class, 'updateStudent'])->name('update.student');
Route::delete('/delete/Student/{id}', [StudentsController::class, 'deleteStudent'])->name('delete.student');


// View->Student(Laravel File)
Route::get('lindex', [LstudentsController::class, 'index']);
