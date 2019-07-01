import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../api/Get";
import ErrorPage from "../ErrorPage";

class ArticleList extends Component {
  state = {
    articles: [],
    err: null
  };
  render() {
    const { articles, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div className="article-list">
        <div className="grid-container">
          <div className="c1">Author</div>
          <div className="c2">Title</div>
          <div className="c3">Date</div>
        </div>
        {articles.map(({ article_id, author, title, created_at }) => {
          return (
            <div className="grid-container" key={article_id}>
              <div className="c1">{author}</div>
              <div className="c2">
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
              </div>
              <div className="c3">
                {created_at.substring(0, 10).replace(/-/g, "/")}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      GetRequests(`articles`, `articles?topic=${topic}`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({
            err
          });
        });
    } else
      GetRequests(`articles`, `articles?sort_by=created_at&order=desc`)
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({
            err
          });
        });
  }

  componentDidUpdate(prevProps) {
    const { sort_submit, order_submit, p } = this.props;
    if (
      prevProps.sort_submit !== sort_submit ||
      prevProps.order_submit !== order_submit ||
      prevProps.p !== p
    ) {
      GetRequests(
        `articles`,
        `articles?sort_by=${sort_submit}&order=${order_submit}&p=${p}`
      )
        .then(articles => this.setState({ articles }))
        .catch(err => {
          this.setState({
            err
          });
        });
    }
  }
}

export default ArticleList;
