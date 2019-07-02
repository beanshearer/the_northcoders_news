import React from "react";
import { Link } from "@reach/router";
import DayMonthYear from "../DayMonthYear";
import AuthorName from "../AuthorName";

const HomeArticles = ({ articles }) => {
  return (
    <div className="flex-container">
      {articles.map(
        ({ article_id, author, title, created_at, topic, votes }) => {
          return (
            <div key={article_id} className="home-article-boxes">
              <div>Title</div>
              <div>
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
              </div>
              <div>Author</div>
              <AuthorName username={author} />
              <div>Date</div>
              <DayMonthYear date={created_at} />
              <div>Topic</div>
              <div> {topic}</div>
              <div>Likes</div>
              <div> {votes}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default HomeArticles;
