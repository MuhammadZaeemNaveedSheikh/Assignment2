import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">Assignment Project</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Home</Link>
      <Link to="/add" className="NavBar-Link">Add</Link>
      <Link to="/weather" className="NavBar-Link">Weather API</Link>
     </div>
   </nav>
  );
};

export default Home;
