import React, { Component } from "react";
import GetRequests from "../../api/Get";
import PostOrPatchRequests from "../../api/PostOrPatch";
import Delete from "../../api/Delete";
import Liker from "../Liker";

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
    event.preventDefault();
    if (comment) {
      const { uri } = this.props;
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
    }
  };

  handleDelete = comment_id => {
    Delete(`comments/${comment_id}`);
    this.setState(state => {
      const comments = state.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      return { comments };
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <section className="comments">
        <div>
          {comments.map(({ comment_id, body, votes, author }) => {
            return (
              <div className="commentCard" key={comment_id}>
                {author + " " + body}
                <Liker comment_id={comment_id} likes={votes} />
                {author === this.state.username && (
                  <button
                    onClick={() => {
                      this.handleDelete(comment_id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })}
        </div>
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
