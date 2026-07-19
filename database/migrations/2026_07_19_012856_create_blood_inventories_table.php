<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blood_inventory', function (Blueprint $table) {
            $table->id();
            $table->enum('blood_group', ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
            $table->integer('bags_available')->default(0);
            $table->dateTime('last_updated');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blood_inventory');
    }
};
