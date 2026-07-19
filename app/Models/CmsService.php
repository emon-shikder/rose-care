<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsService extends Model
{
    use HasFactory;

    protected $fillable = [
        'icon_class',
        'title',
        'short_description',
        'long_description',
        'image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
