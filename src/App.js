import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./assets/styles/Container";
import ResetStyle from "./assets/styles/Reset";
import UserContext from "./contexts/UserContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

export default function App() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <ResetStyle />
      <Container>
        <BrowserRouter>
          {userData ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
      </Container>
    </>
  );
}
