/*
  Warnings:

  - You are about to drop the column `imgUrls` on the `Mem` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Mem` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Mem" DROP COLUMN "imgUrls",
DROP COLUMN "tags";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" DATE,
ADD COLUMN     "name" VARCHAR(128) NOT NULL,
ADD COLUMN     "surname" VARCHAR(128) NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "ImageMeta" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "displayUrl" VARCHAR(256) NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "originMeta" JSONB NOT NULL,
    "memId" UUID,

    CONSTRAINT "ImageMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL,
    "value" VARCHAR(64) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MemToTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ImageMeta_displayUrl_key" ON "ImageMeta"("displayUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_value_key" ON "Tag"("value");

-- CreateIndex
CREATE UNIQUE INDEX "_MemToTag_AB_unique" ON "_MemToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MemToTag_B_index" ON "_MemToTag"("B");

-- AddForeignKey
ALTER TABLE "ImageMeta" ADD CONSTRAINT "ImageMeta_memId_fkey" FOREIGN KEY ("memId") REFERENCES "Mem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemToTag" ADD CONSTRAINT "_MemToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Mem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemToTag" ADD CONSTRAINT "_MemToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
