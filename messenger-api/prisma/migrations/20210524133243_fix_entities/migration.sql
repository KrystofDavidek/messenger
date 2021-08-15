/*
  Warnings:

  - You are about to drop the column `contactUserId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `conversationIsMuted` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `conversationIsPinned` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `conversationWasSeen` on the `Participant` table. All the data in the column will be lost.
  - Made the column `messageId` on table `Attachment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `receiverId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participantId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wasSeen` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_contactUserId_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_userId_fkey";

-- DropIndex
DROP INDEX "Contact_contactUserId_unique";

-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "messageId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "contactUserId",
DROP COLUMN "userId",
ADD COLUMN     "receiverId" INTEGER NOT NULL,
ADD COLUMN     "requesterId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "userId",
ADD COLUMN     "participantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "conversationIsMuted",
DROP COLUMN "conversationIsPinned",
DROP COLUMN "conversationWasSeen",
ADD COLUMN     "isMuted" BOOLEAN,
ADD COLUMN     "isPinned" BOOLEAN,
ADD COLUMN     "wasSeen" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
