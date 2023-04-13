import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import { postLearningSession } from "../../../services/userCardApi";

export default function LearningResult({ resultArray }) {
  const score = resultArray.filter((el) => el.result === "HIT").length;
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    postLearningSession({ cards: resultArray }, userData.token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response?.data);
        console.log(err.response?.status);
      });
  }, [resultArray, userData]);

  return (
    <Resultcontainer>
      <ResultStyle>
        <ScoreTitleDiv>Your score:</ScoreTitleDiv>
        <ScoreDiv>
          <span>{score}</span> hits/{resultArray.length} cards
        </ScoreDiv>
        <ScoreDiv>
          or <span>{((score / resultArray.length) * 100).toFixed(0)}%!</span>
        </ScoreDiv>
      </ResultStyle>
      <ResultDiv onClick={() => navigate("/menu")}>Return to menu</ResultDiv>
    </Resultcontainer>
  );
}

const Resultcontainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f7d434;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 0 10px 0;
`;

const ResultStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f7d434;
  gap: 10px;
`;

const ScoreTitleDiv = styled.div`
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 20px;
`;

const ScoreDiv = styled.div`
  font-size: 32px;
  span {
    color: green;
  }
`;

const ResultDiv = styled.div`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
