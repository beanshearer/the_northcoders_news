import React, { Component } from "react";
import GetRequests from "../../api/Get";
import Profile from "../Profile";
import AuthorsArticles from "./AuthorsArticles";
import styled from "styled-components";

const AuthorsPage = styled.section`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const Author = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 25px;
  background-color: #ebf3f9;
  margin: 10px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

class AllAuthors extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <AuthorsPage>
        <h2>Authors</h2>
        {users.map(({ username }) => {
          return (
            <Author key={username}>
              <Profile author={username} />
              <AuthorsArticles />
            </Author>
          );
        })}
      </AuthorsPage>
    );
  }

  componentDidMount() {
    GetRequests(`users`).then(users => this.setState({ users }));
  }
}

export default AllAuthors;
