import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: #e73c2a;
  text-decoration: none;

  :hover{
    text-decoration: underline;
  }
`;