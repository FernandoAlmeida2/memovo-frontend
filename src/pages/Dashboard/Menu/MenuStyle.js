import styled from "styled-components";
import menuImg from "../../../assets/images/menu.jpg";

export const MenuStyle = styled.div`
  background-image: url(${menuImg});
  background-color: #b52022;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  h1 {
    color: #a59e91;
    margin-top: 245px;
    font-size: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonStyle = styled.button`
  opacity: 1;
  width: 200px;
  height: 30px;
  background: #f4b640;
  border: 1px solid #ffffff;
  color: #f4f3ef;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background: #e55351;
  }
`;
