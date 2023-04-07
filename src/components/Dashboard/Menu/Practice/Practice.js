import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { MAX_CARDS, MIN_CARDS } from "../../../../constants/numCards";
import { BottomStyle, ButtonStart, PracticeStyle } from "./PracticeStyle";

export default function Practice({ setPracticeOption }) {
  const [numCards, setNumCards] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setLoading(true);
    navigate(`/learning/${numCards}`);
  }

  return (
    <PracticeStyle>
      <label>
        Number of cards
        <input
          placeholder="Choose a number"
          type="number"
          min={MIN_CARDS}
          max={MAX_CARDS}
          value={numCards}
          onChange={(e) => setNumCards(e.target.value)}
          required
        />
      </label>
      <BottomStyle>
        <ButtonStart onClick={handleClick} disabled={isLoading} isLoading={isLoading}>
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
            />
          ) : (
            "Start"
          )}
        </ButtonStart>
        <p onClick={() => setPracticeOption(false)}>Go back</p>
      </BottomStyle>
    </PracticeStyle>
  );
}
