
# Node image base
FROM docker.io/node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy entrypoint script into the container
COPY docker-entrypoint.sh /usr/local/bin/

# Set execute permissions on the script
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Set entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]

# Copy 'package.json' and 'package-lock.json' (if exists)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of project files into the container
COPY . .
