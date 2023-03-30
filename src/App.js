import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./assets/styles/Container";
import ResetStyle from "./assets/styles/Reset";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";

export default function App() {
  return (
    <>
      <ResetStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
