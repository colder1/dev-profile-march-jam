import React from 'react';
import { Link } from 'react-router';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to my <span className="highlight">Portfolio</span></h1>
        <p className="welcome-text">
          Explore my journey as a developer, my projects, and the technologies I work with.
        </p>
      </div>

      <p className="links">
        <Link to="/">Go Back</Link>
      </p>

    </div>
  );
};

export default Home;