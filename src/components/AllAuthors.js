import React, { Component } from "react";
import GetRequests from "../api/Get";
import Profile from "./Profile";
import AuthorsArticles from "./AuthorsArticles";

class AllAuthors extends Component {
  state = {
    users: [],
    articles: []
  };
  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Authors</h2>
        {users.map(user => {
          return (
            <div className="authors-card flex-container">
              <Profile author={user.username} />
              <label>
                Articles:
                <AuthorsArticles />
              </label>
            </div>
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
