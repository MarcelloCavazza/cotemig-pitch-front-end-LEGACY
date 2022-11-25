import styled from "styled-components";
import colors from "../../global-styles/colors";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px 500px 0px 500px;
  border-radius: 10px;
  padding: 50px 25px;

  & h1 {
    margin-bottom: 20px;
  }

  .href {
    width: 100%;
    display: flex;
    justify-content: right;
  }

  .label {
    width: 100%;
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
  }

  & a {
    color: ${colors.webLinksBlue};
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export default FormContainer;
