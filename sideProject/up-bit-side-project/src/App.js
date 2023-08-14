import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import MarketPlace from "./components/MarketPlace.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import NotFound from "./components/NotFound.tsx";
import CoinDetailPage from "./components/CoinDetailPage.tsx";
import MoveProjectSignificance from "./components/MoveProjectSignificance.tsx";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/CoinDetailPage/:coin" element={<CoinDetailPage />} />
          <Route
            path="/MoveProjectSignificance"
            element={<MoveProjectSignificance />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
