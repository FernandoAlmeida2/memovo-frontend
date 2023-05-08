import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputStyle = styled.input`
  width: 83%;
  height: 45px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background-color: white;
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  padding-left: 10px;
  font-size: 20px;

  ::placeholder {
    opacity: 1;
    color: #dbdbdb;
  }

  @media(max-width: 700px) {
    height: 12vw;
    font-size: 4vw;
    padding-left: 1.4vw;
    border: 0.14vw solid #dbdbdb;
  }
`;

export const ButtonStyle = styled.button`
  opacity: 1;
  width: 83%;
  height: 45px;
  background: #e73c2a;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};

  @media(max-width: 700px) {
    height: 12vw;
    font-size: 4vw;
    padding-left: 1.4vw;
    border: 0.14vw solid #dbdbdb;
  }
`;
