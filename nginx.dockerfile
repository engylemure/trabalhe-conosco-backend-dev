FROM nginx

ADD src/docker/files/vhost.conf /etc/nginx/conf.d/default.conf