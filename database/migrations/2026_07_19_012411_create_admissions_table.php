<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('restrict');
            $table->foreignId('bed_id')->constrained()->onDelete('restrict');
            $table->foreignId('admitting_doctor_id')->constrained('doctors')->onDelete('restrict');
            $table->dateTime('admission_date');
            $table->dateTime('discharge_date')->nullable();
            $table->enum('status', ['Admitted', 'Discharged'])->default('Admitted');
            $table->text('reason');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};
