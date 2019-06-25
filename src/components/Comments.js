import React, { Component } from "react";
import GetRequests from "./Api";

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

  render() {
    const { comments } = this.state;
    return (
      <section>
        <ul>
          {comments.map(({ comment_id, body }) => {
            return <li key={comment_id}>{body}</li>;
          })}
        </ul>
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log(this.state.comment);
          }}
        >
          <label>
            Comment:
            <input
              type="text"
              placeholder="Comment here"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </label>
          <button>Search!</button>
        </form>
      </section>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    GetRequests(`comments`, `${uri}/comments/`).then(comments => {
      this.setState({ comments });
    });
  }
}

export default Comments;
