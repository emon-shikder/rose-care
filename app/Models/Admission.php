<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admission extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'bed_id',
        'admitting_doctor_id',
        'admission_date',
        'discharge_date',
        'status',
        'reason',
    ];

    protected $casts = [
        'admission_date' => 'datetime',
        'discharge_date' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function bed()
    {
        return $this->belongsTo(Bed::class);
    }

    public function admittingDoctor()
    {
        return $this->belongsTo(Doctor::class, 'admitting_doctor_id');
    }
}
