import React from "react";
import { Layout, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faChartLine,
  faStar,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContent = styled(Content)`
  animation: ${fadeInUp} 0.5s ease-out forwards;
`;

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <AnimatedContent style={contentStyle}>
          <h2>KHS 코인 정보 사이트에 오신 것을 환영합니다</h2>
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <p>가상화폐에 관한 최신 정보를 확인하세요.</p>
        </AnimatedContent>
      </Layout>
      <Layout>
        <AnimatedContent style={contentStyle}>
          <h2>최근 가격 업데이트</h2>
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <p>인기 있는 암호화폐의 최신 가격 업데이트를 확인해보세요.</p>
        </AnimatedContent>
      </Layout>
      <Layout>
        <AnimatedContent style={contentStyle}>
          <h2>인기 있는 코인</h2>
          <FontAwesomeIcon icon={faStar} size="2x" />
          <p>시장에서 인기 있는 상위 코인을 알아보세요.</p>
        </AnimatedContent>
      </Layout>
      <Layout>
        <AnimatedContent style={contentStyle}>
          <h2>코인 정보 사이트 소개</h2>
          <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          <p>
            저희 플랫폼에 대한 더 많은 정보와 거래자들에게 신뢰성 있는 코인
            정보를 제공하는 방법에 대해 알아보세요.
          </p>
        </AnimatedContent>
      </Layout>
    </Space>
  );
};

export default App;
