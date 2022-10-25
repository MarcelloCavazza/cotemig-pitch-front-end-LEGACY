import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";
import colors from "../../global-styles/colors";

const LoadingChat = () => {
  return (
    <Container>
      <RotatingSpin />
    </Container>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const RotatingSpin = styled(AiOutlineLoading)`
  color: ${colors.logoGreenOne};
  font-size: 35pt;
  animation: ${rotate} 1s linear infinite;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingChat;
