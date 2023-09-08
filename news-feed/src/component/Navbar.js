import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  const toggleswitch = () => {
    props.onClick();
  };

  return (
    <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode}`}>
      <div className={`container-fluid`}>
        <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/general">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch my-3 mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={toggleswitch}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: props.mode === 'light' ? 'black' : 'white' }}
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}