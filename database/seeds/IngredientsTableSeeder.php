<?php

use Illuminate\Database\Seeder;

class IngredientsTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('ingredients')->insert([
			'recipe_id' => 1,
			'name' => str_random(10),
			'amount' => 2,
		]);
	}
}
