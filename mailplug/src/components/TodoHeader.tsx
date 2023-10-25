import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  border-bottom: 1px solid #e8eced;
  padding-top: 17px;
  padding-left: 120px;
  padding-right: 32px;
  padding-bottom: 17px;
  h1 {
    margin: 0;
    font-size: 37px;
    color: #000000;
  }
`;

const TodoHeader = () => {
  return (
    <HeadBlock>
      <h1>To Do</h1>
    </HeadBlock>
  );
};

export default TodoHeader;
