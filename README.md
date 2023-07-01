# MemHouse

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/asmirnov-backend/MemHouse)

MemHouse is a platform to easy surf mems

## Zen

- Platform is only for mems. No messages, no something else

- Users can subscribe only for tags, not for communities (Like in VK). Thus, we will avoid the problem if the community is overwhelmed with subscribers and because of this, a lot of people watch it memes, although the memes are of poor quality.

- Show only hith rating mems with not duplicates

- Users can creates mems and earn money for that (We are not greedy)

## Architecture

![MemHouse architecture](https://user-images.githubusercontent.com/93443107/173183041-9be59e04-40d6-42b4-b394-a82431f6b0a4.png)

<https://drive.google.com/file/d/1uncUdHqMnCW973bLj6hlUAizCPfXi3_p/view?usp=sharing>

## Database

![DB schema](./prisma/ERD.svg)

## Construction

![MemHouse constructor diagram](https://user-images.githubusercontent.com/93443107/173183086-825c3bc3-995a-42ef-8760-93d04e4f5856.png)

<https://app.diagrams.net/?libs=general;uml#G12t0Kjo5OfwtcxeGzsxaQjMOXes3jg-RM>

MemService knows about Prisma, because prisma provides nice abstraction. So "repository" concept is not needed.

## Setup

### POSTGRES

```bash
docker run --name memhouse_db -p 5432:5432 -e POSTGRES_DB=memhouse -e POSTGRES_PASSWORD=adminUserPass -e POSTGRES_USER=adminUser -d postgres
```

### Use ngrok for apply connection to the client side in the Internet

```bash
/Users/user/Downloads/ngrok http 3002
```

## How to start full app:

- Start postgres in docker
- Start 'nest start'
- /Users/user/Downloads/ngrok http 3002
- Copy ngrok url to frontend in App.ts and codegen.yml
- firebase deploy client (frontend)

## DB for all time connect

https://customer.elephantsql.com/instance

## Build docker images

```bash
docker build -t user --build-arg APP_NAME=user .
docker build -t mem --build-arg APP_NAME=mem .
docker build -t gateway --build-arg APP_NAME=gateway .
```

## Start docker images

```bash
docker run --env-file ./.env user
docker run --env-file ./.env mem
docker run --env-file ./.env gateway
```
