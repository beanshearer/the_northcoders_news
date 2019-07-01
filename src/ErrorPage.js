import React from "react";

const ErrorPage = ({ err }) => {
  console.log(err.message);
  if (err) return <div>{err.message}</div>;
  else return <div>404 - route doesn't exist</div>;
};

export default ErrorPage;
