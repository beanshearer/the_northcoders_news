import React, { Component } from "react";
import GetRequests from "../api/Get";

class AuthorName extends Component {
  state = {
    name: "Loading..."
  };

  render() {
    const { name } = this.state;
    return <div>{name}</div>;
  }

  componentDidMount() {
    const { username } = this.props;
    return GetRequests(`user`, `users/${username}`).then(({ name }) => {
      this.setState({ name });
    });
  }
}

export default AuthorName;
