import React, { Component } from "react";
import GetRequests from "../api/Get";
import ArticleList from "./ArticleList";
import Profile from "./Profile";

class AllAuthors extends Component {
  state = {
    users: [],
    articles: []
  };
  render() {
    const { articles, users } = this.state;
    const author = users[0];
    return (
      <section>
        <h2>Authors</h2>
        {users.length && <Profile author={users[3].username} />}
        <ArticleList articles={articles} />
      </section>
    );
  }
  componentDidMount() {
    GetRequests(`users`).then(users => this.setState({ users }));
    // GetRequests(`articles`, `articles?sort_by=author&order=asc`).then(
    //   articles => this.setState({ articles })
    // );
  }
}

export default AllAuthors;
