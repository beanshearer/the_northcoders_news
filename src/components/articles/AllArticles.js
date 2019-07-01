import React, { Component } from "react";
import ArticleList from "./ArticleList";
import GetRequests from "../../api/Get";

class AllArticles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    sort_submit: "created_at",
    order: "desc",
    order_submit: "desc"
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleOrderChange = event => {
    this.setState({ order: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      sort_submit: this.state.sort_by,
      order_submit: this.state.order
    });
    event.preventDefault();
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="all-articles">
        <header className="secondary-title">
          <h2>All Articles</h2>
        </header>
        <form className="sort-by" onSubmit={this.handleSubmit}>
          <label>
            Sort By:
            <select
              className="select-dropdown"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="created_at">Date</option>
              <option value="topic">Topic</option>
              <option value="author">Author</option>
              <option value="votes">Votes</option>
              <option value="title">Title</option>
            </select>
          </label>{" "}
          <label>
            Order:
            <select
              className="select-dropdown"
              value={this.state.order}
              onChange={this.handleOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
          <button>Apply</button>
        </form>
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    GetRequests(`articles`, `articles?sort_by=created_at&order=desc`).then(
      articles => this.setState({ articles })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_submit, order_submit } = this.state;
    if (
      prevState.sort_submit !== sort_submit ||
      prevState.order_submit !== order_submit
    )
      GetRequests(
        `articles`,
        `articles?sort_by=${sort_submit}&order=${order_submit}`
      ).then(articles => this.setState({ articles }));
  }
}

export default AllArticles;
