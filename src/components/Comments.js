import React, { Component } from "react";
import GetRequests from "./GetRequests";
import PostOrPatchRequests from "./PostOrPatchRequests";
import Votes from "./Votes";

class Comments extends Component {
  state = {
    comments: [],
    comment: "",
    username: "jessjelly"
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      comment: value
    });
  };

  handleSubmit = event => {
    const { comment, username } = this.state;
    const { uri } = this.props;
    event.preventDefault();
    PostOrPatchRequests("post", `comment`, `${uri}/comments`, {
      username,
      body: comment
    }).then(({ article_id, ...newComment }) => {
      this.setState(state => {
        return {
          comments: [...state.comments, newComment],
          comment: ""
        };
      });
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <section>
        <ul>
          {comments.map(({ comment_id, body, votes }) => {
            return (
              <li key={comment_id}>
                {body}{" "}
                <button
                  key={comment_id}
                  onClick={() => {
                    this.setState(state => {
                      return Votes(
                        state.comments,
                        "comments",
                        comment_id,
                        "comment_id",
                        state[comment_id]
                      );
                    });
                  }}
                >
                  {" "}
                  Votes: {votes}{" "}
                </button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input
              type="text"
              placeholder="Comment here"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </label>
          <button>Post</button>
        </form>
      </section>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    GetRequests(`comments`, `${uri}/comments`).then(comments => {
      this.setState({ comments });
    });
  }
}

export default Comments;
