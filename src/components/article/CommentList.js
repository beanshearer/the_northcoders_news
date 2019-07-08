import React from "react";
import Liker from "../multi-use/Liker";
import SmallProfile from "../multi-use/SmallProfile";
import styled from "styled-components";

const CommentCard = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  background-color: white;
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

const LikeAndDelete = styled.div`
  display: flex;
`;

const DeleteButton = styled.div`
  background: 0;
  font-family: "Arial", Sans-serif;
  font-size: 10px;
  text-decoration: underline;
  padding:5px;

  :hover {
    color: red;
  }
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
              <LikeAndDelete>
                <Liker comment_id={comment_id} likes={votes} />
                {author === username && (
                  <DeleteButton
                    onClick={() => {
                      handleDelete(comment_id);
                    }}>
                    Delete
                </DeleteButton>
                )}
              </LikeAndDelete>
            </BodyAndLikes>
          </CommentCard>
        );
      })}
    </div>
  );
};

export default CommentList;
