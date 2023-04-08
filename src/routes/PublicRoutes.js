import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "../assets/styles/Container";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";

export default function PublicRoutes() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
