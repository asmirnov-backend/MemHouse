-- CreateTable
CREATE TABLE "Mem" (
    "id" UUID NOT NULL,
    "imgUrls" TEXT[],
    "text" VARCHAR(1024),
    "tags" TEXT[],
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Mem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" VARCHAR(64) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
