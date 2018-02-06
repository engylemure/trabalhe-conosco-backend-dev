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
Use App\Profile;

Route::resource('profiles', 'ProfileController');
Route::post('register', 'Auth\RegisterController@register');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('login', 'Auth\LoginController@login');
Route::middleware('auth:api')
    ->get('/user', function (Request $request) {
        return $request->user();
    });
