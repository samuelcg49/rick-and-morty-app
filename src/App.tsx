import "./App.css";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import NavBar from "./components/NavBar";
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
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
