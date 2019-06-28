import React from "react";
import { Link } from "@reach/router";

const NavBar = ({ user }) => {
  return (
    <nav class="nav-bar">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to="/articles">
          <button>All Articles</button>
        </Link>
      </div>
      <div>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
      </div>
      <div>
        <Link to="/authors">
          <button>Authors</button>
        </Link>
      </div>
      <div>User: {user}</div>
    </nav>
  );
};

export default NavBar;
