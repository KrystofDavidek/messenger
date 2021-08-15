/*
  Warnings:

  - You are about to drop the column `userId` on the `Contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contactId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mainUserId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Made the column `contactId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_userId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "userId",
ADD COLUMN     "mainUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contactId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_contactId_unique" ON "User"("contactId");

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("mainUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
