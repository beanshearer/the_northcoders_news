import React from "react";
import { Link } from "@reach/router";

const ArticleList = ({ articles }) => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">Author</div>
        <div class="col-sm">Title</div>
        <div class="col-sm">Date</div>
        <div class="col-sm">Topic</div>
        <div class="col-sm">Likes</div>
      </div>
      {articles.map(
        ({ article_id, author, title, created_at, topic, votes }) => {
          return (
            <div class="row" key={article_id}>
              <div class="col-sm">
                <Link to={`/articles/${article_id}`}>{author}</Link>
              </div>
              <div class="col-sm">
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
              </div>
              <div class="col-sm">
                {created_at.substring(0, 10).replace(/-/g, "/")}
              </div>
              <div class="col-sm">{topic}</div>
              <div class="col-sm">{votes}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ArticleList;
