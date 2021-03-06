import React, { Component } from "react";
import getter from "../../api/getter";
import postOrPatch from "../../api/postOrPatch";
import deleter from "../../api/deleter";
import CommentList from "./CommentList";
import styled from "styled-components";

const CommentSection = styled.div`
  padding: 0;
  padding-top: 1px;
  margin: 5%;
  margin-top: 0;
  background: rgb(9, 10, 10);
  background: linear-gradient(
    180deg,
    rgba(9, 10, 10, 1) 0%,
    rgba(21, 22, 23, 1) 100%
  );
  border-radius: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const CommentInput = styled.textarea`
  width: 94%;
  margin: 2%;
  margin-bottom: 0;
  height: 50px;
  padding: 1%;
  font-family: "Roboto", sans-serif;
  border-width: 2px;
  border-radius: 10px;
`;

const CommentForm = styled.form`
  width: 100%
  margin: 0%;
`;

const CommentButton = styled.button`
  width:10%;
  min-width: 65px;
  font-family: "Roboto", sans-serif;
  height: 30px;
  border-radius: 10px;
  border-width: 0;
  margin: 1%;
  margin-left: 2%;
  padding:0;
  background: white
`;

class Comments extends Component {
  state = {
    comments: [],
    comment: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      comment: value
    });
  };

  handleSubmit = event => {
    const { comment } = this.state;
    const { user } = this.props
    event.preventDefault();
    if (comment) {
      const { uri } = this.props;
      postOrPatch("post", `comment`, `${uri}/comments`, {
        username: user,
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
    deleter(`comments/${comment_id}`);
    this.setState(state => {
      const comments = state.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      return { comments };
    });
  };

  render() {
    const { comments } = this.state;
    const { user } = this.props
    return (
      <CommentSection>
        <CommentList
          comments={comments}
          handleDelete={this.handleDelete}
          username={user}
        />
        <CommentForm onSubmit={this.handleSubmit}>
          <div>
            <CommentInput
              cols="40" rows="5"
              type="text"
              placeholder="  Comment here"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <CommentButton>Comment</CommentButton>
          </div>
        </CommentForm>
      </CommentSection>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    getter(`comments`, `${uri}/comments`).then(comments => {
      this.setState({ comments });
    });
  }
}

export default Comments;
