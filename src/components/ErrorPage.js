import React from "react";
import styled from "styled-components";

const Error = styled.div`
  color: rgb(136, 0, 0);
  font-size: 40px;
  font-weight: bold;
  padding: 50px;
`;

const ErrorPage = ({ err }) => {
  let error = "404 - Route doesn't exist";
  if (err) {
    error =
      err.response.data.msg.substring(0, 1).toUpperCase() +
      err.response.data.msg.substring(1);
  }
  return <Error>{error}</Error>;
};

export default ErrorPage;
