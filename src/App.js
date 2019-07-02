import React, { Component } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/navbar/NavBar";
import { Router } from "@reach/router";
import Home from "./components/home/Home";
import AllTopics from "./components/topics/AllTopics";
import AllAuthors from "./components/authors/AllAuthors";
import AllArticles from "./components/articles/AllArticles";
import SingleArticle from "./components/article/SingleArticle";
import SingleTopic from "./components/topic/SingleTopic";
import ErrorPage from "./ErrorPage";

class App extends Component {
  state = {
    user: "jessjelly"
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <MainHeader />
        <NavBar user={user} />
        <Router>
          <Home path="/" />
          <AllArticles path="/articles" />
          <AllTopics path="/topics" />
          <AllAuthors path="/authors" />
          <SingleArticle path="/articles/:article_id" />
          <SingleTopic path="/topics/:topic" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;
