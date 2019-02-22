<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = base_path('data/users.csv');
        var_dump($file);
        if($file){
            $query_activate_local_infile="
            SET global local_infile=1;
            ";
            $query_disable_local_infile="
            SET global local_infile=0;
            ";
            $query = "
             LOAD DATA INFILE '$file'
             INTO TABLE profiles
             COLUMNS TERMINATED BY ','
              ENCLOSED BY '\"'
             LINES TERMINATED BY '\r\n'
            (uuid,name,username);
            ";
            $pdo =  DB::connection()->getpdo();
            $pdo->exec($query_activate_local_infile);
            $pdo->exec($query);
            $pdo->exec($query_disable_local_infile);
        }
    }
}
