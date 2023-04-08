import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LearningSession from "../pages/Dashboard/Learning/Learning";
import Menu from "../pages/Dashboard/Menu/Menu";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="menu" element={<Menu />} />
        <Route path="learning/:numCards" element={<LearningSession />} />
      </Route>
    </Routes>
  );
}
