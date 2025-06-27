import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Feedback from "./pages/Feedback";
import WorkWithMe from "./pages/WorkWithMe";
import CursorCircle from "./components/CursorCircle";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";


function App() {
  return (
    <BrowserRouter>
    <CursorCircle />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
