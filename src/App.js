import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        {/* Updated Route definition */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
