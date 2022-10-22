import React from "react";
import styled from "styled-components";
import braga from "../../../assets/ctt-team/braga.jpeg";
import colors from "../../../global-styles/colors";
import { ContactName } from "../navigation/ContactTexts";
import ProfileImage from "../ProfileImage";

const ChatHeader = () => {
  return (
    <Header>
      <div className="contact-info-container">
        <ProfileImage imageLink={braga} width={50} />
        <ContactName>Braga</ContactName>
      </div>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${colors.chatroomMainColor};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .contact-info-container {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 1rem;
  }
`;

export default ChatHeader;
