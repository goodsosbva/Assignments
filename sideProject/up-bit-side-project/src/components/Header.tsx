import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 추가: 수직 가운데 정렬 */
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

const Header = () => {
  return (
    <HeadBlock>
      <h1>🪙 KHS 코인 정보 사이트</h1>
    </HeadBlock>
  );
};

export default Header;
