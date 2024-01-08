FROM node
COPY docker/entrypoint.sh /sbin/entrypoint.sh
RUN chmod +X /sbin/entrypoint.sh
RUN adduser --shell /bin/bash -u 1001 user

WORKDIR /app
RUN chown -R 1001 /app
RUN chmod -R 700 /app
USER 1001
COPY . .
COPY docker/.env.docker .env

RUN npm i
ENTRYPOINT [ "/sbin/entrypoint.sh" ]
