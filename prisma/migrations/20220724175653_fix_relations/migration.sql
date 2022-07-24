/*
  Warnings:

  - You are about to drop the column `viewedUserId` on the `Mem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mem" DROP CONSTRAINT "Mem_viewedUserId_fkey";

-- AlterTable
ALTER TABLE "Mem" DROP COLUMN "viewedUserId";

-- CreateTable
CREATE TABLE "_MemToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MemToUser_AB_unique" ON "_MemToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MemToUser_B_index" ON "_MemToUser"("B");

-- AddForeignKey
ALTER TABLE "_MemToUser" ADD CONSTRAINT "_MemToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemToUser" ADD CONSTRAINT "_MemToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
