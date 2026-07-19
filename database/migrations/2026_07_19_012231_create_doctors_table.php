<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('department_id')->constrained()->onDelete('restrict');
            $table->foreignId('specialization_id')->constrained()->onDelete('restrict');
            $table->string('designation');
            $table->integer('experience_years')->default(0);
            $table->decimal('fee', 10, 2)->default(0.00);
            $table->text('bio')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('facebook_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('instagram_url')->nullable();
            $table->timestamps();
        });

        // Add the circular foreign key to departments
        Schema::table('departments', function (Blueprint $table) {
            $table->foreign('head_doctor_id')->references('id')->on('doctors')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->dropForeign(['head_doctor_id']);
        });
        Schema::dropIfExists('doctors');
    }
};
