<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lab_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('restrict');
            $table->foreignId('doctor_id')->constrained()->onDelete('restrict');
            $table->foreignId('test_id')->constrained('lab_tests')->onDelete('restrict');
            $table->json('result_data')->nullable();
            $table->string('document_path')->nullable();
            $table->enum('status', ['Pending', 'Completed'])->default('Pending');
            $table->dateTime('report_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lab_reports');
    }
};
