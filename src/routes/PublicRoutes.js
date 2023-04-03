import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
