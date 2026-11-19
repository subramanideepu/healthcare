<?php

use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes for Aadhira Wellness
|--------------------------------------------------------------------------
*/

Route::prefix('appointments')->group(function () {
    Route::post('/', [AppointmentController::class, 'store']);
    Route::get('/', [AppointmentController::class, 'index']);
    Route::patch('/{id}/status', [AppointmentController::class, 'updateStatus']);
});
