import styled from "styled-components";

export const LogRegScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
  width: 360px;
  min-height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 5px #ffffff;
  h1 {
    font-size: 32px;
    width: 83%;
  }

  @media (max-width: 700px) {
    width: 70vw;
    min-height: auto;
    padding: 4.2vw 0;
    gap: 2.9vw;
    h1 {
    font-size: 5vw;
  }
  } 
`;
