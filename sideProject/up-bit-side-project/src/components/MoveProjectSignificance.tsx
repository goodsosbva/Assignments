import React, { useState } from "react";
import { Layout, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCheck,
  faFile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const AnimatedContent = styled(Content)`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MoveProjectSignificance: React.FC = () => {
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(0);

  const handleLayoutChange = (nextIndex: number) => {
    setCurrentLayoutIndex(nextIndex);
  };

  const handleNext = () => {
    if (currentLayoutIndex < layouts.length - 1) {
      setCurrentLayoutIndex(currentLayoutIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentLayoutIndex > 0) {
      setCurrentLayoutIndex(currentLayoutIndex - 1);
    }
  };

  const layouts = [
    {
      title: "이 포트폴리오를 통해 제가 보여주고 싶은 바는 다음과 같습니다.",
      icon: null,
      text: null,
    },
    {
      title: "백엔드와 협업이 가능하다.",
      icon: faCode,
      text: (
        <p>
          <h4 style={{ lineHeight: "10px" }}>
            ㅇ 무료로 제공해주는 UBIT API를 이용하여 HTTP 요청을 함으로써 해당
            능력을 보여줄려고 했습니다.
          </h4>
          <h4 style={{ lineHeight: "10px" }}>
            ㅇ 결론적으로 Axios 요청, async, await 비동기 처리를 할 줄 압니다.
          </h4>
        </p>
      ),
    },
    {
      title: "타입스크립트의 사용법을 숙지하고 있다.",
      icon: faFile,
      text: (
        <p>
          <h4 style={{ lineHeight: "10px" }}>
            ㅇ 컴포넌트들을 타입스크립 기반의 tsx 파일을 만들어서 프로젝트를
            만드는 것을 통해 해당 능력을 보여주고자 했습니다.
          </h4>
        </p>
      ),
    },
    {
      title: "D3.js의 개념을 숙지하고 있습니다.",
      icon: faChartLine,
      text: (
        <p>
          <h4 style={{ lineHeight: "10px" }}>
            ㅇ 코인에 대한 디테일한 정보를 클릭해서 들어가면, 코인 가격의 변동을
            월별로 막대그래프로 그렸습니다. 이를 통해 D3.js의 구현 능력을
            보여주고자 했습니다.
          </h4>
        </p>
      ),
    },
    {
      title: "리액트 라우터 이용 능력",
      icon: faCheck,
      text: (
        <p>
          ㅇ 리액트 라우터 돔을 이용해서 페이지 이동을 구현 했습니다. 이를 통해
          Next.js를 이용하여 구현하지 않을 경우에 다른 기술을 적용하요
          리액트다운 페이지 이동 능력을 보여주고자 했습니다.
        </p>
      ),
    },
  ];

  const currentLayout = layouts[currentLayoutIndex];
  const showNextButton = currentLayoutIndex < layouts.length - 1;
  const showBackButton = currentLayoutIndex > 0;

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <AnimatedContent style={contentStyle}>
          <h2>{currentLayout.title}</h2>
          {currentLayout.icon && (
            <FontAwesomeIcon icon={currentLayout.icon} size="2x" />
          )}
          {currentLayout.text}
        </AnimatedContent>
      </Layout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Space>
          {showBackButton && (
            <div onClick={handleBack} style={buttonStyle}>
              뒤로
            </div>
          )}
          {showNextButton && (
            <div onClick={handleNext} style={buttonStyle}>
              다음으로
            </div>
          )}
        </Space>
      </div>
    </Space>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#108ee9",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "4px",
  alignItems: "center",
  marginBottom: "10px",
};

export default MoveProjectSignificance;
