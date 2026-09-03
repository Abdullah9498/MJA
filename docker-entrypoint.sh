#!/bin/sh
PORT="${PORT:-8080}"
sed "s/\$PORT/$PORT/g" /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
exec nginx -g "daemon off;"
