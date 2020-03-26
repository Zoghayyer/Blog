// Ahmed Zoghayyer
import React from 'react';
import { Link } from 'react-router-dom';
import './main-navbar.scss';

const MainNavbarView = () => {
  return (
    <div className="main-navbar">
      <nav className="navbar navbar-light bg-light">
        <Link to="/blogs" className="navbar-brand">MY BLOG</Link>
      </nav>
    </div>
  );
}

export default MainNavbarView; 