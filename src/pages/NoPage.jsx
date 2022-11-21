import React from "react";
import styled from "styled-components";
import Footer from '../components/landingpage/footer/Footer'
import Text from "../components/landingpage/Text";

const NoPage = () => {
  return (
    <Container>
      <main>
        <Text size={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia dolor molestiae eaque consectetur, maiores a ex atque modi ipsam. Sint repellat exercitationem esse. Saepe, unde? Quos ea eligendi excepturi autem mollitia. Consequuntur, sint, temporibus quibusdam perspiciatis fugiat beatae asperiores veritatis delectus rerum adipisci eveniet laudantium magni a similique modi, eum dolorum cumque! Molestias suscipit voluptate porro explicabo magni blanditiis maiores optio, voluptates odit sed, debitis ipsum ratione beatae officia sapiente delectus officiis tenetur eius. Doloribus deserunt, iusto molestias molestiae perferendis, atque dicta dolor fuga autem numquam quas nesciunt, eveniet nihil cum? Atque commodi eveniet, quibusdam debitis assumenda voluptatum ea.</Text>
      </main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & main {
    flex: 1;
  }
`

export default NoPage;
