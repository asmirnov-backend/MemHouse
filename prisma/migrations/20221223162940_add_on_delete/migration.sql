-- DropForeignKey
ALTER TABLE "ImageMeta" DROP CONSTRAINT "ImageMeta_memId_fkey";

-- DropForeignKey
ALTER TABLE "MemReaction" DROP CONSTRAINT "MemReaction_memId_fkey";

-- DropForeignKey
ALTER TABLE "MemReaction" DROP CONSTRAINT "MemReaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_memId_fkey";

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "ImageMeta" ADD CONSTRAINT "ImageMeta_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemReaction" ADD CONSTRAINT "MemReaction_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemReaction" ADD CONSTRAINT "MemReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
