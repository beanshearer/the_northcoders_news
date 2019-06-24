import React, { Component } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import AllTopics from "./components/AllTopics";
import AllAuthors from "./components/AllAuthors";

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
          <ArticleList path="/articles" />
          <AllTopics path="/topics" />
          <AllAuthors path="/authors" />
        </Router>
      </div>
    );
  }
}

export default App;
