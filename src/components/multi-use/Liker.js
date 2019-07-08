import React, { Component } from "react";
import postOrPatch from "../../api/postOrPatch";
import blackthumb from "../../pictures/thumbs-up-black.png";
import greythumb from "../../pictures/thumbs-up-grey.png";
import styled from "styled-components";

const LikeButton = styled.div`
  color: black;
  background: 0;
  font-family: "Arial", Sans-serif;
  font-size: 10px;
  text-decoration: underline;

  :hover {
    color: red;
  }
`;

const Thumb = styled.img`
width: 15px;
padding-right: 5px;
`

class Liker extends Component {
  state = {
    change: 0
  };

  handleClick = () => {
    const { article_id, comment_id } = this.props;
    let { change } = this.state;
    let inc_votes = 0;
    if (change === 0) {
      change = 1;
      inc_votes = 1;
    } else if (change === 1) {
      change = 0;
      inc_votes = -1;
    }
    if (article_id) {
      postOrPatch("patch", "article", `articles/${article_id}`, {
        inc_votes
      }).catch(() => {
        change = 0;
      });
    }
    if (comment_id) {
      postOrPatch("patch", "comments", `comments/${comment_id}`, {
        inc_votes
      }).catch(() => {
        change = 0;
      });
    }
    this.setState({ change });
  };

  render() {
    const { likes } = this.props;
    const { change } = this.state;
    return (
      <LikeButton onClick={this.handleClick}>
        <Thumb src={change ? greythumb : blackthumb} alt="" width="10px" />
        Likes:
        {likes + change}
      </LikeButton>
    );
  }
}

export default Liker;
