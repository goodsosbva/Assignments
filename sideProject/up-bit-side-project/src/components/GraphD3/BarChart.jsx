// src/BarChart.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // SVG 요소 선택
    const svg = d3.select(svgRef.current);

    // 차트를 위한 여백과 크기 설정
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = svg.attr("width") - margin.left - margin.right;
    const height = svg.attr("height") - margin.top - margin.bottom;

    // 이전에 그려진 요소들 제거
    svg.selectAll("*").remove();

    // x축 스케일 설정
    const x = d3
      .scaleBand() // 범주형 스케일 생성
      .domain(data.map((_, index) => index)) // 데이터의 각 항목에 대한 인덱스를 x 축 값으로 사용
      .range([margin.left, width - margin.right]) // x 축 범위 설정 (실제 차트 영역 내부)
      .padding(0.1); // 막대 사이의 간격 설정 (0.1은 10%의 간격을 의미)

    // y축 스케일 설정
    const y = d3
      .scaleLinear() // 선형 스케일 생성
      .domain([0, d3.max(data)]) // 데이터의 최대값을 y 축 범위로 설정
      .nice() // 주요 눈금 값을 자연스럽게 설정
      .range([height - margin.bottom, margin.top]); // y 축 범위 설정 (실제 차트 영역 내부)

    // 차트 요소 그룹 생성
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 막대 그래프 생성
    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, index) => x(index))
      .attr("y", (d) => y(d))
      .attr("width", x.bandwidth())
      .attr("height", (d) => y(0) - y(d))
      .attr("fill", (_, index) => {
        // 막대마다 다른 색상을 적용하기 위해 색상 배열을 정의하고 해당 인덱스로 접근
        const colors = [
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
        return colors[index % colors.length]; // 인덱스에 따라 색상 선택
      });

    // x축 생성
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((_, index) => index + 1)); // x축 눈금 레이블을 데이터 값으로 설정

    // y축 생성
    g.append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data]);

  // SVG 요소 반환
  return <svg ref={svgRef} width={400} height={300}></svg>;
};

export default BarChart;
