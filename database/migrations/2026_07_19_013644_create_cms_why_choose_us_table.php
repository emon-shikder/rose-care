<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cms_why_choose_us', function (Blueprint $table) {
            $table->id();
            $table->string('section_title');
            $table->text('description')->nullable();
            $table->json('points_json')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cms_why_choose_us');
    }
};
