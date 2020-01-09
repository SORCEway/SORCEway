# Benutze ein kleines Alpen-Linux
FROM nginx:alpine
# NGINX Konfigurationsdatei
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Kopiere alle wichtigen Inhalte in den normalen NGINX
COPY ./ /var/www/html
