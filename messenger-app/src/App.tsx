import React from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { MobileSwitcher } from "./components/MobileSwitcher/MobileSwitcher";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { Recent } from "./components/Recent/Recent";
import { Conversation } from "./components/Conversation/Conversation";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MobileHeader />
      <main className="content">
        <MobileSwitcher />
        <MainMenu />
        <Recent />
        <Conversation />
      </main>
    </RecoilRoot>
  );
}

export default App;
