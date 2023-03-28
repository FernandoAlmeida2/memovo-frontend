import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyle from "./assets/styles/Reset";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <div>
      <ResetStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
