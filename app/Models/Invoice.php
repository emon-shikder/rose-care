<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_number',
        'patient_id',
        'appointment_id',
        'admission_id',
        'subtotal',
        'tax_amount',
        'discount',
        'total_amount',
        'paid_amount',
        'status',
        'payment_method',
        'due_date',
    ];

    protected $casts = [
        'due_date' => 'date',
        'subtotal' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'discount' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function admission()
    {
        return $this->belongsTo(Admission::class);
    }

    public function items()
    {
        return $this->hasMany(InvoiceItem::class);
    }
}
