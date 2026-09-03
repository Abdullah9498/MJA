FROM nginx:1-alpine AS runtime

ARG BASE_PATH=/app/copart-external-sentiment

# Remove default nginx config and site
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf.template

# Copy entrypoint and fix line endings (Windows CRLF → LF)
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN sed -i 's/\r$//' /docker-entrypoint.sh && chmod +x /docker-entrypoint.sh

# Copy app files
COPY index.html /usr/share/nginx/html/index.html
COPY 404.html   /usr/share/nginx/html/404.html
COPY app.js     /usr/share/nginx/html/app.js
COPY styles.css /usr/share/nginx/html/styles.css
COPY assets/    /usr/share/nginx/html/assets/
COPY data/ /usr/share/nginx/html/data/

# Inject <base href> so relative asset paths resolve behind the Hub prefix
RUN sed -i "s|<head>|<head>\n  <base href=\"${BASE_PATH}/\">|" /usr/share/nginx/html/index.html \
 && sed -i "s|<head>|<head>\n  <base href=\"${BASE_PATH}/\">|" /usr/share/nginx/html/404.html

# Ensure writable paths for nginx
RUN mkdir -p /tmp/client_body /tmp/proxy /tmp/fastcgi /tmp/uwsgi /tmp/scgi \
 && chmod -R 777 /run \
 && chmod -R 777 /var/cache/nginx

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]
