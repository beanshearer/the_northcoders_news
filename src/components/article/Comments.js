import React, { Component } from "react";
import GetRequests from "../../api/Get";
import PostOrPatchRequests from "../../api/PostOrPatch";
import Delete from "../../api/Delete";
import CommentList from "./CommentList";
import styled from "styled-components";

const CommentSection = styled.div`
  padding: 0;
  padding-top: 1px;
  margin: 5%;
  margin-top: 0;
  background: #353b45;
`;

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
      <CommentSection>
        <CommentList
          comments={comments}
          handleDelete={this.handleDelete}
          username={this.state.username}
        />
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
      </CommentSection>
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
