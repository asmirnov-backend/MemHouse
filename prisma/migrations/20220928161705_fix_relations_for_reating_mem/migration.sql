/*
  Warnings:

  - You are about to drop the column `ratingId` on the `Mem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mem" DROP CONSTRAINT "Mem_ratingId_fkey";

-- DropIndex
DROP INDEX "Mem_ratingId_key";

-- AlterTable
ALTER TABLE "Mem" DROP COLUMN "ratingId";

-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "memId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rating_memId_key" ON "Rating"("memId");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
