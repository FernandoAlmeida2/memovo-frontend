import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Dashboard/Cards/Card";
import LearningResult from "../../../components/Dashboard/Cards/Result";
import UserContext from "../../../contexts/UserContext";
import { getLearningCards } from "../../../services/cardApi";
import { LearningStyle } from "./LearningStyle";

export default function LearningSession() {
  const { userData } = useContext(UserContext);
  const { numCards } = useParams();
  const [cardsSession, setCardSession] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [resultArray, setResultArray] = useState([]);

  function cardResult(cardId, result) {
    setResultArray([...resultArray, { cardId, result }]);
  }

  useEffect(() => {
    getLearningCards(userData.token, numCards)
      .then((data) => {
        setCardSession(data);
      })
      .catch((error) => {
        console.log(error.response?.data);
        console.log(error.response?.status);
      });
  }, [numCards, userData]);

  if (cardsSession.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <LearningStyle>
      {currentCard >= cardsSession.length ? (
        <LearningResult resultArray={resultArray} />
      ) : (
        cardsSession.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            card={card}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            cardResult={cardResult}
          />
        ))
      )}
    </LearningStyle>
  );
}
