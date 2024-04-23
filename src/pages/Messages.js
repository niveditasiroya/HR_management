import React from "react";
import Info from "../components/messages/Info";
import Chat from "../components/messages/Chat";
import Contact from "../components/messages/Contact";

const Messages = () => {
  return (
    <div className="p-8">
      <div className="flex bg-white">
        {/* people in chat */}
        <Contact />
        {/* chat */}
        <Chat />
        {/* persion info */}
        <Info />
      </div>
    </div>
  );
};

export default Messages;
