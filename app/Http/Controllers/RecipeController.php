<?php

namespace App\Http\Controllers;

use App\Recipe;

class RecipeController extends Controller
{
    public function getAll(){
			return Recipe::with('ingredients')->get();
    }
}
