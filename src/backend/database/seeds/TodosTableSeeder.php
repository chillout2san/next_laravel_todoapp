<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            [
                'user_id' => 0,
                'title' => '買い物',
                'content' => '卵は絶対',
                'status' => '作業中',
                'deadline' => '2021-12-30'
            ],
            [
                'user_id' => 0,
                'title' => '皿洗い',
                'content' => '水筒が多いね',
                'status' => '作業中',
                'deadline' => '2021-12-31'
            ],
            [
                'user_id' => 0,
                'title' => '洗濯',
                'content' => 'ネットを使って',
                'status' => '作業中',
                'deadline' => '2022-1-10'
            ],
            [
                'user_id' => 0,
                'title' => '勉強',
                'content' => '宿題をしよう',
                'status' => '依頼中',
                'deadline' => '2022-1-20'
            ],
            [
                'user_id' => 0,
                'title' => '料理',
                'content' => '作り置きしよう',
                'status' => '完了',
                'deadline' => '2022-1-31'
            ],
            [
                'user_id' => 0,
                'title' => '就寝',
                'content' => '健康第一',
                'status' => '作業中',
                'deadline' => '2022-3-1'
            ],
        ]);
    }
}
