<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('department_id')->constrained()->onDelete('restrict');
            $table->string('employee_code', 50)->unique();
            $table->string('designation', 100);
            $table->date('joining_date');
            $table->decimal('basic_salary', 10, 2)->default(0.00);
            $table->string('profile_image')->nullable();
            $table->enum('status', ['Active', 'On Leave', 'Resigned'])->default('Active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
