<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(ProfileTableSeeder::class);
        $this->command->info('Profile table seeded!');
    }
}

class ProfileTableSeeder extends Seeder {

    public function run()
    {
        $file = base_path('data/users.csv');
        $query = "
         LOAD DATA INFILE '$file'
         INTO TABLE profiles
         FIELDS TERMINATED BY ','
          ENCLOSED BY '\"'
         LINES TERMINATED BY '\r\n'
        (string_id,name,username);";
        $pdo =  DB::connection()->getpdo();
        $pdo->exec($query);
    }
}

class FirstPriorityListSeeder extends Seeder {
    public function run()
    {
        $file = base_path('data/lista_relevancia_1.txt');
        $query = "
         LOAD DATA INFILE '$file'
         INTO TABLE priority_list1
         LINES TERMINATED BY '\r\n'
        (string_id);";
        $pdo =  DB::connection()->getpdo();
        $pdo->exec($query);
    }
}

class SecondPriorityListSeeder extends Seeder {
    public function run()
    {
        $file = base_path('data/lista_relevancia_2.txt');
        $query = "
         LOAD DATA INFILE '$file'
         INTO TABLE priority_list2
         LINES TERMINATED BY '\r\n'
        (string_id);";
        $pdo =  DB::connection()->getpdo();
        $pdo->exec($query);
    }
}