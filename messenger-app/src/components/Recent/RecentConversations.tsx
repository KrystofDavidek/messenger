import React, { useEffect } from "react";
import { PreviewConversation } from "./PreviewConversation";
import { useRecoilState } from "recoil";
import { recentConversationsState } from "../../store/atoms";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { mockConversations } from "../../models/conversations";

const activeUserId = 1;

export const RecentConversations = () => {
  const [recentConversations, setRecentConversations] = useRecoilState(recentConversationsState);

  const { data, error } = useSWR([`conversation/recent`, activeUserId], fetcher);

  useEffect(() => {
    const set = () => {
      if (recentConversations.isLoading && data) {
        setRecentConversations({ isLoading: false, data: data });
      }
    };
    set();
  });

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <div className="recent__conversations">
      {data
        ? recentConversations.data.map((conversation) => (
            <PreviewConversation key={conversation.id} conversation={conversation} />
          ))
        : mockConversations.map((conversation) => <PreviewConversation key={conversation.id} conversation={conversation} />)}
    </div>
  );
};
