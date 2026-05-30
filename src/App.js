import "./style-sheets/App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import About from './components/About';
import LatestVolume from './components/LatestVolume';
import Archive from './components/Archive';

function NavBar() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">☰</button>
        <ul className={menuOpen ? "nav-list open" : "nav-list"}>
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
    <HashRouter>
      {/* Navigation */}
      <NavBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/latest" element={<LatestVolume />} />
      </Routes>{" "}
    </HashRouter>
  );
}

export default App;
