<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    // MARKING: ログインのAPIを作成する
    public function signUp(Request $request) {
        header('Access-Control-Allow-Origin: *');
        $response = [
            'user_id' => '0'
        ];
        return $response;
    }
}
