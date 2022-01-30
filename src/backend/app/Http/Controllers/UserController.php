<?php

namespace App\Http\Controllers;
use App\Models\Member;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function signUp(Request $request) {
        header('Access-Control-Allow-Origin: *');
        $member = new Member();
        $member->name = $request->input('name');
        $member->mail = $request->input('mail');
        $member->pass = Hash::make($request->input('pass'));
        $member->save();
        return ['user_id' => $member->id];
    }
}
