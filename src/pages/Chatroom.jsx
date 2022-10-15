import React, { Suspense } from 'react'
import MainContainer from '../components/chatroom/MainContainer'
import NavigationContainer from '../components/chatroom/navigation/NavigationBar'
import ContactHeader from '../components/chatroom/navigation/ContactHeader'
import ContactList from '../components/chatroom/navigation/ContactList'
import Contact from '../components/chatroom/navigation/Contact'
import ContactSearchBar from '../components/chatroom/searchbar/ContactSearchBar'
import ChatContainer from '../components/chatroom/chat/ChatContainer'
import ChatHeader from '../components/chatroom/chat/ChatHeader'
import ChatBody from '../components/chatroom/chat/ChatBody'
import ChatTextArea from '../components/chatroom/chat/ChatTextArea'
import LoadingChat from '../components/chatroom/LoadingChat'
import { useState } from 'react'

const Chatroom = () => {

  const [selectedContact, handleContactClick] = useState();
  const [selectedChat, handleSelectChat] = useState();

  const onHandleContactClick = (event) => {
    console.log(event)
  }

  return (
    <MainContainer>
      <div className='main'>
        <NavigationContainer>
          <ContactHeader />
          <ContactSearchBar />
          <ContactList>
            <Suspense fallback={<LoadingChat />}>
              <Contact onClick={onHandleContactClick} contactName='Braga' lastMessage='Eu chupo cachorro quente escondido'/>
            </Suspense>          
          </ContactList>
        </NavigationContainer>
        <ChatContainer>
          <ChatHeader />
          <ChatBody>
            <Suspense fallback={<LoadingChat />}>
              {/* COnditional Render dos chats aqui, criarei dois componentes para o chat, dependendo do usuário que digitou */}
            </Suspense>
          </ChatBody>
          <ChatTextArea />
        </ChatContainer>
      </div>
    </MainContainer>
  )
}

export default Chatroom