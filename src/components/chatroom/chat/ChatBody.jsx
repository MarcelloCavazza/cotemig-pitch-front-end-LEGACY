import React from "react";
import styled from "styled-components";
import { Message } from "./Message";

const ChatBody = ({messages, last_element_ref}) => {
  return <Container ref={last_element_ref}>
    {messages.map((e, i) => <Message key={i} text_message={e.text_message} is_same_user={e.is_same_user}/>)}
  </Container>;
};

const Container = styled.div`
  width: 100%;
  flex: 1;
  height: 50%;
  overflow-y: scroll;
`;

export default ChatBody;
