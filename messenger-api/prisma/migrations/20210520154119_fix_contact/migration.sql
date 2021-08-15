/*
  Warnings:

  - Made the column `contactUserId` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "contactUserId" SET NOT NULL;
