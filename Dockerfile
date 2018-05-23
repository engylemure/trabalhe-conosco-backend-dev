FROM jwilder/dockerize AS dockerize

FROM php:7.2.1-fpm-alpine

COPY --from=dockerize /usr/local/bin/dockerize /usr/local/bin

RUN apk add --update libxml2-dev openssl-dev bash \
    curl-dev icu-dev git ca-certificates nodejs \
    freetype-dev libjpeg-turbo-dev libpng-dev \
    libmcrypt-dev nano libmemcached-dev zlib

RUN docker-php-ext-install zip json xml pdo phar \
    curl dom intl ctype pdo_mysql mysqli opcache gd \
    iconv session mbstring > /dev/null

ENV MEMCACHED_DEPS zlib-dev libmemcached-dev cyrus-sasl-dev

RUN set -xe \
    && apk add --no-cache --update --virtual .phpize-deps $PHPIZE_DEPS \
    && apk add --no-cache --update --virtual .memcached-deps $MEMCACHED_DEPS \
    && pecl install memcached \
    && echo "extension=memcached.so" > /usr/local/etc/php/conf.d/20_memcached.ini \
    && rm -rf /usr/share/php7 \
    && rm -rf /tmp/* \
    && apk del .memcached-deps .phpize-deps

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /srv/www

ADD src/docker/ /src
RUN cp -rf /src/* /
RUN rm -rf /src

ADD src/www /srv/www

RUN apk add --update --virtual build-dependencies build-base autoconf libtool

RUN apk add --update libmcrypt-dev mysql-client imagemagick-dev
RUN pecl install imagick
RUN docker-php-ext-enable imagick
RUN composer global require "laravel/lumen-installer"
RUN export PATH="$PATH:$HOME/.composer/vendor/bin"

VOLUME ["/etc/nginx/conf.d"]
VOLUME ["/srv/www"]

ENTRYPOINT ["dockerize", "-template", "/vhost.tmpl:/etc/nginx/conf.d/vhost.conf"]
CMD ["sh","/start.sh"]

