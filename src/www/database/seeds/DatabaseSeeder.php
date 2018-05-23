<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
             PriorityList1TableSeeder::class,
             PriorityList2TableSeeder::class
         ]);
    }
}
