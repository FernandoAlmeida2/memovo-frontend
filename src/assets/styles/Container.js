import styled from "styled-components";
import coverImg from "../images/cover.jpg";
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap");

  * {
    font-family: "Josefin Sans", sans-serif;
    box-sizing: border-box;
  }
  background-image: url(${coverImg});
  background-color: #b52022;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
