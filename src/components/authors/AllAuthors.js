import React, { Component } from "react";
import GetRequests from "../../api/Get";
import Profile from "../Profile";
import AuthorsArticles from "./AuthorsArticles";
import styled from "styled-components";

const Author = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: lightblue;
  margin: 20px;
  padding: 10px;
`;

class AllAuthors extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Authors</h2>
        {users.map(({ username }) => {
          return (
            <Author key={username}>
              <Profile author={username} />
              <label>
                Articles:
                <AuthorsArticles />
              </label>
            </Author>
          );
        })}
      </section>
    );
  }

  componentDidMount() {
    GetRequests(`users`).then(users => this.setState({ users }));
  }
}

export default AllAuthors;
