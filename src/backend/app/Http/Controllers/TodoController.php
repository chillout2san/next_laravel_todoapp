<?php

namespace App\Http\Controllers;
use App\Models\Todo;
use Illuminate\Http\Request;

// MARKING: cross-originの処理を実装する
class TodoController extends Controller
{
    public function fetchTodos(Request $request) {
      header('Access-Control-Allow-Origin: *');
      $id = (int) $request->input('user_id');
      $todos = Todo::where('user_id', $id)->select('title', 'content', 'status', 'deadline')->get();
      return json_decode($todos);
    }

    public function pushTodo(Request $request) {
      header('Access-Control-Allow-Origin: *');
      $todo = new Todo();
      $todo->user_id = $request->input('user_id');
      $todo->title = $request->input('title');
      $todo->content = $request->input('content');
      $todo->status = '作業中';
      $todo->deadline = $request->input('deadline');
      $todo->save();
    }
}
