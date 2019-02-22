<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrimaryRelevanceListSeeder extends Seeder
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
            $query_activate_local_infile="
            SET global local_infile=1;
            ";
            $query_disable_local_infile="
            SET global local_infile=0;
            ";
            $query = "
         LOAD DATA INFILE '$file'
         IGNORE
         INTO TABLE primary_relevance_list
         COLUMNS TERMINATED BY '\n'
         LINES TERMINATED BY '\n'
        (profile_uuid);";
            $pdo =  DB::connection()->getpdo();
            $pdo->exec($query_activate_local_infile);
            $pdo->exec($query);
            $pdo->exec($query_disable_local_infile);
        }
    }
}
