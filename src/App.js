import "./style-sheets/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import About from './components/About';
import LatestVolume from './components/LatestVolume';

function NavBar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li
            className={activeLink === "/" ? "nav-item active" : "nav-item"}
            onClick={() => handleLinkClick("/")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={activeLink === "/about" ? "nav-item active" : "nav-item"}
            onClick={() => handleLinkClick("/about")}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={activeLink === "/archive" ? "nav-item active" : "nav-item"}
            onClick={() => handleLinkClick("/archive")}
          >
            <Link to="/archive">Archive</Link>
          </li>
          <li
            className={activeLink === "/latest" ? "nav-item active" : "nav-item"}
            onClick={() => handleLinkClick("/latest")}
          >
            <Link to="/latest">Latest Volume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <NavBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/latest" element={<LatestVolume />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
