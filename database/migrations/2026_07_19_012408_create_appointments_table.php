<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('restrict');
            $table->foreignId('department_id')->constrained()->onDelete('restrict');
            $table->date('appointment_date');
            $table->time('time_slot');
            $table->enum('status', ['Pending', 'Confirmed', 'Completed', 'Cancelled'])->default('Pending');
            $table->text('reason_for_visit')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
