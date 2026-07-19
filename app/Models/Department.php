<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'head_doctor_id',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function headDoctor()
    {
        return $this->belongsTo(Doctor::class, 'head_doctor_id');
    }

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }
}
