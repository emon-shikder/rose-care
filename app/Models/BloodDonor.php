<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodDonor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'blood_group',
        'age',
        'phone',
        'address',
        'last_donation_date',
    ];

    protected $casts = [
        'last_donation_date' => 'date',
    ];
}
