import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../components/Dashboard/Cards/Card";
import UserContext from "../../../contexts/UserContext";
import { getLearningCards } from "../../../services/cardApi";

export default function LearningSession() {
  const { userData } = useContext(UserContext);
  const { numCards } = useParams();
  const [cardsSession, setCardSession] = useState(null);

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

  if (!cardsSession) {
    return <h1>Loading...</h1>;
  }

  return (<LearningStyle>{
    cardsSession.map((card) => <Card key={card.id} />)
    }</LearningStyle>);
}

const LearningStyle = styled.div`
  background-color: #efe4ce;
  height: 100vh;
  width: 100vw;
`;
