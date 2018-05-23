#!/usr/bin/env bash
# Create dir only if not exists
mkdir -p data
# Download initial data
if [ -f "./data/users.csv.gz" -o -f "./src/data/users.csv" ]
then
	echo "Users.csv already downloaded"
else
	wget  -nc -O ./data/users.csv.gz  "https://s3.amazonaws.com/careers-picpay/users.csv.gz"
	# Extract file
    gunzip ./data/users.csv.gz
    rm ./data/users.csv.gz
fi
wget  -nc -O ./data/lista_relevancia_1.txt "https://github.com/PicPay/trabalhe-conosco-backend-dev/raw/master/lista_relevancia_1.txt"
wget  -nc -O ./data/lista_relevancia_2.txt "https://github.com/PicPay/trabalhe-conosco-backend-dev/raw/master/lista_relevancia_2.txt"
php artisan db:se