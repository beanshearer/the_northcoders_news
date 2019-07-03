import React, { Component } from "react";
import ArticleList from "../ArticleList";
import styled from "styled-components";

const Articles = styled.div`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const SelectDropDown = styled.select`
  background-color: white;
`;

const Label = styled.div`
  margin: 5px;
  width: 200px;
  text-align:left;
`;

const SortButton = styled.button`
  margin: 5px;
`;

const SortForms = styled.form`
  display: flex;
`

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
        <h2>All Articles</h2>
        <SortForms onSubmit={this.handleSubmit}>
          <Label>
            Sort By:{" "}
            <SelectDropDown
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="created_at">Date</option>
              <option value="topic">Topic</option>
              <option value="author">Author</option>
              <option value="votes">Likes</option>
              <option value="title">Title</option>
            </SelectDropDown>{"   "}
          </Label>
          <Label>
            Order:{" "}
            <SelectDropDown
              value={this.state.order}
              onChange={this.handleOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </SelectDropDown>
          </Label>
          <SortButton>Apply</SortButton>
        </SortForms>
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
