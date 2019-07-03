import React from "react";
import ArticleList from "../ArticleList";
import styled from "styled-components";

const TopicPage = styled.section`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const SingleTopic = ({ uri }) => {
  const splitUri = uri.split("/");
  const topic = splitUri[splitUri.length - 1];
  return (
    <TopicPage>
      <ArticleList topic={topic} />
    </TopicPage>
  );
};

export default SingleTopic;
