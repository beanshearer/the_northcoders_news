import React from "react";
import Liker from "../Liker";
import SmallProfile from "../SmallProfile";
import styled from "styled-components";

const CommentCard = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  background-color: #ebf3f9;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const BodyAndLikes = styled.div`
  max-width: calc(100% - 150px);
  min-width: 220px;
  padding: 1%;
`;

const CommentList = ({ comments, handleDelete, username }) => {
  return (
    <div>
      {comments.map(({ comment_id, body, votes, author }) => {
        return (
          <CommentCard key={comment_id}>
            <SmallProfile author={author} />
            <BodyAndLikes>
              {body}
              <Liker comment_id={comment_id} likes={votes} />
              {author === username && (
                <button
                  onClick={() => {
                    handleDelete(comment_id);
                  }}
                >
                  Delete
                </button>
              )}
            </BodyAndLikes>
          </CommentCard>
        );
      })}
    </div>
  );
};

export default CommentList;
