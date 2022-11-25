import React, { Suspense } from "react";
import MainContainer from "../components/chatroom/MainContainer";
import NavigationContainer from "../components/chatroom/navigation/NavigationBar";
import ContactHeader from "../components/chatroom/navigation/ContactHeader";
import { EnterChat } from "../components/chatroom/navigation/ContactList";
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
import { Navigate } from "react-router-dom";
import io, { Socket } from "socket.io-client";

function requestBaseData(user_id) {
  const request = axios.get(
    `http://localhost:3000/v1/client/listby/${user_id}`
  );
  return request;
}

function generateContact(data) {
  return (
    <Contact
      key={data.contact_name}
      onClick={data.handle_contact_click}
      contactName={data.contact_name}
      /*lastMessage={data.last_message}*/
    />
  );
}

const Chatroom = () => {
  const token = new Cookies().get("token");
  const formated_token = token.split(".");
  const token_data = JSON.parse(atob(formated_token[1]));
  const [userData, updateUserData] = useState(); // {id, name}
  const [toRender, updateRender] = useState();
  useEffect(
    (e) => {
      if (userData == null) {
        requestBaseData(token_data.user_id)
          .then((req) => {
            console.log(req);
            if (!req.data) {
              updateUserData((e) => req.data);
            } else {
              updateUserData(
                (e) =>
                  new Object({
                    id: req.data.id,
                    name: req.data.name,
                  })
              );
            }
          })
          .catch((error) => {
            updateUserData((e) => false);
            console.log(error);
          });
      } else if (userData == false) {
        updateRender((e) => <Navigate to="/" />);
      } // redirects to / if gets any kind of error in request to data
      else {
        updateRender((e) => <ChatElement userData={userData} />);
      }
    },
    [userData]
  );

  return toRender;
};

const ChatElement = ({ userData }) => {
  /*const handleContactClick = (prop) => {
    const contact_name = prop.target.childNodes[0].childNodes[1].childNodes[0].innerText // rember, change this to use ref
    console.log(prop)
    setSelectedContact((e) => contact_name);
  };
  const [selectedContact, setSelectedContact] = useState("");
  const [contact_data, updateContactData] = useState([{handle_contact_click: handleContactClick, contact_name: "teste", last_message: "teste"}]);
  const [contact_list, updateContactList] = useState([]);*/
  const input_ref = useRef();
  const [seted_chat, setChat] = useState(null);
  const callbackButton = () => {
    const room_name = input_ref.current.value;
    if (room_name.replace(" ", "") != "") {
      input_ref.current.value = "";
      setChat((e) => (
        <MessageChat contact_name={room_name} user_id={userData.id} />
      ));
    } else {
      alert("Sala com nome vazio!");
    }
  };
  return (
    <MainContainer>
      <div className="main">
        <NavigationContainer>
          <ContactHeader name={userData.name} />
          {/*<ContactSearchBar />*/}
          {/*<ContactList input_ref={input_ref} >
            <Suspense fallback={<LoadingChat />}>
              {contact_data.map((data) => generateContact(data))}
            </Suspense>
          </ContactList>*/}
          <EnterChat callbackButton={callbackButton} refInput={input_ref} />
        </NavigationContainer>
        {seted_chat == null ? "" : seted_chat}
      </div>
    </MainContainer>
  );
};

const MessageChat = ({ contact_name, user_id }) => {
  const [socket, updateSocket] = useState(),
    input_ref = useRef(),
    last_element_ref = useRef(),
    [messages, insertMessages] = useState([]), // {text_message: "x", is_same_user: bool}
    callbackSend = (e) => {
      let message = input_ref.current.childNodes[0].childNodes[0].value;
      if (message == undefined || message == "") {
        message = input_ref.current.childNodes[0].childNodes[1].value;
      }
      if (message.replace(" ", "") != "") {
        input_ref.current.childNodes[0].childNodes[0].value = "";
        socket.emit("clientMessage", {
          message: message,
          sender_id: user_id,
        });
      }
    };
  useEffect(
    (e) => {
      insertMessages((e) => []);
      if (socket && socket.connected) {
        socket.disconnect();
      }
      updateSocket((e) =>
        io("http://localhost:4000", {
          query: {
            room_name: contact_name,
            idClient: "",
            idLawyer: "",
          },
        })
      );
    },
    [contact_name]
  );
  useEffect(
    (e) => {
      if (last_element_ref.current != undefined) {
        last_element_ref.current.scrollTop =
          last_element_ref.current.scrollHeight;
      }
    },
    [messages]
  );
  try {
    socket.on("serverResponse", (msg) => {
      insertMessages((e) => [
        ...messages,
        {
          text_message: msg.message_content,
          is_same_user: msg.sender_id == user_id,
        },
      ]);
    });
    socket.on("retriveHistory", (msg) => {
      const formated = msg.map((obj) =>
        Object({
          text_message: obj.message_content,
          is_same_user: obj.sender_id == user_id,
        })
      );
      insertMessages((e) => formated);
    });
  } catch (e) {
    console.log(e);
  }
  return (
    <ChatContainer>
      <ChatHeader name={contact_name} />
      <ChatBody messages={messages} last_element_ref={last_element_ref}>
        <Suspense fallback={<LoadingChat />}></Suspense>
      </ChatBody>
      <ChatTextArea callbackSend={callbackSend} inputRef={input_ref} />
    </ChatContainer>
  );
};

export default Chatroom;

/*
TODO: 
1 - Set socketio at MessageChat element (with queue for messsages, etc)
2 - Set all contacts in contact list (and in element add chat id)
*/
