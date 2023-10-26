<?php

use App\Http\Controllers\Api\GoogleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('google/login/url', [GoogleController::class, 'getAuthUrl']);
Route::post('google/login', [GoogleController::class, 'postLogin']);

Route::middleware(['google-auth'])->group(function () {
    Route::get('my/test', function () {
        return response()->json(['students' => "students-data"]);
    });
    // Route::get('auth/user', [GoogleController::class, 'authUser']);
});

// Route::middleware(['auth:api'])->group(function () {
//     Route::get('auth/user', [GoogleController::class, 'authUser']);
// });
