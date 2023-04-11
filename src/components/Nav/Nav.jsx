import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">HomeBuildersIncorporated</h2>
      </Link>
      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/properties">
          Properties
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
