import styled from "styled-components";
import { FLASHCARD_COLORS } from "../../../constants/flashcardColors";
import { BsFillPlayFill, BsFillCaretDownFill } from "react-icons/bs";
import { useState } from "react";

export default function Card({ card, currentCard, setCurrentCard, index }) {
  const color = FLASHCARD_COLORS.filter(
    (el) => el.categoryId === card.categoryId
  )[0].color;
  const [showPinyin, setShowPinyin] = useState(false);

  return (
    <>
      {currentCard === index && (
        <FrontSide color={color}>
          <h1>{card.hanzi}</h1>
          {showPinyin ? (
            <IconDiv>
              <BsFillCaretDownFill
                size={"40px"}
                onClick={() => setShowPinyin(!showPinyin)}
              />
              Hide pinyin
            </IconDiv>
          ) : (
            <IconDiv>
              <BsFillPlayFill
                size={"40px"}
                onClick={() => setShowPinyin(!showPinyin)}
              />
              Show pinyin
            </IconDiv>
          )}
          <PinyinOption showPinyin={showPinyin}>{card.pinyin}</PinyinOption>
        </FrontSide>
      )}
    </>
  );
}

const FrontSide = styled.div`
  width: 500px;
  height: 300px;
  background-color: ${(props) => props.color};
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconDiv = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PinyinOption = styled.div`
  display: ${(props) => (props.showPinyin ? "block" : "none")};
  font-size: 40px;
`;

const BackSide = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${(props) => props.color};
`;
