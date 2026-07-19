<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->string('patient_code', 50)->unique();
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->date('dob');
            $table->enum('gender', ['Male', 'Female', 'Other']);
            $table->enum('blood_group', ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])->nullable();
            $table->text('address')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('emergency_contact_name', 100)->nullable();
            $table->string('emergency_contact_phone', 20)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
