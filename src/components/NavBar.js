import React from "react";
import { Link } from "@reach/router";

const NavBar = ({ user }) => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/articles">
        <button>All Articles</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/authors">
        <button>Authors</button>
      </Link>
      <div>User: {user}</div>
    </div>
  );
};

export default NavBar;
