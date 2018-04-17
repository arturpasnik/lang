<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ingredient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::create('ingredients', function (Blueprint $table) {
		    $table->increments('id');
		    $table->integer('recipe_id')->unsigned();
		    $table->foreign('recipe_id')->references('id')->on('recipes');
		    $table->string('name');
		    $table->integer('amount');
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
        //
    }
}
