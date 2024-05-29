FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80 to the host
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
