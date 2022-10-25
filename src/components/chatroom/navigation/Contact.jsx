import React from "react";
import styled from "styled-components";
import colors from "../../../global-styles/colors";
import { ContactName, ContactLastMessage } from "../navigation/ContactTexts";
import ProfileImage from "../ProfileImage";

const Contact = ({
  onClick,
  lastMessage,
  contactName,
  contactImage,
  contactId,
}) => {
  return (
    <Container onClick={onClick} contactId={contactId}>
      <div className="contact-container">
        <ProfileImage imageLink={contactImage} width={60} height={60} outline />
        <div className="contact-info">
          <ContactName>{contactName}</ContactName>
          <ContactLastMessage>{lastMessage}</ContactLastMessage>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0 1rem;
  border-top: 1px solid ${colors.chatroomSeparationBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }

  &:active,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & .contact-container {
    display: flex;
    align-items: center;

    & .contact-info {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Contact;
