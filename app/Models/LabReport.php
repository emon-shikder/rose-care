<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'test_id',
        'result_data',
        'document_path',
        'status',
        'report_date',
    ];

    protected $casts = [
        'result_data' => 'array',
        'report_date' => 'datetime',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function test()
    {
        return $this->belongsTo(LabTest::class, 'test_id');
    }
}
