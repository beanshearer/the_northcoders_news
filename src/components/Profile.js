import React, { Component } from "react";
import GetRequests from "../api/Get";
import styled from "styled-components";

const ProfileCard = styled.div`
  text-align: center;
  width: 25%;
  min-width: 80px;
  max-width: 150px;
  border-style: solid;
  border-color: #353b45;
  border-radius: 2%;
  padding: 1%;
`;

const ProfilePicture = styled.img`
  width: 100%;
`;

class Profile extends Component {
  state = {
    user: {}
  };

  render() {
    const { user } = this.state;
    return (
      <ProfileCard>
        <ProfilePicture src={user.avatar_url} alt={`${user.name}`} />
        <div>Author: {user && user.name}</div>
      </ProfileCard>
    );
  }

  componentDidMount() {
    const { author } = this.props;
    if (author) {
      GetRequests(`user`, `users/${author}`).then(user => {
        this.setState({ user });
      });
    }
  }

  componentDidUpdate() {
    const { author } = this.props;
    const { user } = this.state;
    if (user.username !== author) {
      GetRequests(`user`, `users/${author}`).then(user => {
        this.setState({ user });
      });
    }
  }
}

export default Profile;
