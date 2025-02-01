import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import MainGamePage from "@/pages/game/game-main";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<MainGamePage />} path="/game/game-main" />
    </Routes>
  );
}

export default App;
