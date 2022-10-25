import React from "react";
import contactImage from "../../../assets/user-default.jpg";
import styled from "styled-components";
import colors from "../../../global-styles/colors";
import ProfileImage from "../ProfileImage";

const ContactHeader = () => {
  return (
    <HeaderHead>
      <div className="header-user-info">
        <ProfileImage imageLink={contactImage} width={50} height={50} />
        <div className="header-user-names">
          <UserName>Braga</UserName>
          <CheckUserActivity>Online</CheckUserActivity>
        </div>
      </div>
    </HeaderHead>
  );
};

const HeaderHead = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${colors.chatroomMainColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & .header-user-info {
    width: 100%;
    padding-left: 1rem;
  }

  & .header-extra,
  & .header-user-info {
    display: flex;
    align-items: center;
  }

  & .header-user-names {
    margin-left: 10px;
  }
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 12pt;
  color: ${colors.absoluteLight};
`;

const CheckUserActivity = styled.p`
  font-weight: normal;
  font-size: 11pt;
  color: ${colors.absoluteLight};
  font-style: italic;
`;

export default ContactHeader;
