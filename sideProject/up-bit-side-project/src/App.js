import { BrowserRouter, Routes, Route } from "react-router-dom";

import MarketPlace from "./components/MarketPlace.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import NotFound from "./components/NotFound.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/MarketPlace/*" element={<MarketPlace />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
