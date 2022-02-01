import Logo from "assets/logo.png";
import React from "react";

import {
  Container,
  SectionHeader,
  Logotipo,
  SectionBody,
  SectionFooter,
} from "./styles";

function Home() {
  return (
    <Container>
      <SectionHeader>
        <Logotipo src={Logo} />
      </SectionHeader>
      <SectionBody>Body</SectionBody>
      <SectionFooter>Footer</SectionFooter>
    </Container>
  );
}

export default Home;
