import { PrismaClient } from "@prisma/client";
import { users, conversations } from "./data";
const prisma = new PrismaClient();

const createUsers = () =>
  Promise.all(
    users.map((u) =>
      prisma.user.create({
        data: u,
      })
    )
  );

const addContacts = async () => {
  await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      requestedContacts: {
        create: [
          {
            receiver: {
              connect: { id: 2 },
            },
          },
          {
            receiver: {
              connect: { id: 3 },
            },
          },
        ],
      },
    },
  });
};

const createConversations = () =>
  Promise.all(
    conversations.map((c) =>
      prisma.conversation.create({
        data: c,
      })
    )
  );

async function main() {
  await createUsers();
  await addContacts();
  await createConversations();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
