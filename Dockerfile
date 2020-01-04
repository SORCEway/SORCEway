# Benutze ein kleines Alpen-Linux
FROM nginx:alpine
# Kopiere alle wichtigen Inhalte in den normalen NGINX
# Ordner
COPY . /usr/share/nginx/html