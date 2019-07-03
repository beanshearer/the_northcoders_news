import React, { Component } from "react";
import GetRequests from "../../api/Get";
import Comments from "./Comments";
import Liker from "../Liker";
import Profile from "../Profile";
import ErrorPage from "../ErrorPage";
import DayMonthYear from "../DayMonthYear";
import styled from "styled-components";

const Article = styled.div`
  background-color: white;
  margin: 5%;
  margin-top: 2.5%;
  padding: 1%;
  text-align: left;
`;

const ArticleBody = styled.div`
  padding: 5%;
  background-color: #ebf3f9;
  margin-right: 5%;
  margin-left: 5%;
  text-align: left;
  border: solid;
  border-width: 0;
  border-top-width: 10px;
  border-color: #353b45;
`;

const AuthorAndTitle = styled.div`
  margin: 5%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const ArticleTitle = styled.div`
  padding: 5%;
  text-align: left;
  max-width: 750px;
`;

class SingleArticle extends Component {
  state = {
    article: {},
    user: {},
    err: null
  };

  render() {
    const { article, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    const { uri } = this.props;
    return (
      <Article>
        <AuthorAndTitle>
          <Profile author={article.author} />
          <ArticleTitle>
            <h2>{article && article.title}</h2>
            <div>{article && <DayMonthYear date={article.created_at} />}</div>
          </ArticleTitle>
        </AuthorAndTitle>
        <ArticleBody>
          {article && article.body}
          <Liker article_id={article.article_id} likes={article.votes} />
        </ArticleBody>
        <Comments uri={uri} />
      </Article>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    GetRequests(`article`, uri)
      .then(article => {
        this.setState({ article });
        return article.author;
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default SingleArticle;
