-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contactId" DROP NOT NULL;
