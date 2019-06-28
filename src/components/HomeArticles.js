import React from "react";
import { Link } from "@reach/router";

const HomeArticles = ({ articles }) => {
  return (
    <div class="flex-container">
      {articles.map(
        ({ article_id, author, title, created_at, topic, votes }) => {
          return (
            <div key={article_id} class="home-article-boxes">
              <div>
                Title:
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
              </div>
              <div>Author: {author}</div>
              <div>Date: {created_at.substring(0, 10).replace(/-/g, "/")}</div>
              <div>Topic: {topic}</div>
              <div>Likes: {votes}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default HomeArticles;
