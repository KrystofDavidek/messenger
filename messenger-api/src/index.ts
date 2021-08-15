import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

import validate from "uuid-validate";
import { ConversationReq } from "./interfaces";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const prisma = new PrismaClient();
const port: number = 5000;
const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  req.userId = req.get("x-user") || "0";
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: +req.userId,
      },
    });
    user ? next() : res.status(401).send("User is unauhorized!");
  } catch (e) {
    res.status(401).send("User is unauhorized!");
  }
});

app.use(express.json());

app.get("/conversation/:id(\\d+)/messages", async (req: ConversationReq, res) => {
  let messages;
  if (req.query.author) {
    messages = await prisma.conversation.findFirst({
      where: {
        id: +req.params.id,
        participants: {
          some: {
            userId: +req.userId,
          },
        },
      },
      select: {
        messages: {
          where: {
            participant: {
              userId: +req.userId,
            },
          },
        },
      },
    });
  } else {
    messages = await prisma.conversation.findFirst({
      where: {
        id: +req.params.id,
        participants: {
          some: {
            userId: +req.userId,
          },
        },
      },
      select: {
        messages: true,
      },
    });
  }
  messages ? res.send(messages) : res.status(400).json({ error: "Conversation does not exists" });
});

app.get("/conversation/recent", async (req, res) => {
  const conversations = await prisma.conversation.findMany({
    where: {
      participants: {
        some: {
          userId: +req.userId,
        },
      },
    },
    take: 10,
    orderBy: { updatedAt: "desc" },
    select: {
      updatedAt: true,
      id: true,
      messages: {
        orderBy: { sentAt: "desc" },
        take: 1,
        include: {
          participant: true,
        },
      },
    },
  });
  conversations ? res.send(conversations) : res.status(400).json({ error: "Conversations do not exists" });
});

app.get("/conversation/:id(\\d+)", async (req: ConversationReq, res) => {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: +req.params.id,
      participants: {
        some: {
          userId: +req.userId,
        },
      },
    },
    select: {
      messages: {
        orderBy: { sentAt: "asc" },
      },
      participants: true,
    },
  });
  conversation ? res.send(conversation) : res.status(400).json({ error: "Conversation does not exists" });
});

app.post("/conversation/:id(\\d+)/message", async (req: ConversationReq, res) => {
  const participantId = await getParticipantId(+req.params.id, +req.userId);
  if (!participantId) {
    res.status(400).json({ error: "Conversation does not exists" });
  }
  await prisma.conversation.update({
    where: { id: +req.params.id },
    data: {
      updatedAt: new Date(),
      messages: {
        create: [
          {
            content: req.body.content,
            participant: {
              connect: {
                id: +participantId,
              },
            },
          },
        ],
      },
    },
  });
  const updatedConversation = await prisma.conversation.findFirst({
    where: {
      id: +req.params.id,
      participants: {
        some: {
          userId: +req.userId,
        },
      },
    },
    select: {
      updatedAt: true,
      id: true,
      messages: {
        orderBy: { sentAt: "asc" },
        include: {
          participant: true,
        },
      },
    },
  });
  res.send(updatedConversation);
});

app.post("/conversation", async (req, res) => {
  await prisma.conversation.create({
    data: {
      name: req.body.name,
      participants: {
        create: req.body.participants,
      },
    },
  });
  res.send("Conversation was created");
});

app.put("/conversation/:id(\\d+)/message/:uuid", async (req: ConversationReq, res) => {
  if (!validate(req.params.uuid)) {
    res.status(400).json({ error: "Bad message uuid" });
  }
  try {
    await prisma.conversation.update({
      where: { id: +req.params.id },
      data: {
        messages: {
          update: {
            where: { id: req.params.uuid },
            data: {
              content: req.body.content,
              isEdited: true,
            },
          },
        },
      },
    });
    res.send("Conversation was edited");
  } catch (e) {
    res.status(400).json({ error: "Message doest not exist in conversation" });
  }
});

app.delete("/conversation/:id(\\d+)/message/:uuid", async (req: ConversationReq, res) => {
  if (!validate(req.params.uuid)) {
    res.status(400).json({ error: "Bad message uuid" });
  }
  try {
    await prisma.conversation.update({
      where: { id: +req.params.id },
      data: {
        messages: {
          update: {
            where: { id: req.params.uuid },
            data: {
              isHidden: true,
            },
          },
        },
      },
    });
    res.send("Conversation was deleted");
  } catch (e) {
    res.status(400).json({ error: "Message doest not exist in conversation" });
  }
});

const getParticipantId = async (conversationId: number, userId: number) => {
  const participants = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
    },
    take: 1,
    select: {
      participants: {
        where: { userId: userId },
      },
    },
  });
  return participants ? participants.participants[0].id : false;
};

async function main() {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
