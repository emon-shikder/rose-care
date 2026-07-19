<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'generic_name',
        'category',
        'manufacturer',
        'stock_quantity',
        'unit_price',
        'expiry_date',
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'unit_price' => 'decimal:2',
    ];
}
