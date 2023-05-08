import styled from "styled-components";

export const FrontStyle = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${(props) => props.color};
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 700px) {
    height: 43vw;
    width: 57vw;
    font-size: 11.4vw;
  }
`;

export const IconDiv = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    font-size: 2.86vw;
  }
`;

export const PinyinOption = styled.div`
  display: ${(props) => (props.showPinyin ? "block" : "none")};
  font-size: 40px;
  @media (max-width: 700px) {
    font-size: 5.71vw;
  }
`;

export const BottomIcon = styled.div`
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  bottom: 5px;
  right: 10px;
  @media (max-width: 700px) {
    bottom: 0.71vw;
    right: 1.43vw;
  }

  .react-icons {
    size: 40px;

    @media (max-width: 700px) {
      size: 5.71vw;
    }
  }
`;

export const BackStyle = styled.div`
  width: 400px;
  min-height: 300px;
  padding: 20px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  position: relative;

  @media (max-width: 700px) {
    min-height: 43vw;
    width: 57vw;
    padding: 2.86vw;
    gap: 1.14vw;
  }
`;

export const TranslationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  div:first-child {
    text-align: center;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
    }
  }
  div:last-child {
    display: flex;
    p{
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    gap: 0.71vw;
    div:first-child {
      h1 {
        font-size: 5.71vw;
      }
      h2 {
        font-size: 2.86vw;
      }
    }
    div:last-child {
    p{
      font-size: 2vw;
    }
  }
  }
`;

export const AnswerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 700px) {
    gap: 2.86vw;
    font-size: 2.29vw;
  }
`;
