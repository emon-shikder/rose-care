<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsTestimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_name',
        'role_or_location',
        'content',
        'rating',
        'avatar_image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
