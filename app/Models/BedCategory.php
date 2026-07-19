<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BedCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price_per_day',
    ];

    protected $casts = [
        'price_per_day' => 'decimal:2',
    ];

    public function beds()
    {
        return $this->hasMany(Bed::class);
    }
}
