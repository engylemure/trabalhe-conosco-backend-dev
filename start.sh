#!/usr/bin/env bash
# Download initial data
if [ -f "./src/data/users.csv.gz" -o -f "./src/data/users.csv" ]
then
	echo "Users.csv already downloaded"
else
	wget  -nc -O ./data/users.csv.gz  "https://s3.amazonaws.com/careers-picpay/users.csv.gz"
	# Extract file
    gunzip ./src/data/users.csv.gz
    rm ./src/data/users.csv.gz
fi
wget  -nc -O ./src/data/lista_relevancia_1.txt "https://github.com/PicPay/trabalhe-conosco-backend-dev/blob/master/lista_relevancia_1.txt"
wget  -nc -O ./src/data/lista_relevancia_2.txt "https://github.com/PicPay/trabalhe-conosco-backend-dev/blob/master/lista_relevancia_2.txt"

# Starting docker compose
docker-compose up -d
