import { AnswerDiv, BackStyle, TranslationDiv } from "./CardStyle";
import { ImCross, ImCheckmark } from "react-icons/im";

export default function Backside({
  color,
  card,
  currentCard,
  setCurrentCard,
  cardResult,
}) {
  function nextCard(result) {
    cardResult(card.id, result);
    setCurrentCard(currentCard + 1);
  }

  return (
    <BackStyle color={color}>
      <TranslationDiv>
        <div>
          <h1>{card.hanzi}</h1>
          <h2>{card.pinyin}</h2>
        </div>
        <div>
          {card.Translation.map((el, i) => (
            <p key={i}>{el.translation}.&nbsp;</p>
          ))}
        </div>
      </TranslationDiv>
      <iframe
        src={`https://www.youtube.com/embed/${card.videoId}`}
        title="card_video"
      ></iframe>
      <AnswerDiv>
        <div onClick={() => nextCard("HIT")}>
          <ImCheckmark size={"20px"} color={"green"} />
          &nbsp;HIT
        </div>
        <div onClick={() => nextCard("MISS")}>
          <ImCross size={"20px"} color={"red"} />
          &nbsp;MISS
        </div>
      </AnswerDiv>
    </BackStyle>
  );
}
