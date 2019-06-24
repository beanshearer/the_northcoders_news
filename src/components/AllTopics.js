import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class AllTopics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    console.log(topics);
    return (
      <div>
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <Link key={slug} to={`/topics/${slug}`}>
              <li>
                Topic: {slug}
                <br />
                Description: {description}
              </li>
            </Link>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    return axios
      .get(`https://bens-northcoders-news.herokuapp.com/api/topics`)
      .then(response => {
        const { topics } = response.data;
        this.setState({ topics });
      });
  }
}

export default AllTopics;
