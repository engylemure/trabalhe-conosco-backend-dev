chmod -R 777 ./
composer install
php artisan migrate
apk del build-dependencies
if [ $APP_ENV == "dev" ] || [ $APP_ENV == "development" ]; then
  php -S 0.0.0.0:80 -t public
else
  exec php-fpm
fi

