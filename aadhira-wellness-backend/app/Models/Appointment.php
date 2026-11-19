<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $table = 'appointments';

    protected $fillable = [
        'reference_id',
        'patient_name',
        'patient_phone',
        'patient_email',
        'visit_type',
        'department',
        'preferred_date',
        'preferred_time',
        'pain_level',
        'medical_history',
        'status',
    ];

    protected $casts = [
        'preferred_date' => 'date:Y-m-d',
        'pain_level' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
