<?php

use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('admin.leads');
});

Route::get('/admin/leads', [AppointmentController::class, 'adminIndex'])->name('admin.leads');
Route::post('/admin/leads/{id}/status', [AppointmentController::class, 'updateStatus'])->name('admin.leads.status');
