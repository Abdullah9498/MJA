FROM nginx:1-alpine AS runtime

ARG BASE_PATH=/app/copart-external-sentiment

# Remove default nginx config and site
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf.template

# Copy entrypoint
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

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

# Create temp dirs and set ownership for non-root
RUN mkdir -p /tmp/client_body /tmp/proxy /tmp/fastcgi /tmp/uwsgi /tmp/scgi \
 && chown -R nginx:nginx /tmp/client_body /tmp/proxy /tmp/fastcgi /tmp/uwsgi /tmp/scgi \
 && chown -R nginx:nginx /usr/share/nginx/html \
 && chown -R nginx:nginx /var/cache/nginx \
 && touch /tmp/nginx.pid && chown nginx:nginx /tmp/nginx.pid

EXPOSE 8080

USER nginx

ENTRYPOINT ["/docker-entrypoint.sh"]
