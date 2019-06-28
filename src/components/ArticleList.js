import React from "react";
import { Link } from "@reach/router";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <div className="grid-container">
        <div className="c1">Author</div>
        <div className="c2">Title</div>
        <div className="c3">Date</div>
        <div className="c4">Topic</div>
        <div className="c5">Likes</div>
      </div>
      {articles.map(
        ({ article_id, author, title, created_at, topic, votes }) => {
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
              <div className="c4">{topic}</div>
              <div className="c5">{votes}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ArticleList;
