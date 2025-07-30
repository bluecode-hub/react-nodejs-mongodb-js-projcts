// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Events from "./Events"; // example
import Projects from "./Projects";
import ContactUs from "./Contact";
import Team from "./Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </Router>
  );
}

export default App;
