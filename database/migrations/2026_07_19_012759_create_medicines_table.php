<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('generic_name');
            $table->string('category', 100);
            $table->string('manufacturer')->nullable();
            $table->integer('stock_quantity')->default(0);
            $table->decimal('unit_price', 10, 2)->default(0.00);
            $table->date('expiry_date');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medicines');
    }
};
