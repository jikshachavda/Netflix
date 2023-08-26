import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="Navbar">
          <div className="logo">Netflix</div>
          <nav>
            <ul>
              <li>Movie</li>
              <li>Show</li>
            </ul>
          </nav>
        </div>
        <div className="btn">Sign Up</div>
      </div>

      <div className="Home-page">
        <div className="welcome">Welcome!</div>
        <h2>Unlimited movies, TV shows and more</h2>
        <div className="anytime">Watch anywhere. Cancel anytime.</div>
      </div>
    </>
  );
}

export default Navbar;
