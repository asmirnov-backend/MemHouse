-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_memId_fkey";

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
