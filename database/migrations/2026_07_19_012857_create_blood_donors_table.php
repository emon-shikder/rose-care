<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blood_donors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->enum('blood_group', ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
            $table->integer('age');
            $table->string('phone', 20);
            $table->text('address')->nullable();
            $table->date('last_donation_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blood_donors');
    }
};
