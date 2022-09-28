/*
  Warnings:

  - Added the required column `createdUserId` to the `Mem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mem" ADD COLUMN     "createdUserId" UUID NOT NULL,
ADD COLUMN     "viewedUserId" UUID;

-- AddForeignKey
ALTER TABLE "Mem" ADD CONSTRAINT "Mem_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mem" ADD CONSTRAINT "Mem_viewedUserId_fkey" FOREIGN KEY ("viewedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
