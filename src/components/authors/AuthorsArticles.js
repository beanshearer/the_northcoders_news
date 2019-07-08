import React, { Component } from "react";
import getter from "../../api/getter";
import { Link } from "@reach/router";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  text-align: left;
`;

const Row = styled.div`
  min-height: 50px;
  padding: 5px;
`;

class AuthorsArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <GridContainer>
          <Row>Tiltes</Row>
          <Row>Likes</Row>
        </GridContainer>
        {articles.map(({ votes, title, article_id }) => {
          return (
            <GridContainer key={article_id}>
              <Row>
                <Link
                  className="remove-underlining"
                  to={`/articles/${article_id}`}
                >
                  {title}
                </Link>
              </Row>
              <Row>
                {votes}
              </Row>
            </GridContainer>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { author } = this.props
    getter(`articles`, `articles?author=${author}&limit=3`).then(
      articles => this.setState({ articles })
    );
  }
}

export default AuthorsArticles;
