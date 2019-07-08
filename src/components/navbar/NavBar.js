import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import SmallProfile from "../multi-use/SmallProfile";

const Pages = styled.div`
  text-decoration: bold;
  color: #aeb4bd;
  height: 30px;
  padding-top: 15px;

  :hover {
    color: red;
  }
`;

const Bar = styled.div`
  color: #aeb4bd;
  display: flex;
  justify-content: space-evenly;
  width: calc(100% -2px);
  background-color: rgba(21, 22, 23, 1);
  margin: 0;
  font-size: 14px;
  border: solid;
  border-color: #353b45;
  border-width: 0;
  border-top-width: 2px;
`;

const NavBar = ({ user }) => {
  return (
    <Bar>
      <Link className="remove-underlining" to="/">
        <Pages>Home</Pages>
      </Link>

      <Link className="remove-underlining" to="/articles">
        <Pages>Articles</Pages>
      </Link>

      <Link className="remove-underlining" to="/topics">
        <Pages>Topics</Pages>
      </Link>

      <Link className="remove-underlining" to="/authors">
        <Pages>Authors</Pages>
      </Link>
      <SmallProfile author={user} />
    </Bar>
  );
};

export default NavBar;
