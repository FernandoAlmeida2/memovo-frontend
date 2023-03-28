import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4vw;
`;

export const InputStyle = styled.input`
  width: 87vw;
  height: 15.5vw;
  border: none;
  border-radius: 5px;
  background-color: white;
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  padding-left: 4vw;

  ::placeholder {
    opacity: 1;
    font-size: 5.33vw;
  }
`;

export const ButtonStyle = styled.button`
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87vw;
  height: 12.3vw;
  background: #000000;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 5.33vw;
  font-weight: 700;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 4vw;
  color: white;
  text-decoration: none;

  :hover{
    text-decoration: underline;
  }
`;