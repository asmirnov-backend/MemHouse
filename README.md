# MemHouse

MemHouse is a platform to easy surf mems

## Zen

- Platform is only for mems. No messages, no something else

- Users can subscribe only for tags, not for communities (Like in VK). Thus, we will avoid the problem if the community is overwhelmed with subscribers and because of this, a lot of people watch it memes, although the memes are of poor quality.

- Show only hith rating mems with not duplicates

- Users can creates mems and earn money for that (We are not greedy)

## Architecture

![MemHouse architecture](https://user-images.githubusercontent.com/93443107/173183041-9be59e04-40d6-42b4-b394-a82431f6b0a4.png)

<https://drive.google.com/file/d/1uncUdHqMnCW973bLj6hlUAizCPfXi3_p/view?usp=sharing>

## Construction

![MemHouse constructor diagram](https://user-images.githubusercontent.com/93443107/173183086-825c3bc3-995a-42ef-8760-93d04e4f5856.png)

<https://app.diagrams.net/?libs=general;uml#G12t0Kjo5OfwtcxeGzsxaQjMOXes3jg-RM>

MemService knows about Prisma, because prisma provides nice abstraction. So "repository" concept is not needed.

## Setup

### POSTGRES

```bash
docker run --name postgres-local -p 5432:5432 -e POSTGRES_DB=mem-storage -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=root -d postgres
```
