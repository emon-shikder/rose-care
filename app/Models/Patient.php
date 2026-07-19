<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'patient_code',
        'first_name',
        'last_name',
        'dob',
        'gender',
        'blood_group',
        'address',
        'profile_image',
        'emergency_contact_name',
        'emergency_contact_phone',
    ];

    protected $casts = [
        'dob' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
