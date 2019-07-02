import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../api/Get";
import ErrorPage from "../ErrorPage";
import DayMonthYear from "./DayMonthYear";
import AuthorName from "./AuthorName";

class ArticleList extends Component {
  state = {
    articles: [],
    err: null,
    p: 0,
    sort_by: "created_at"
  };

  nextPage = () => {
    let { p } = this.state;
    this.setState({ p: p + 10 });
  };

  prevPage = () => {
    let { p } = this.state;
    this.setState({ p: p - 10 });
  };

  correctName = name => {
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
    let capitalisedTitle = "";
    if (topic) {
      capitalisedTitle =
        topic.substring(0, 1).toUpperCase() + topic.substring(1);
    }
    if (err) return <ErrorPage err={err} />;
    return (
      <div className="article-list">
        {topic && <h2>{capitalisedTitle}</h2>}
        <div className="grid-container">
          <div className="c1">Author</div>
          <div className="c2">Title</div>
          <div className="c3">
            {articles ? this.correctName(sort_by) : "Date"}
          </div>
        </div>
        {articles.map(article => {
          return (
            <div className="grid-container" key={article.article_id}>
              <div className="c1">
                <AuthorName username={article.author} />
              </div>
              <div className="c2">
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  {article.title}
                </Link>
              </div>
              <div className="c3">
                {sort_by === "author" || sort_by === "title" ? (
                  article.votes
                ) : sort_by === "created_at" ? (
                  <DayMonthYear date={article.created_at} />
                ) : (
                  article[sort_by]
                )}
              </div>
            </div>
          );
        })}
        <div>
          {p > 0 && <button onClick={this.prevPage}>Previous Page</button>}
          {articles.length >= 10 && (
            <button onClick={this.nextPage}>Next Page</button>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      GetRequests(`articles`, `articles?topic=${topic}`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          console.log(err);
          this.setState({
            err
          });
        });
    } else
      GetRequests(`articles`, `articles?sort_by=created_at&order=desc`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          console.log(err);
          this.setState({
            err
          });
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
          console.log(err);
          this.setState({
            err
          });
        });
    }
  }
}

export default ArticleList;
