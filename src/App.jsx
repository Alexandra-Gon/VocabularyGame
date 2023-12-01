import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// PAGES
import Home from "./Pages/Home/Home";
import Scenarios from "./Pages/Scenarios/Scenarios";
import Game from "./Pages/Game/Game";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path={`/game/:parameter`} element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
