import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Pinoy-Flix</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch Later</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Movie
              </Link>
              <Link to="/addA" className="btn btn-main">
                + TV show
              </Link>
              <Link to="/addB" className="btn btn-main">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
