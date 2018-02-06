<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriorityList1Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('priority_list1', function (Blueprint $table) {
            $table->increments('id');
            $table->string('string_id');
            $table->timestamps();
        });
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

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('priority_list1');
    }
}
