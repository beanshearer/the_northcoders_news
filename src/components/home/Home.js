import React, { Component } from "react";
import getter from "../../api/getter";
import HomeArticles from "./HomeArticles";
import styled from "styled-components";
import Loading from "../../pictures/loading.gif";

const HomePage = styled.div`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const LoadingImg = styled.img`
  width: 10%;
  margin: 45%;
  margin-top: 5%;
`;

class Home extends Component {
  state = {
    articles: [],
    loading: true
  };

  render() {
    const { articles, loading } = this.state;
    return loading ? (
      <LoadingImg src={Loading} alt="loading" />
    ) : (
        <HomePage>
          <h2>Home</h2>
          <HomeArticles articles={articles} />
        </HomePage>
      );
  }

  componentDidMount() {
    getter(`articles`).then(articles =>
      this.setState({ articles, loading: false })
    );
  }
}

export default Home;
