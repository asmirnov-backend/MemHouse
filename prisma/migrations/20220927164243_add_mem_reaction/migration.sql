-- CreateEnum
CREATE TYPE "MemReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "MemReaction" (
    "id" UUID NOT NULL,
    "memId" UUID NOT NULL,
    "type" "MemReactionType" NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "MemReaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MemReaction" ADD CONSTRAINT "MemReaction_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemReaction" ADD CONSTRAINT "MemReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
