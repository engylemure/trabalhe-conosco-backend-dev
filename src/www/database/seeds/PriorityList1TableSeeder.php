<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PriorityList1TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = base_path('data/lista_relevancia_1.txt');
        if($file){
            $query = "
         LOAD DATA INFILE '$file'
         INTO TABLE priority_list1
         COLUMNS TERMINATED BY '\n'
         LINES TERMINATED BY '\n'
        (string_id);";
            $pdo =  DB::connection()->getpdo();
            $pdo->exec($query);
        }
    }
}
