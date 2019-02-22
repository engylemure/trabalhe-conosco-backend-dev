FROM jwilder/dockerize AS dockerize

FROM php:7.2.1-fpm-alpine

COPY --from=dockerize /usr/local/bin/dockerize /usr/local/bin

RUN apk add --update libxml2-dev openssl-dev bash curl-dev icu-dev git ca-certificates nodejs freetype-dev libjpeg-turbo-dev libpng-dev libmcrypt-dev nano

RUN docker-php-ext-install json xml pdo phar curl dom intl ctype pdo_mysql mysqli opcache gd iconv session mbstring zip > /dev/null

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ADD src/docker/env.tmpl /env.tmpl

WORKDIR /srv/www

ADD src/www /srv/www

RUN apk add --update --virtual build-dependencies build-base autoconf libtool

RUN apk add --update libmcrypt-dev mysql-client imagemagick-dev
RUN pecl install imagick
RUN docker-php-ext-enable imagick

VOLUME ["/srv/www"]

ENTRYPOINT ["dockerize", "-template", "/env.tmpl:/srv/www/.env"]

CMD ["sh","./start.sh"]