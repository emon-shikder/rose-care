<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsHeroSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'primary_btn_text',
        'primary_btn_link',
        'video_btn_text',
        'video_url',
        'background_image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
