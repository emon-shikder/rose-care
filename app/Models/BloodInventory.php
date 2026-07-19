<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodInventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'blood_group',
        'bags_available',
        'last_updated',
    ];

    protected $casts = [
        'last_updated' => 'datetime',
    ];
}
