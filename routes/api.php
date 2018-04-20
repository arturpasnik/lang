<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('user/register', 'APIRegisterController@register');
Route::post('user/login', 'APILoginController@login');
Route::get('user/refreshToken', 'APILoginController@refreshToken');

Route::group(['middleware' => 'jwt.auth'], function(){
	Route::get('/user', function() { return auth()->user();});
	Route::post('/user/logout', 'APILoginController@logout');
});


Route::get('recipe/all', 'RecipeController@getAll');
Route::get('recipe/{id}', 'RecipeController@getById');