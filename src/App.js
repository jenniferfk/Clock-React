import React from 'react';
import { BrowserRouter as Router, Route,Routes, NavLink } from 'react-router-dom';
import './App.css';

import WorldClock from './nav/WorldClock';
import Timer from './nav/Timer';
import StopWatch from './nav/StopWatch';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="nav-item">
            <h2 className='text-light'>Clock Web</h2>
          </div>
          <button
      className="navbar-toggler custom-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setMenuOpen(!menuOpen)}
      
    >
      <span className="navbar-toggler-icon "></span>
    </button>

    <div className={`collapse justify-content-end navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav  nav-pills d-flex justify-content-end">
            <li className="nav-item">
              <NavLink to="/WorldClock" exact className="nav-link "style={{ color: 'white' }}  onClick={closeMenu}>WorldClock</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Timer" className="nav-link"style={{ color: 'white' }} onClick={closeMenu}>Timer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Stopwatch" className="nav-link"style={{ color: 'white' }} onClick={closeMenu}>Stopwatch</NavLink>
            </li>
          </ul>
          </div>

        </nav>
        {menuOpen && <div className="overlay"></div>}
        <main>
          <Routes>
            <Route path="/Timer" element={<Timer />} />
            <Route path="/StopWatch" element={<StopWatch />} />
            <Route path="/WorldClock" element={<WorldClock />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;