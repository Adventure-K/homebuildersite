import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Home Builders Incorporated</h2>
      </Link>
      <div>
        <>
          <Link className="navLink" to="/user">
            Home
          </Link>

          <Link className="navLink" to="/info">
            Info Page
          </Link>
        </>
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
