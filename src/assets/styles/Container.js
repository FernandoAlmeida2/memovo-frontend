import styled from "styled-components";
import coverImg from "../images/cover.jpg";
export const Container = styled.div`
  background-image: url(${coverImg});
  background-color: #b52022;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media(max-width: 700px) {
    background-size: 100vw 50vh;
  }
`;
