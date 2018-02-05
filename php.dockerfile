FROM php

WORKDIR /srv/www

ADD src/www /srv/www
RUN apt-cache search php7.0-\*
RUN apt-get update && apt-get install php7.0-mbstring
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install

RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql

VOLUME ["/srv/www"]