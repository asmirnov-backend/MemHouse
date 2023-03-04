-- DropForeignKey
ALTER TABLE "Mem" DROP CONSTRAINT "Mem_createdUserId_fkey";

-- AlterTable
ALTER TABLE "Mem" ALTER COLUMN "createdUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Mem" ADD CONSTRAINT "Mem_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
