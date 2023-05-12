import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

export default function LoadingCards() {
  return (
    <LoadingStyle>
      <p>Loading</p>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoadingStyle>
  );
}

const LoadingStyle = styled.main`
  padding-top: 30vh;
  background-color: #f4eddc;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5vw;
  font-size: 3vw;
  color: #a59e91;
`;
