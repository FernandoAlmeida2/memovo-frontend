import styled from "styled-components";

export const PracticeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 120px;
  width: 200px;
  color: #4f4343;

  label {
    line-height: 25px;
  }
  input {
    padding-left: 10px;
    width: 200px;
    height: 30px;
    background: #ffffff;
    font-size: 12px;
    ::placeholder {
      color: #adadad;
      opacity: 1;
    }
  }
`;

export const BottomStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    cursor: pointer;
    font-size: 12px;
    :hover {
      text-decoration: underline;
      color: #e55351;
    }
  }
`;

export const ButtonStart = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: #4f4343;
  background: ${(props) => (props.isLoading ? "#F3AE39" : "#bcb7af")};
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
  :hover {
    background: #F3AE39;
    color: #f7f5f2;
  }
`;
