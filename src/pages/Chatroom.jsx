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
import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect } from "react";
import {Navigate} from "react-router-dom"


function requestBaseData(user_id){
  const request = axios.get(`http://localhost:3000/v1/client/listby/${user_id}`)
  return request
}

function generateContact(data){
  return (
    <Contact
      key = {data.contact_name}
      onClick={data.handle_contact_click}
      contactName={data.contact_name}
      /*lastMessage={data.last_message}*/
    />
  )
}

const Chatroom = () => {
  const token = new Cookies().get("token");
  const formated_token = token.split(".");
  const token_data = JSON.parse(atob(formated_token[1]));
  const [userData, updateUserData] = useState(); // {id, name}
  const [toRender, updateRender] = useState();
  useEffect((e) => {
    if(userData == null){
      requestBaseData(token_data.user_id).then((req) => {
        console.log(req);
        if(!req.data){
          updateUserData((e) => req.data)
        }
        else{
          updateUserData((e) => new Object({
            id: req.data.id,
            name: req.data.name
          }))
      }
      }).catch((error) => {
        updateUserData((e) => false);
        console.log(error);
      })
    }
    else if(userData == false){
      updateRender((e) => <Navigate to="/"/>)
    } // redirects to / if gets any kind of error in request to data
    else{
      updateRender((e) => <ChatElement name={userData.name}/>)
    }
  }, [userData])

  return (
    toRender
  );
};

const ChatElement = ({name}) => {
  const handleContactClick = (prop) => {
    const contact_name = prop.target.childNodes[0].childNodes[1].childNodes[0].innerText // rember, change this to use ref
    console.log(prop)
    setSelectedContact((e) => contact_name);
  };
  const [selectedContact, setSelectedContact] = useState("");
  const [contact_data, updateContactData] = useState([{handle_contact_click: handleContactClick, contact_name: "teste", last_message: "teste"}]);
  const [contact_list, updateContactList] = useState([]);

  return(
    <MainContainer>
      <div className="main">
        <NavigationContainer>
          <ContactHeader name={name} />
          <ContactSearchBar />
          <ContactList>
            <Suspense fallback={<LoadingChat />}>
              {contact_data.map((data) => generateContact(data))}
            </Suspense>
          </ContactList>
        </NavigationContainer>
        {selectedContact != "" ? <MessageChat contact_name={selectedContact}/> : ""}
      </div>
    </MainContainer>
  )
}

const MessageChat = ({contact_name}) => {
  const [messages, insertMessages] = useState([{
    text_message: "teste",
    is_same_user: true
  }, 
  {
    text_message: "teste",
    is_same_user: false
  }]);
  return (
    <ChatContainer>
      <ChatHeader name={contact_name}/> 
            <ChatBody messages= {messages}>
              <Suspense fallback={<LoadingChat />}>
              </Suspense>
            </ChatBody>
            <ChatTextArea />
  </ChatContainer>
  )
}

export default Chatroom;

/*
TODO: 
1 - Set socketio at MessageChat element (with queue for messsages, etc)
2 - Set all contacts in contact list (and in element add chat id)
*/