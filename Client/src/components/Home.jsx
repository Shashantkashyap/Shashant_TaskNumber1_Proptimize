import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div className="home-container">
      <div className='cont'>
      <div className="button-container one">
        <h2>Click to Get All Data</h2>
        <Link to="/all">
          <button className="action-button">Click Here</button>
        </Link>
      </div>

      <div className="button-container">
        <h2>Click to Get Even ID Data</h2>
        <Link to="/even">
          <button className="action-button">Click Here</button>
        </Link>
      </div>

      </div>
      
      <div className='cont'>
      <div className="button-container">
        <h2>Click to Get Odd ID Data</h2>
        <Link to="/odd">
          <button className="action-button">Click Here</button>
        </Link>
      </div>

      <div className="button-container">
        <h2>Click to Get Data by ID</h2>
        <Link to="/dataById">
          <button className="action-button">Click Here</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
