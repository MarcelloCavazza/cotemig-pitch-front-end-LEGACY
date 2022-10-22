import React, { Suspense } from "react";
import MainContainer from "../components/chatroom/MainContainer";
import NavigationContainer from "../components/chatroom/navigation/NavigationBar";
import ContactHeader from "../components/chatroom/navigation/ContactHeader";
import ContactList from "../components/chatroom/navigation/ContactList";
import Contact from "../components/chatroom/navigation/Contact";
import ContactSearchBar from "../components/chatroom/searchbar/ContactSearchBar";
import ChatContainer from "../components/chatroom/chat/ChatContainer";
import ChatHeader from "../components/chatroom/chat/ChatHeader";
import ChatBody from "../components/chatroom/chat/ChatBody";
import ChatTextArea from "../components/chatroom/chat/ChatTextArea";
import LoadingChat from "../components/chatroom/LoadingChat";
import { useState } from "react";

const Chatroom = () => {
  const [selectedContact, setSelectedContact] = useState("");
  const [selectedChat, setSelectedChat] = useState();

  const handleContactClick = (prop) => {
    setSelectedContact(prop.target.value);
  };

  return (
    <MainContainer>
      <div className="main">
        <NavigationContainer>
          <ContactHeader />
          <ContactSearchBar />
          <ContactList>
            <Suspense fallback={<LoadingChat />}>
              <Contact
                onClick={handleContactClick}
                contactName="Mãe"
                lastMessage="1- Lavar a pia  2- Passar pano no chão  3- Varrer... "
              />
            </Suspense>
          </ContactList>
        </NavigationContainer>
        <ChatContainer>
          <ChatHeader />
          <ChatBody>
            <Suspense fallback={<LoadingChat />}>
              {/* Conditional Render dos chats aqui */}
            </Suspense>
          </ChatBody>
          <ChatTextArea />
        </ChatContainer>
      </div>
    </MainContainer>
  );
};

export default Chatroom;
