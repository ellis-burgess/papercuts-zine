import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>    </BrowserRouter>
  );
}

export default App;
