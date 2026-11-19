<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('appointments')) {
            Schema::create('appointments', function (Blueprint $table) {
                $table->id();
                $table->string('reference_id', 50)->unique();
                $table->string('patient_name', 191);
                $table->string('patient_phone', 50)->index();
                $table->string('patient_email', 191)->nullable();
                $table->string('visit_type', 100)->default('Clinic Visit (Kundrathur Center)');
                $table->string('department', 191)->default('Myofascial Release (MFR) Therapy');
                $table->date('preferred_date')->index();
                $table->string('preferred_time', 100)->default('Morning (9:00 AM - 1:00 PM)');
                $table->unsignedTinyInteger('pain_level')->default(5);
                $table->text('medical_history')->nullable();
                $table->string('status', 50)->default('pending')->index();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
