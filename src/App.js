import React, { Component } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Home from "./components/Home";
import AllTopics from "./components/AllTopics";
import AllAuthors from "./components/AllAuthors";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";

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
        </Router>
      </div>
    );
  }
}

export default App;
