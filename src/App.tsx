import "./App.css";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import NavBar from "./components/NavBar";
import CharacterDetail from "./pages/CharacterDetail";
import EpisodeDetail from "./pages/EpisodeDetail";
import LocationDetail from "./pages/LocationDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mx-auto max-w-7xl">
        <NavBar />
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
