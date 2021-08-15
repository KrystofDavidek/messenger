import React, { useEffect } from "react";
import BEMHelper from "react-bem-helper";
import { Searchbar } from "./Searchbar";
import { SendForm } from "./SendForm";
import { ConversationContent } from "./ConversationContent";
import { ConversationInterface } from "../../models/conversations";
import { useRecoilState } from "recoil";
import { activeConversationState, recentConversationsState } from "../../store/atoms";
import useSWR from "swr";
import { fetcher, postFetcher } from "../../utils/fetcher";

const classes = new BEMHelper({
  name: "conversation",
});

const activeUserId = 1;
const activeConversationId = 2;

const getUserParticipantId = (userId: number, conversation: ConversationInterface) => {
  let userParticipantId: number = 0;
  conversation.participants.map((participant) => {
    if (participant.userId === userId) {
      userParticipantId = participant.id;
    }
  });
  return userParticipantId;
};

export const Conversation = () => {
  const [activeConversation, setActiveConversation] = useRecoilState(activeConversationState);
  const [recentConversations, setRecentConversations] = useRecoilState(recentConversationsState);

  const { data, error } = useSWR([`conversation/${activeConversationId}`, activeUserId], fetcher);

  useEffect(() => {
    const set = () => {
      if (activeConversation.isLoading && data) {
        setActiveConversation({ isLoading: false, userParticipantId: getUserParticipantId(activeUserId, data), data: data });
      }
    };
    set();
  });

  const sendMessage = async (message: string) => {
    if (message.length < 1) {
      return;
    }
    const response = await postFetcher(
      `conversation/${activeConversationId}/message`,
      activeUserId,
      JSON.stringify({ content: message })
    );
    const updatedConversation = response as ConversationInterface;
    const filteredConversations = recentConversations.data.filter((c) => {
      return c.id !== updatedConversation.id;
    });
    setActiveConversation({ ...activeConversation, data: updatedConversation });
    setRecentConversations({ ...recentConversations, data: [updatedConversation, ...filteredConversations] });
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section {...classes()} title="Conversation">
      <h2 {...classes("title")}>Conversation</h2>
      <Searchbar />
      <ConversationContent messages={activeConversation.data.messages} userParticipantId={activeConversation.userParticipantId} />
      <SendForm onSendMessage={sendMessage} />
    </section>
  );
};
