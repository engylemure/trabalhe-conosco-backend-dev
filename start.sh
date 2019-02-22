#!/usr/bin/env bash
# Download initial data
# Verify if the data directory exists and if dont create it
echo "$( dirname $(realpath $0))/src/data/users.csv.gz"
if [ ! -d "./src/data" ]; then
    mkdir ./src/data
fi
if [ -f "./src/data/users.csv.gz" -o -f "./src/data/users.csv" ]
then
	echo "Users.csv already downloaded"

else
	wget  -nc -O ./src/data/users.csv.gz  "https://s3.amazonaws.com/careers-picpay/users.csv.gz"
fi

if [ -f "./src/data/users.csv.gz" ]
then
    # Extract file
    gunzip -c -d "$( dirname $(realpath $0))/src/data/users.csv.gz" > "$( dirname $(realpath $0))/src/data"
    rm ./src/data/users.csv.gz
fi

wget  -nc -O ./src/data/lista_relevancia_1.txt "https://raw.githubusercontent.com/PicPay/trabalhe-conosco-backend-dev/master/lista_relevancia_1.txt"
wget  -nc -O ./src/data/lista_relevancia_2.txt "https://raw.githubusercontent.com/PicPay/trabalhe-conosco-backend-dev/master/lista_relevancia_2.txt"

# Starting docker compose
docker-compose up -d
