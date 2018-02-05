FROM nginx:1.10

ADD src/docker/files/vhost.conf /etc/nginx/conf.d/default.conf