//import { useState } from "react";

import styled from "styled-components";
import Form from "../../components/Form/Form";
import { StyledLink } from "../../components/Form/FormStyle";

export default function Login() {
  const fields = ["Email", "Password"];

  return (
    <Container>
      <h1>MemoVo</h1>
      <Form fields={fields} type="SIGN IN" />
      <StyledLink to="signup">SIGN UP</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  h1 {
    color: white;
    font-size: 8.53vw;
    font-weight: 400;
  }
`;
