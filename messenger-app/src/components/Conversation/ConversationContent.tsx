import React from "react";
import { MessageInterface } from "../../models/conversations";
import { MessageFromUser } from "./MessageFromUser";
import { MessageToUser } from "./MessageToUser";

export interface MessageProps {
  content: string;
}
export interface MessagesProps {
  messages: MessageInterface[];
  userParticipantId: number;
}

export const ConversationContent: React.FC<MessagesProps> = ({ messages, userParticipantId }) => {
  const renderedMessages = messages.map((message: MessageInterface) => {
    return message.participantId === userParticipantId ? (
      <MessageFromUser key={message.id} content={message.content} />
    ) : (
      <MessageToUser key={message.id} content={message.content} />
    );
  });
  return <div className="conversation__content">{renderedMessages}</div>;
};
