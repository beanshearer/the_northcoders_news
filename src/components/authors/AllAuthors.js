import React, { Component } from "react";
import getter from "../../api/getter";
import Profile from "../Profile";
import AuthorsArticles from "./AuthorsArticles";
import styled from "styled-components";
import Loading from "../../pictures/loading.gif";

const AuthorsPage = styled.section`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const LoadingImg = styled.img`
  width: 10%;
  margin: 45%;
  margin-top: 5%;
`;

const Table = styled.section`
  width: 80%;
`;

const Author = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #ebf3f9;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

class AllAuthors extends Component {
  state = {
    users: [],
    loading: true
  };

  render() {
    const { users, loading } = this.state;
    return loading ? (
      <LoadingImg src={Loading} alt="loading" />
    ) : (
        <AuthorsPage>
          <h2>Authors</h2>
          {users.map(({ username }) => {
            return (
              <Author key={username}>
                <Profile author={username} />
                <Table><AuthorsArticles author={username} /></Table>
              </Author>
            );
          })}
        </AuthorsPage>
      );
  }

  componentDidMount() {
    getter(`users`).then(users => this.setState({ users, loading: false }));
  }
}

export default AllAuthors;
