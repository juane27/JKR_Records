# Use an nginx image as base
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files of the React application to the Nginx directory
COPY frontend/jkr_records/build .

# Expose port 80 for HTTP requests
EXPOSE 80

# Define the command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
