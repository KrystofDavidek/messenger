export const users = [
  {
    name: "Arthur Towish",
    showNotifications: false,
    requestedContacts: {
      create: [],
    },
    acceptedContacts: {
      create: [],
    },
    participants: {
      create: [],
    },
  },
  {
    name: "Nola Colbertson",
    showNotifications: false,
    requestedContacts: {
      create: [],
    },
    acceptedContacts: {
      create: [],
    },
    participants: {
      create: [],
    },
  },
  {
    name: "Nixie Pennell",
    showNotifications: false,
    requestedContacts: {
      create: [],
    },
    acceptedContacts: {
      create: [],
    },
    participants: {
      create: [],
    },
  },
];

const secondConversation = {
  updatedAt: "2021-05-15T16:09:05.371Z",
  participants: {
    create: [
      {
        nickName: "Arthur Towish",
        wasSeen: true,
        user: {
          connect: {
            id: 1,
          },
        },
        messages: {
          create: [
            {
              sentAt: "2021-05-15T16:09:00.371Z",
              content: "Jak se máš?",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
            {
              sentAt: "2021-05-15T16:09:02.371Z",
              content: "Jasnacka, oč jde?",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
            {
              sentAt: "2021-05-15T16:09:04.371Z",
              content: "Byl jsem na tréninku a pak jsem přišel dost mpozdě, tak jsem teď odpočíval, vyptával se někdo?",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
          ],
        },
      },
      {
        nickName: "Nixie Pennell",
        wasSeen: true,
        user: {
          connect: {
            id: 3,
          },
        },
        messages: {
          create: [
            {
              sentAt: "2021-05-15T16:09:01.371Z",
              content: "Jsi tu?",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
            {
              sentAt: "2021-05-15T16:09:03.371Z",
              content: "Včera jsem volal s tvojí mámou, tak mě zajímalo, jestli jsi doma...",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
            {
              sentAt: "2021-05-15T16:09:05.371Z",
              content: "Jak jsem psal, včera jsem byl venku s tvoji mámou a ptala se mě, jak jsi na tom s diplomkou.",
              attachments: {
                create: [],
              },
              conversation: {
                connect: { id: 2 },
              },
            },
          ],
        },
      },
    ],
  },
};

export const conversations = [
  {
    participants: {
      create: [
        {
          nickName: "Arthur Towish",
          wasSeen: true,
          user: {
            connect: {
              id: 1,
            },
          },
          messages: {
            create: [
              {
                content: "Jak se máš?",
                attachments: {
                  create: [],
                },
                conversation: {
                  connect: { id: 1 },
                },
              },
            ],
          },
        },
        {
          wasSeen: false,
          nickName: "Nola Colbertson",
          user: {
            connect: {
              id: 2,
            },
          },
          messages: {
            create: [],
          },
        },
      ],
    },
  },
  secondConversation,
];
