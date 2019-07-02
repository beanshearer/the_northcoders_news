import React, { Component } from "react";
import ArticleList from "../ArticleList";

class AllArticles extends Component {
  state = {
    sort_by: "created_at",
    sort_submit: "created_at",
    order: "desc",
    order_submit: "desc",
    p: 0
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
    const { sort_submit, order_submit, p } = this.state;
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
              <option value="votes">Likes</option>
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
        <ArticleList
          sort_submit={sort_submit}
          order_submit={order_submit}
          p={p}
        />
      </div>
    );
  }
}

export default AllArticles;
