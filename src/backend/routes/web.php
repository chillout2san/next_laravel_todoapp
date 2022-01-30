<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('fetch_todos', 'TodoController@fetchTodos');
Route::post('push_todo', 'TodoController@pushTodo');
Route::post('sign_up', 'UserController@signUp');
Route::post('sign_in', 'UserController@signIn');