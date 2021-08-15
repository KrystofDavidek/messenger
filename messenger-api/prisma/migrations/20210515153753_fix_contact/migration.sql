/*
  Warnings:

  - You are about to drop the `_ContactToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contactId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ContactToUser" DROP CONSTRAINT "_ContactToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContactToUser" DROP CONSTRAINT "_ContactToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contactId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ContactToUser";

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
