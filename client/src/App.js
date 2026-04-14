import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <div id="top" className="min-h-screen bg-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

