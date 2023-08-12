import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 추가: 수직 가운데 정렬 */
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
    diplay: flex;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const moveCoinMarkePage = () => {
    navigate("/MarketPlace/*");
  };

  const moveMainPage = () => {
    navigate("/");
  };

  const moveAnotherProject = () => {
    window.location.href = "http://goodsosbva1.dothome.co.kr/";
  };

  const moveProjectSignificance = () => {
    navigate("/");
  };

  const moveAboutMe = () => {
    navigate("/");
  };

  return (
    <HeadBlock>
      <HeadLeftSideBlock onClick={moveMainPage}>
        <h4>🪙 KHS 코인 정보 사이트</h4>
      </HeadLeftSideBlock>
      <HeadRightSideBlock className="margiRight: 0px;">
        <h4 onClick={moveCoinMarkePage}>가상 화폐 정보 보러 가기</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock className="marginLeft: 0px;">
        <h4 onClick={moveAnotherProject}>다른 포트폴리오 보러가기</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock className="marginLeft: 0px;">
        <h4 onClick={moveProjectSignificance}>포트폴리오의 의의</h4>
      </HeadRightSideBlock>
      <HeadRightSideBlock className="marginLeft: 0px;">
        <h4 onClick={moveAboutMe}>About Me</h4>
      </HeadRightSideBlock>
    </HeadBlock>
  );
};

export default Header;
