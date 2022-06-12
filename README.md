# MemHouse

MemHouse is a platform to easy surf mems

## Architecture

![MemHouse architecture](https://user-images.githubusercontent.com/93443107/173183041-9be59e04-40d6-42b4-b394-a82431f6b0a4.png)

<https://drive.google.com/file/d/1uncUdHqMnCW973bLj6hlUAizCPfXi3_p/view?usp=sharing>

## Construction

![MemHouse constructor diagram](https://user-images.githubusercontent.com/93443107/173183086-825c3bc3-995a-42ef-8760-93d04e4f5856.png)

<https://app.diagrams.net/?libs=general;uml#G12t0Kjo5OfwtcxeGzsxaQjMOXes3jg-RM>

## Setup

### POSTGRES

```bash
docker run --name postgres-local -p 5432:5432 -e POSTGRES_DB=mem-storage -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=root -d postgres
```
