import React, { Component } from "react";
import GetRequests from "../../api/Get";
import HomeArticles from "./HomeArticles";
import styled from "styled-components";

const HomePage = styled.div`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

class Home extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <HomePage>
        <h2>Home</h2>
        <HomeArticles articles={articles} />
      </HomePage>
    );
  }

  componentDidMount() {
    GetRequests(`articles`).then(articles => this.setState({ articles }));
  }
}

export default Home;
