/*
  Warnings:

  - You are about to drop the column `rating` on the `Mem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ratingId]` on the table `Mem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ratingId` to the `Mem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mem" DROP COLUMN "rating",
ADD COLUMN     "ratingId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Rating" (
    "id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mem_ratingId_key" ON "Mem"("ratingId");

-- AddForeignKey
ALTER TABLE "Mem" ADD CONSTRAINT "Mem_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
