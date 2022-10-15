import React, { Suspense } from 'react'
import ContactHeader from '../components/chatroom/navigation/ContactHeader'
import ContactList from '../components/chatroom/navigation/ContactList'
import Contact from '../components/chatroom/navigation/Contact'
import ChatHeader from '../components/chatroom/chat/ChatHeader'
import SearchBar from '../components/chatroom/searchbar/SearchBar'
import MainContainer from '../components/chatroom/MainContainer'
import NavigationTile from '../components/chatroom/navigation/NavigationBar'
import ChatBody from '../components/chatroom/chat/ChatBody'
import LoadingChat from '../components/chatroom/LoadingChat'
import { useState } from 'react'

const Chatroom = () => {

  const [selectedContact, handleContactClick] = useState();
  const [selectedChat, handleSelectChat] = useState();

  const tempDynamicChat = [
    {
      id: 1,
      contactName: 'Braga',
      contactLastMessage: 'Conversando comigo mesmo!'
    }
  ]

  const onHandleContactClick = (event) => {
    console.log(event)
  }

  return (
    <MainContainer>
      <div className='main'>
        <NavigationTile>
          <ContactHeader />
          <SearchBar />
          <ContactList>
            <Suspense fallback={<LoadingChat />}>
              <Contact onClick={onHandleContactClick}/>
            </Suspense>          
          </ContactList>
        </NavigationTile>
        <div className="message-container">
          <ChatHeader />
          <Suspense fallback={<LoadingChat />}>
            <ChatBody />
          </Suspense>
        </div>
      </div>
    </MainContainer>
  )
}

export default Chatroom