<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'department_id',
        'specialization_id',
        'designation',
        'experience_years',
        'fee',
        'bio',
        'profile_image',
        'facebook_url',
        'linkedin_url',
        'instagram_url',
    ];

    protected $casts = [
        'fee' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function specialization()
    {
        return $this->belongsTo(Specialization::class);
    }

    public function schedules()
    {
        return $this->hasMany(DoctorSchedule::class);
    }
}
