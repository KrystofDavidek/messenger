/*
  Warnings:

  - Made the column `userId` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contactId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contactId" SET NOT NULL;
