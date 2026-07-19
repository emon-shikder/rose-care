<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsWhyChooseUs extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_title',
        'description',
        'points_json',
        'image',
    ];

    protected $casts = [
        'points_json' => 'array',
    ];
}
