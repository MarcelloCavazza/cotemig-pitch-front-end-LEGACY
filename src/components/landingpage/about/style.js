import styled from "styled-components";

const Container = styled.div`
  & .sobreempresa{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 120px;
  }


  & .imagem{
      width: 230%;
  }

  & .imagem img{
      width: 60%;
  }

  & .textosobre{
      width: 180%;
      margin-right: 6%;
  }

  & .textosobre p{
      color: white;
      font-size: 18px;
  }

  & .textosobre h2{
      text-align: center;
      color: #03989E;
      font-size: 50px;
  }
`;

export default Container;
