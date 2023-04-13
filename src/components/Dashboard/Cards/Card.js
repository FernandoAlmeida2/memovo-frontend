import { FLASHCARD_COLORS } from "../../../constants/flashcardColors";
import { useState } from "react";
import FrontSide from "./Frontside";
import Backside from "./BackSide";

export default function Card({
  card,
  currentCard,
  setCurrentCard,
  index,
  cardResult,
}) {
  const color = FLASHCARD_COLORS.filter(
    (el) => el.categoryId === card.categoryId
  )[0].color;
  const [turnCard, setTurnCard] = useState(false);

  if (currentCard !== index) return;

  return turnCard ? (
    <Backside
      color={color}
      card={card}
      currentCard={currentCard}
      setCurrentCard={setCurrentCard}
      cardResult={cardResult}
    />
  ) : (
    <FrontSide
      color={color}
      setTurnCard={setTurnCard}
      hanzi={card.hanzi}
      pinyin={card.pinyin}
    />
  );
}
