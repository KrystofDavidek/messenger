/*
  Warnings:

  - You are about to drop the column `contactId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contactUserId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_contactId_fkey";

-- DropIndex
DROP INDEX "User_contactId_unique";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "contactUserId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contactId";

-- CreateIndex
CREATE UNIQUE INDEX "Contact_contactUserId_unique" ON "Contact"("contactUserId");

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("contactUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
