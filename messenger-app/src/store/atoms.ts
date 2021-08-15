import { atom } from "recoil";
import { ConversationInterface } from "../models/conversations";

export interface activeConversationView {
  isLoading: boolean;
  userParticipantId: number;
  data: ConversationInterface;
}

export interface recentConversationsView {
  isLoading: boolean;
  data: ConversationInterface[];
}

export const activeConversationState = atom<activeConversationView>({
  key: "activeConversation",
  default: {
    isLoading: true,
    userParticipantId: 0,
    data: {
      id: 0,
      name: "",
      createdAt: "",
      updatedAt: "",
      messages: [],
      participants: [],
    },
  },
});

export const recentConversationsState = atom<recentConversationsView>({
  key: "recentConversations",
  default: {
    isLoading: true,
    data: [],
  },
});
