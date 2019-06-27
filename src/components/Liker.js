import React, { Component } from "react";
import PostOrPatchRequests from "../api/PostOrPatch";

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
      PostOrPatchRequests("patch", "article", `articles/${article_id}`, {
        inc_votes
      }).catch(() => {
        change = 0;
      });
    }
    if (comment_id) {
      PostOrPatchRequests("patch", "comments", `comments/${comment_id}`, {
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
      <button onClick={this.handleClick}>
        Votes:
        {likes + change}
      </button>
    );
  }
}

export default Liker;
