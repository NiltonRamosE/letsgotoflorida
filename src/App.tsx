import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProbandoDulcesPage from "@/pages/game/probando-dulces";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProbandoDulcesPage />} path="/game/probando-dulces" />
    </Routes>
  );
}

export default App;
