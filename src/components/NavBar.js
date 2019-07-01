import React from "react";
import { Link } from "@reach/router";

const NavBar = ({ user }) => {
  return (
    <nav className="nav-bar">
      <div>
        <Link to="/">
          <button className="nav-buttons">Home</button>
        </Link>
      </div>
      <div>
        <Link to="/articles">
          <button className="nav-buttons">All Articles</button>
        </Link>
      </div>
      <div>
        <Link to="/topics">
          <button className="nav-buttons">Topics</button>
        </Link>
      </div>
      <div>
        <Link to="/authors">
          <button className="nav-buttons">Authors</button>
        </Link>
      </div>
      <div>Logged in: {user}</div>
    </nav>
  );
};

export default NavBar;
