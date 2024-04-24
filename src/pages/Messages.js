import React from "react";
import Info from "../components/messages/Info";
import Chat from "../components/messages/Chat";
import Contact from "../components/messages/Contact";

const Messages = () => {
  return (
    <div className="h-[89.5vh] mx-8 flex bg-white">
      <Contact />
      <Chat />
      <Info />
    </div>
  );
};

export default Messages;
