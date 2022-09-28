/*
  Warnings:

  - You are about to drop the column `money` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "money";

-- CreateTable
CREATE TABLE "Wallet" (
    "id" UUID NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ownerId" UUID NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
