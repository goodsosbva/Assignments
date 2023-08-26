import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetail } from "../apis/maketCodeApi";
import BarChart from "./GraphD3/BarChart";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const CoinDetailPage = () => {
  const [coinDetail, setCoinDetail] = useState<number[]>([]);
  const { coin } = useParams();

  // function calculatePercentages(data: number[]): number[] {
  //   const total = data.reduce((sum, value) => sum + value, 0);
  //   const percentages = data.map((value) => Math.round((value / total) * 100));
  //   return percentages;
  // }

  useEffect(() => {
    const fetchDataSequentially = async () => {
      for (let month = 1; month < 9; month++) {
        try {
          const response = await fetchCoinDetail(
            `${coin}`,
            `2023-0${month}-12T00:00:00`,
            "1"
          );
          setCoinDetail((prevCoinDetail) => [
            ...prevCoinDetail,
            response[0].trade_price,
          ]);
        } catch (error) {
          console.error(`코인 ${month}월 데이터 가져오기 실패:`, error);
        }
      }
    };

    fetchDataSequentially();
  });

  console.log("coinDetail >> ", coinDetail);

  return (
    <div style={contentStyle}>
      <BarChart data={coinDetail}></BarChart>
    </div>
  );
};

export default CoinDetailPage;
