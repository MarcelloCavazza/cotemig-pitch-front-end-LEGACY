import styled from 'styled-components';
import colors from '../../global-styles/colors'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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

    & a {
        color: ${colors.webLinksBlue};
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }
`;

export default FormContainer;