import React, { Component } from "react";
import { Link } from "@reach/router";
import getter from "../api/getter";
import ErrorPage from "./ErrorPage";
import DayMonthYear from "./DayMonthYear";
import AuthorName from "./AuthorName";
import styled from "styled-components";
import loadingImg from "../pictures/loading.gif";

const List = styled.div`
  margin: 1%;
`;

const LoadingImg = styled.img`
  width: 10%;
  margin: 45%;
  margin-top: 5%;
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
    sort_by: "created_at",
    order: "desc",
    loading: true
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
    const { articles, p, sort_by, err, loading } = this.state;
    const { topic } = this.props;
    if (err) return <ErrorPage err={err} />;
    return loading ? (
      <LoadingImg src={loadingImg} alt="loading" />
    ) : (
        <List>
          {topic ? <h2>{topic.substring(0, 1).toUpperCase() + topic.substring(1)}</h2> : <div />}
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
      getter(`articles`, `articles?topic=${topic}&limit=100`)
        .then(articles => this.setState({ articles, loading: false }))
        .catch(err => {
          this.setState({ err });
        });
    } else
      getter(`articles`, `articles?sort_by=created_at&order=desc`)
        .then(articles => this.setState({ articles, loading: false }))
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
      getter(
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
