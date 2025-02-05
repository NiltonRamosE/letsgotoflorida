import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProbandoDulcesPage from "@/pages/game/probando-dulces";
import SalvaOliverPage from "@/pages/game/salva-a-oliver";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProbandoDulcesPage />} path="/game/probando-dulces" />
      <Route element={<SalvaOliverPage />} path="/game/salva-a-oliver" />
    </Routes>
  );
}

export default App;
