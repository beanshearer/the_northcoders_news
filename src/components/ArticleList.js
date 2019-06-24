import React from "react";
import { Link } from "@reach/router";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map(({ article_id, title }) => {
          return (
            <Link key={article_id} to={`/articles/${article_id}`}>
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
