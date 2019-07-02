import React, { Component } from "react";
import ArticleList from "../ArticleList";
import styled from "styled-components";

const Articles = styled.div`
  background-color: white;
  margin: 1%;
`;

const SecondaryTitle = styled.div`
  padding: 5%;
`;

const SelectDropDown = styled.select`
  background-color: white;
`;

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
      <Articles>
        <SecondaryTitle>
          <h2>All Articles</h2>
        </SecondaryTitle>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sort By:
            <SelectDropDown
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="created_at">Date</option>
              <option value="topic">Topic</option>
              <option value="author">Author</option>
              <option value="votes">Likes</option>
              <option value="title">Title</option>
            </SelectDropDown>
          </label>{" "}
          <label>
            Order:
            <SelectDropDown
              value={this.state.order}
              onChange={this.handleOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </SelectDropDown>
          </label>
          <button>Apply</button>
        </form>
        <ArticleList
          sort_submit={sort_submit}
          order_submit={order_submit}
          p={p}
        />
      </Articles>
    );
  }
}

export default AllArticles;
