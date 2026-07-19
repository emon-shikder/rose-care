<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    use HasFactory;

    protected $fillable = [
        'bed_category_id',
        'room_number',
        'bed_number',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(BedCategory::class, 'bed_category_id');
    }

    public function admissions()
    {
        return $this->hasMany(Admission::class);
    }
}
