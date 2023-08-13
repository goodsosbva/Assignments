import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarGraph = ({ data, width = 700, height = 400 }) => {
  const allColors = [
    "#FF0000", // 빨강
    "#FF7F00", // 주황
    "#FFFF00", // 노랑
    "#00FF00", // 초록
    "#0000FF", // 파랑
    "#4B0082", // 남색
    "#9400D3", // 보라
    "#00FFFF", // 하늘색
    "#000000", // 검은색
    "#808080", // 회색
  ];
  // 색상 스케일 정의
  const colorScale = d3
    .scaleOrdinal()
    .domain(data.map((_, index) => index))
    .range(allColors);

  const graphRef = useRef(null); // D3 그래프 컨테이너에 대한 참조
  const gx = useRef();

  useEffect(() => {
    // D3.js 코드 시작
    const spanElements = d3.select(graphRef.current).selectAll("span");

    spanElements
      .datum(function () {
        return this.dataset;
      })
      .style("height", "10%")
      .style("position", "absolute") // 위치 속성 추가
      .style("height", "0") // 높이 초기화
      .transition()
      .duration(1500);
    // D3.js 코드 끝
  }, [data]);

  return (
    <div style={{ margin: "50px 50px", position: "relative", height: "600px" }}>
      {data.map((value, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            bottom: "40px",
            display: "inline-block",
            width: "60px",
            backgroundColor: colorScale(index), // 데이터 인덱스에 따른 색상 선택
            margin: "5px",
            fontSize: "20px",
            lineHeight: "1.9em",
            color: "#fff",
            borderRadius: "15px",
            left: `${index * 80}px`,
            height: `${value}px`,
            marginLeft: "400px",
          }}
        ></span>
      ))}
    </div>
  );
};

export default BarGraph;
