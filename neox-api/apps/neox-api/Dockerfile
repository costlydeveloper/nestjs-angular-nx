# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build neox-api`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t neox-api`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system neox-api && \
          adduser --system -G neox-api neox-api

COPY dist/apps/neox-api neox-api
RUN chown -R neox-api:neox-api .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
# RUN npm --prefix neox-api --omit=dev -f install

CMD [ "node", "neox-api" ]
