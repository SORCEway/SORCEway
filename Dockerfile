# Benutze ein kleines Alpen-Linux
FROM nginx:alpine
# NGINX Konfigurationsdatei
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Kopiere alle wichtigen Inhalte in den normalen NGINX
COPY ./ /usr/share/nginx/html/

RUN rm /usr/share/nginx/html/index.html && \
    ls /usr/share/nginx/html
