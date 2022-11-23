import React from "react";
import styled from "styled-components";
import { Message } from "./Message";

const ChatBody = ({messages}) => {
  return <Container>
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
