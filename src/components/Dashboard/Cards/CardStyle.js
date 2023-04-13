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
`;

export const IconDiv = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PinyinOption = styled.div`
  display: ${(props) => (props.showPinyin ? "block" : "none")};
  font-size: 40px;
`;

export const BottomIcon = styled.div`
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

export const BackStyle = styled.div`
  width: 400px;
  height: 300px;
  padding: 20px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  position: relative;
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
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
