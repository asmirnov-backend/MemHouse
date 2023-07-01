FROM node:16-alpine

WORKDIR /app

CMD npm run db:generate && npm run start:dev:${APP_NAME}
