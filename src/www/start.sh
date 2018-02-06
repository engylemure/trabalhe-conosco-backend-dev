chmod -R 777 ./
composer install
php artisan migrate
apk del build-dependencies
exec php-fpm
