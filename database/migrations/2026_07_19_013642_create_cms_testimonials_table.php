<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cms_testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('patient_name', 100);
            $table->string('role_or_location', 100)->nullable();
            $table->text('content');
            $table->integer('rating')->default(5);
            $table->string('avatar_image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cms_testimonials');
    }
};
