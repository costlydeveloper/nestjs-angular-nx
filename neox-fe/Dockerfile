
#FROM docker.io/node:lts-alpine

#RUN mkdir -p /app
#WORKDIR /app
#COPY ["decorate-angular-cli.js", "package*.json", "/app/"]
#RUN npm ci
#COPY . /app
#COPY ["docker-entrypoint.sh", "/usr/local/bin/"]
#RUN chmod +x /usr/local/bin/docker-entrypoint.sh
#ENTRYPOINT ["docker-entrypoint.sh"]

# Prva faza: Instalacija zavisnosti
FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Druga faza: Kopiranje iz builder faze i pokretanje
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app .


COPY ["docker-entrypoint.sh", "/usr/local/bin/"]
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]
