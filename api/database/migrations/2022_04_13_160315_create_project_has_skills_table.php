<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_has_skills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')
                  ->references('id')
                  ->on('projects');
            $table->foreignId('skill_id')
                  ->references('id')
                  ->on('skills');
            $table->unique(['project_id', 'skill_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_has_skills');
    }
};
