# Build time image
FROM node:16-alpine3.16 AS build-env
WORKDIR /build
COPY ./ ./

ARG APP_NAME
ENV APP_NAME=$APP_NAME
ENV PUPPETEER_SKIP_DOWNLOAD='true'

# RUN apk add --no-cache --progress git
RUN npm ci && npm run db:generate && npm run build $APP_NAME common interfaces

# Runtime image
FROM node:16-alpine3.16

ARG APP_NAME
ENV APP_NAME=$APP_NAME
ENV PUPPETEER_SKIP_DOWNLOAD='true'

WORKDIR /app

COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
COPY /prisma ./prisma

RUN npm ci --omit=dev --ignore-scripts && npm run db:generate
COPY --from=build-env /build/dist/apps/${APP_NAME} ./dist

# CMD sleep 100000000
CMD node dist/apps/${APP_NAME}/src/main