export interface ConversationInterface {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  messages: MessageInterface[];
  participants: Participant[];
}

export interface MessageInterface {
  id: string;
  content: string;
  sentAt: string;
  isHidden: boolean;
  isEdited: boolean;
  conversationId: number;
  participantId: number;
  participant: Participant;
}

export interface Participant {
  id: number;
  nickName: string;
  wasSeen: boolean;
  isMuted: boolean;
  isPinned: boolean;
  addedAt: string;
  conversationId: number;
  userId: number;
}

const mockParticipants: Participant[] = [
  {
    id: 0,
    nickName: "Sedoriko",
    wasSeen: false,
    isMuted: false,
    isPinned: false,
    addedAt: "1.10.2005",
    conversationId: 0,
    userId: 0,
  },
  {
    id: 1,
    nickName: "Astap",
    wasSeen: false,
    isMuted: false,
    isPinned: false,
    addedAt: "2.10.2005",
    conversationId: 0,
    userId: 1,
  },
];

const mockMessages: MessageInterface[] = [
  {
    id: "0",
    content: "Ahoj, jak se máš?",
    sentAt: "1.10.2005",
    isHidden: false,
    isEdited: false,
    conversationId: 0,
    participantId: 0,
    participant: mockParticipants[0],
  },
  {
    id: "1",
    content: "Dobře, co ty?",
    sentAt: "2.10.2005",
    isHidden: false,
    isEdited: false,
    conversationId: 0,
    participantId: 1,
    participant: mockParticipants[1],
  },
];

export const mockConversation: ConversationInterface = {
  id: 0,
  name: "Petr Davídek",
  createdAt: "1.10.2005",
  updatedAt: "1.10.2005",
  messages: mockMessages,
  participants: mockParticipants,
};

export const mockConversations: ConversationInterface[] = [mockConversation];
