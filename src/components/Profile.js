import React, { Component } from "react";
import GetRequests from "../api/Get";

class Profile extends Component {
  state = {
    user: {}
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <div>Author: {user && user.name}</div>
        <img src={user.avatar_url} alt={`${user.name}`} />
      </div>
    );
  }

  componentDidMount() {
    const { author } = this.props;
    GetRequests(`user`, `users/${author}`).then(user => {
      this.setState({ user });
    });
  }
  componentDidUpdate() {
    const { author } = this.props;
    const { user } = this.state;
    console.log("updated", author, user.username !== author);
    if (user.username !== author) {
      GetRequests(`user`, `users/${author}`).then(user => {
        this.setState({ user });
      });
    }
  }
}

export default Profile;
