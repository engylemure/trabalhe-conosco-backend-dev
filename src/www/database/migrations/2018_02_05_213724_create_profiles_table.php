<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('string_id',256)->unique();
            $table->text('name');
            $table->text('username');
            $table->timestamps();
        });

        $file = base_path('data/users.csv');
        if($file){
            $query = "
         LOAD DATA INFILE '$file'
         INTO TABLE profiles
         COLUMNS TERMINATED BY ','
          ENCLOSED BY '\"'
         LINES TERMINATED BY '\r\n'
        (string_id,name,username);";
            $pdo =  DB::connection()->getpdo();
            $pdo->exec($query);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
