// App.js
import React from "react";
import "../css/App.css";


function Home() {
  return (
    
    <div class='home'>
      {/* <h1>Which best describes you?</h1>
      <div className="option">
        <a href="EventRecruiter.js">
          <button>Event Host</button>
        </a>
        <button>Recruiter</button>
        <button>Candidate</button>
      </div>

    {/* // <meta charset="UTF-8" />
    // <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */} 
      <title>EasyHire</title>
      {/* <header>
        <div id="logo">EasyHire</div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">BLOG</a>
          <a href="#">FAIRS</a>
          <a href="#">HELP</a>
          <a href="#" id="login-btn">
            Sign Up
          </a>
        </nav>
      </header>
      <br/><br/><br/><br/><br/><br/><br/><br/> */}
      <main>
      { /* <h1>Which best describes you?</h1>
        <div class="option">
          <a href="EventRecruiter.js">
            <button>Event Host</button>
          </a>
          <button>Recruiter</button>
          <button>Candidate</button>
        </div> */ }
          <div class="align-home">
          <div> 
            <br/><br/><br/><br/><br/><br/>
            <h1>From Hello to Hired! </h1><br/>
            <h3>We create meaningful connections between companies and candidates.<br/><br/>
              Whether you need a job or need to fill one, we're your trusted partner.</h3></div>
          {/* <div class= "side-image"></div></div> */}
            <div><img src="/homeimg.jpeg"></img></div>
          </div>
      </main>

      <footer>
      </footer>

    </div>

  );
}
    
export default Home;