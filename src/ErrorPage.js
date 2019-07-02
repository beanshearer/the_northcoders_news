import React from "react";

const ErrorPage = ({ err }) => {
  let error = "404 - Route doesn't exist";
  if (err) {
    error =
      err.response.data.msg.substring(0, 1).toUpperCase() +
      err.response.data.msg.substring(1);
  }
  return <div className="error">{error}</div>;
};

export default ErrorPage;
