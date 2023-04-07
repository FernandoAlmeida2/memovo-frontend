import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputStyle = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid #dbdbdb;
  color: #dbdbdb;
  font-size: 20px;
  border-radius: 5px;
  background-color: white;
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  padding-left: 10px;

  ::placeholder {
    opacity: 1;
  }
`;

export const ButtonStyle = styled.button`
  opacity: 1;
  width: 300px;
  height: 45px;
  background: #e73c2a;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
`;
