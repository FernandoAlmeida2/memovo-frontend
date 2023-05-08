import { useState } from "react";
import {
  FrontStyle,
  IconDiv,
  PinyinOption,
  BottomIcon,
} from "./CardStyle";

import { BsFillPlayFill, BsFillCaretDownFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";


export default function FrontSide({ color, hanzi, pinyin, setTurnCard }) {
  const [showPinyin, setShowPinyin] = useState(false);
  return (
    <FrontStyle color={color}>
      <h1>{hanzi}</h1>
      {showPinyin ? (
        <IconDiv>
          <BsFillCaretDownFill size={"2em"} onClick={() => setShowPinyin(!showPinyin)} />
          Hide pinyin
        </IconDiv>
      ) : (
        <IconDiv>
          <BsFillPlayFill size={"2em"} onClick={() => setShowPinyin(!showPinyin)} />
          Show pinyin
        </IconDiv>
      )}
      <PinyinOption showPinyin={showPinyin}>{pinyin}</PinyinOption>
      <BottomIcon>
        <GiReturnArrow size={"0.7em"} onClick={() => setTurnCard(true)} />
      </BottomIcon>
    </FrontStyle>
  );
}
