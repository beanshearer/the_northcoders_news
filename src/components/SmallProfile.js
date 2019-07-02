import React, { Component } from "react";
import GetRequests from "../api/Get";
import styled from "styled-components";

const SmallPicture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 14px;
  border: solid;
  border-color: #3b6c91;
  border-width: 1px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 0px;
  font-size: 10px;
  border: solid;
  border-color: #353b45;
  border-width: 0;
  border-left-width: 3px;
`;

const ProfileText = styled.div`
  padding: 5px;
  padding-top: 0px;
`;

class SmallProfile extends Component {
  state = {
    user: {}
  };

  render() {
    const { user } = this.state;
    return (
      <Profile>
        <SmallPicture src={user.avatar_url} alt={`${user.name}`} />
        <ProfileText>{user && user.name}</ProfileText>
      </Profile>
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

export default SmallProfile;
