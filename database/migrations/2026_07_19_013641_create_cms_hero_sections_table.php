<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cms_hero_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('subtitle')->nullable();
            $table->string('primary_btn_text', 100)->nullable();
            $table->string('primary_btn_link')->nullable();
            $table->string('video_btn_text', 100)->nullable();
            $table->string('video_url')->nullable();
            $table->string('background_image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cms_hero_sections');
    }
};
