import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import styled from "styled-components";
import colors from "../../../global-styles/colors";

const ChatTextArea = ({callbackSend, inputRef}) => {
  return (
    <div>
      <TextArea ref={inputRef} onKeyDown={((e) => {
        if(e.key == "Enter"){
          e.preventDefault();
          callbackSend();
        }
      })} >
        <div className="container">
          <textarea
            cols={2}
            maxLength={2000}
            placeholder="Escreva sua mensagem"
            //onChange={(e) => {
            //  setTextArea(e.target.value);
            //  console.log(textArea);
            //}}
            required
          />
          <SendButton onClick={callbackSend}>
            <BiSend />
          </SendButton>
        </div>
      </TextArea>
    </div>
  );
};

const TextArea = styled.div`
  height: 4rem;
  background-color: ${colors.chatroomMainColor};
  display: flex;
  align-items: center;

  & .container {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    margin: 0 1rem;

    &:focus-within {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus-within ~ textarea {
      color: black;
    }

    & textarea {
      padding: 0rem 0px 0px 1rem;
      font-family: inherit;
      font-size: 12pt;
      color: white;
      flex-grow: 1;
      outline: 0;
      border: 0;
      border-radius: 10px;
      background-color: transparent;
      resize: none;
    }

    & button {
      height: 100%;
      width: 3rem;
      font-family: inherit;
      background-color: transparent;
      border: 0;
      border-radius: 10px;
      padding: 0.4rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const SendButton = styled.button`
  color: ${colors.logoGreenTwo};
  font-size: 16pt;
  display: grid;
  place-items: center;
  position: relative;

  &::before {
    content: "";
    width: 2.2rem;
    height: 2.2rem;
    transform: scale(0);
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    position: absolute;
    top: 6px;
    left: 6px;
  }

  &:hover ~ &::before {
    opacity: 1;
    animation: opacity 0.2s ease;
  }
`;

export default ChatTextArea;
