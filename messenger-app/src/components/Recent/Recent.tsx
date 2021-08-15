import React from "react";
import BEMHelper from "react-bem-helper";
import { Header } from "./Header";
import { RecentConversations } from "./RecentConversations";

const classes = new BEMHelper({
  name: "recent",
});

export const Recent = () => {
  return (
    <section {...classes()} title="Recent">
      <h2 {...classes("title")}>Recent</h2>
      <Header />
      <RecentConversations />
    </section>
  );
};
