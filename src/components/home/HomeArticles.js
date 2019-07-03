import React from "react";
import { Link } from "@reach/router";
import DayMonthYear from "../DayMonthYear";
import AuthorName from "../AuthorName";
import styled from "styled-components";

const HomeArticleBoxes = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  text-align: left;
  width: 550px;
  padding: 25px;
  background-color: #ebf3f9;
  margin: 10px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const HomePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const HomeArticles = ({ articles }) => {
  return (
    <HomePage>
      {articles.map(
        ({ article_id, author, title, created_at, topic, votes }) => {
          return (
            <HomeArticleBoxes key={article_id}>
              <div>Title</div>
              <div>
                <Link
                  className="remove-underlining"
                  key={article_id}
                  to={`/articles/${article_id}`}
                >
                  {title}
                </Link>
              </div>
              <div>Author</div>
              <AuthorName username={author} />
              <div>Date</div>
              <DayMonthYear date={created_at} />
              <div>Topic</div>
              <div> {topic.substring(0, 1).toUpperCase() + topic.substring(1)}</div>
              <div>Likes</div>
              <div> {votes}</div>
            </HomeArticleBoxes>
          );
        }
      )}
    </HomePage>
  );
};

export default HomeArticles;
