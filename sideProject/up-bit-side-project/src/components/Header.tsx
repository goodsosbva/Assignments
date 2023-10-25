import React from "react";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8eced;
  padding-top: 7px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 7px;
  h1 {
    margin: 0;
    font-size: 17px;
    color: #000000;
  }
`;

const HeadLeftSideBlock = styled.div`
  width: 500px;
  font-size: 37px;
`;

const HeadRightSideBlock = styled.div`
  width: 200px;
  flex-shrink: 0;
  h1 {
    display: flex;
  }
`;

const Header = () => {
  // const location = useLocation(); // useLocation 훅 사용

  const moveCoinMarketPage = () => {
    window.location.hash = "/MarketPlace"; // URL 해시를 변경
  };

  const moveMainPage = () => {
    window.location.hash = "/"; // URL 해시를 변경
  };

  const moveAnotherProject = () => {
    window.location.href = "http://goodsosbva1.dothome.co.kr/";
  };

  const moveProjectSignificance = () => {
    window.location.hash = "/MoveProjectSignificance"; // URL 해시를 변경
  };

  const moveAboutMe = () => {
    window.location.hash = "/AboutMe"; // URL 해시를 변경
  };

  return (
    <HeadBlock>
      <HeadLeftSideBlock onClick={moveMainPage}>
        <h4>🪙 KHS 코인 정보 사이트</h4>
      </HeadLeftSideBlock>
      <HeadRightSideBlock>
        <h4 onClick={moveCoinMarketPage}>가상 화폐 정보 보러 가기</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock>
        <h4 onClick={moveAnotherProject}>다른 포트폴리오 보러가기</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock>
        <h4 onClick={moveProjectSignificance}>포트폴리오의 의의</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock>
        <h4 onClick={moveAboutMe}>About Me</h4>
      </HeadRightSideBlock>
    </HeadBlock>
  );
};

export default Header;
