<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FrontendController;

Route::post('/login', [AuthController::class, 'login']);

// Frontend APIs
Route::prefix('frontend')->group(function () {
    Route::get('/departments', [FrontendController::class, 'departments']);
    Route::post('/appointments/book', [FrontendController::class, 'bookAppointment']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
