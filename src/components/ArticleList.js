import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../api/Get";
import ErrorPage from "./ErrorPage";
import DayMonthYear from "./DayMonthYear";
import AuthorName from "./AuthorName";
import styled from "styled-components";

const List = styled.div`
  margin: 1%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  text-align: left;

  :nth-child(odd) {
    background: #ebf3f9;
  }
`;

const Row = styled.div`
  min-height: 50px;
  padding: 5px;
`;

class ArticleList extends Component {
  state = {
    articles: [],
    err: null,
    p: 0,
    sort_by: "created_at"
  };

  NextPage = () => {
    let { p } = this.state;
    this.setState({ p: p + 10 });
  };

  PrevPage = () => {
    let { p } = this.state;
    this.setState({ p: p - 10 });
  };

  CorrectName = name => {
    const names = {
      created_at: "Date",
      topic: "Topic",
      votes: "Likes",
      author: "Likes",
      title: "Likes"
    };
    return names[name];
  };

  render() {
    const { articles, p, sort_by, err } = this.state;
    const { topic } = this.props;
    if (err) return <ErrorPage err={err} />;
    return (
      <List>
        {topic ? <h2>{topic}</h2> : <div />}
        <GridContainer>
          <Row>
            <h3>Author</h3>
          </Row>
          <Row>
            <h3>Title</h3>
          </Row>
          <Row>
            <h3>{articles ? this.CorrectName(sort_by) : "Date"}</h3>
          </Row>
        </GridContainer>
        {articles.map(article => {
          return (
            <GridContainer key={article.article_id}>
              <Row>
                <AuthorName username={article.author} />
              </Row>
              <Row>
                <Link
                  className="remove-underlining"
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  {article.title}
                </Link>
              </Row>
              <Row>
                {sort_by === "author" || sort_by === "title" ? (
                  article.votes
                ) : sort_by === "created_at" ? (
                  <DayMonthYear date={article.created_at} />
                ) : (
                  article[sort_by]
                )}
              </Row>
            </GridContainer>
          );
        })}
        {topic ? null : (
          <div>
            {p > 0 && <button onClick={this.PrevPage}>Previous Page</button>}
            {articles.length >= 10 && (
              <button onClick={this.NextPage}>Next Page</button>
            )}
          </div>
        )}
      </List>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      GetRequests(`articles`, `articles?topic=${topic}&limit=100`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({ err });
        });
    } else
      GetRequests(`articles`, `articles?sort_by=created_at&order=desc`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({ err });
        });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_submit, order_submit } = this.props;
    const { p } = this.state;
    if (
      prevProps.sort_submit !== sort_submit ||
      prevProps.order_submit !== order_submit ||
      prevState.p !== p
    ) {
      this.setState({ sort_by: sort_submit });
      GetRequests(
        `articles`,
        `articles?sort_by=${sort_submit}&order=${order_submit}&p=${p}`
      )
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({ err });
        });
    }
  }
}

export default ArticleList;
