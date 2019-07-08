import React, { Component } from "react";
import getter from "../../api/getter";
import styled from "styled-components";
import greyman from "../../pictures/grey-man.png";

const SmallPicture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 14px;
  border: solid;
  border-color: #353b45;
  border-width: 1px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px;
  padding-left: 0px;
  padding-right: 0px;
  font-size: 10px;
  border: solid;
  border-color: #353b45;
  border-width: 0;
  border-left-width: 3px;
  width: 100px;
`;

const ProfileText = styled.div`
  padding: 0;
`;

class SmallProfile extends Component {
  state = {
    user: {},
    loading: true
  };

  render() {
    const { user, loading } = this.state;
    return (
      <Profile>
        <SmallPicture
          src={loading ? greyman : user.avatar_url}
          alt={`${user.name}`}
        />
        <ProfileText>{user && user.name}</ProfileText>
      </Profile>
    );
  }

  componentDidMount() {
    const { author } = this.props;
    if (author) {
      getter(`user`, `users/${author}`).then(user => {
        this.setState({ user, loading: false });
      });
    }
  }

  componentDidUpdate() {
    const { author } = this.props;
    const { user } = this.state;
    if (user.username !== author) {
      getter(`user`, `users/${author}`).then(user => {
        this.setState({ user });
      });
    }
  }
}

export default SmallProfile;
