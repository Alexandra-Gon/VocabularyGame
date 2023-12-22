import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/Components/Nav/Nav";
// PAGES
import Home from "./Pages/Home/Home";
import ChooseGamePage from "./Pages/ChooseGamePage/ChooseGamePage";
import Scenarios from "./Pages/Scenarios/Scenarios";
import CardsGame from "./Pages/CardsGame/CardsGame";
import MatchingGame from "./Pages/MatchingGame/MatchingGame";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<ChooseGamePage />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path={`/cardGame/:parameter`} element={<CardsGame />} />
          <Route path="/matchinGame" element={<MatchingGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
