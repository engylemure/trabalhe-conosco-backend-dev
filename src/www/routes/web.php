<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//$router->get('/', function () use ($router) {
//    return $router->app->version();
//});

$router->group(['prefix' => 'api'], function () use ($router) {
    // User Routing
    $router->get('users', ['uses' => 'UserController@index']);
    $router->get('users/{id}', [ 'uses' => 'UserController@show']);
    $router->post('users', [ 'uses' => 'UserController@create']);
    $router->delete('users/{id}', [ 'uses' => 'UserController@delete']);
    $router->put('users/{id}', ['uses' => 'UserController@update']);
    $router->patch('users/{id}', ['uses' => 'UserController@update']);
    // Profile Routing
    $router->get('profiles', ['uses' => 'ProfileController@index']);
    $router->get('profiles/{id}', [ 'uses' => 'ProfileController@show']);
    $router->post('profiles', [ 'uses' => 'ProfileController@create']);
    $router->delete('profiles/{id}', [ 'uses' => 'ProfileController@delete']);
    $router->put('profiles/{id}', ['uses' => 'ProfileController@update']);
    $router->patch('profiles/{id}', ['uses' => 'ProfileController@update']);
});