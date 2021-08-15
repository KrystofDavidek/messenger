import React from "react";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "mobile-header",
});

export const MobileHeader = () => {
  return (
    <div {...classes()}>
      <h1 {...classes("text")}>Messenger</h1>
    </div>
  );
};
