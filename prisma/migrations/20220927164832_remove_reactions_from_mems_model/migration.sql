/*
  Warnings:

  - You are about to drop the column `dislikes` on the `Mem` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Mem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mem" DROP COLUMN "dislikes",
DROP COLUMN "likes";
