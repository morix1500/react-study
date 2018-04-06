FROM nginx:1.13.11-alpine

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
