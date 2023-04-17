import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/applied">Applied</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;