FROM node:latest

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
#COPY --chown=app:app package*.json .
COPY --chown=app:app package*.json .
RUN npm install
#COPY --chown=app:app . .
COPY --chown=app:app . .

EXPOSE 4200


CMD ["npm", "start"]
