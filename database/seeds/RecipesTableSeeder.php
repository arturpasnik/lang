<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    DB::table('recipes')->insert([
		    'name' => str_random(10),
		    'desc' => str_random(50),
		    'imagePath' => 'http://www.free-icons-download.net/images/user-icon-32327.png',
	    ]);
    }
}
