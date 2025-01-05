/*
  Warnings:

  - Added the required column `authorId` to the `Boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardId` to the `Columns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boards" ADD COLUMN     "authorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Columns" ADD COLUMN     "boardId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Boards" ADD CONSTRAINT "Boards_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Columns" ADD CONSTRAINT "Columns_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Boards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
