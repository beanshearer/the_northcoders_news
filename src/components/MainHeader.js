import React from "react";
import styled from "styled-components";

const MainHeaderSection = styled.header`
  color: white;
  text-align: right;
  background: rgb(9, 10, 10);
  background: linear-gradient(
    180deg,
    rgba(9, 10, 10, 1) 0%,
    rgba(21, 22, 23, 1) 100%
  );
  margin: 0px;
  padding: 5px;
  padding-right: 20px;
`;

const MainHeader = () => {
  return (
    <MainHeaderSection>
      <h1>Northcoders News</h1>
    </MainHeaderSection>
  );
};

export default MainHeader;
