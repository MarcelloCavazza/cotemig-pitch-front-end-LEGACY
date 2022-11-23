import styled from "styled-components";

const ContainerMessageStyled = styled.div`
    display:flex;
    width: 100%;
    justify-content: ${props => props.is_same_user ? "end" : "flex-start"}
`; 
const MessageStyled = styled.div`
    margin-top: 5px;
    border: 1px solid black;
    max-width: 50%;
    word-break: break-all;
    text-align: justify;
    padding: 5px;
    border-radius: 10px;
    background-color: ${props => props.is_same_user ? "#dcf8c6" : "white"};
    color: ${props => props.is_same_user ? "gray" : "black"};
    margin-${props => props.is_same_user ? "right" : "left"}: 10px;
`

export const Message = ({is_same_user, text_message}) => {
    return(
        <ContainerMessageStyled is_same_user={is_same_user}>
            <MessageStyled is_same_user={is_same_user}>{text_message}</MessageStyled>
        </ContainerMessageStyled>
    )
}