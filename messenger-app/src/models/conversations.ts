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
