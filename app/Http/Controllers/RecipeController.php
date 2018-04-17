<?php

namespace App\Http\Controllers;

use App\Recipe;

class RecipeController extends Controller
{

	public function getById($id){
		return Recipe::where('id',$id)->with('ingredients')->first();
	}

	public function getAll()
	{
		return Recipe::with('ingredients')->get();
	}
}
