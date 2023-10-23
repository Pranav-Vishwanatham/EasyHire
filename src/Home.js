// App.js
import React from "react";
import "./App.css";


function Home() {
  return (
    <div id='home'>
      <h1>Which best describes you?</h1>
      <div className="option">
        <a href="EventRecruiter.js">
          <button>Event Host</button>
        </a>
        <button>Recruiter</button>
        <button>Candidate</button>
      </div>
    </div>
  );
}
    
export default Home;