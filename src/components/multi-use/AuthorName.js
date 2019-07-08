import React, { Component } from "react";
import getter from "../../api/getter";

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
    return getter(`user`, `users/${username}`).then(({ name }) => {
      this.setState({ name });
    });
  }
}

export default AuthorName;
