<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('beds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bed_category_id')->constrained()->onDelete('restrict');
            $table->string('room_number', 50);
            $table->string('bed_number', 50);
            $table->enum('status', ['Available', 'Occupied', 'Maintenance'])->default('Available');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('beds');
    }
};
