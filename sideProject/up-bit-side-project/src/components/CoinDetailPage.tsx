import React, { useState, useEffect } from "react";
import { fetchCoinDetail } from "../apis/maketCodeApi";
import LinePlot from "./LinePlot";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const CoinDetailPage = () => {
  const [coinDetail, setCoinDetail] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async (month) => {
      try {
        const response = await fetchCoinDetail(
          "KRW-BTC",
          `2023-0${month}-12T00:00:00`,
          "1"
        );
        console.log(response[0].trade_price);
        setCoinDetail((prevCoinDetail) => [
          ...prevCoinDetail,
          response[0].trade_price,
        ]);
        // 응답 객체의 data 속성을 사용합니다.
      } catch (error) {
        console.error("비트코인 데이터 목록들 가져오기 실패:", error);
      }
    };

    for (let month = 1; month < 9; month++) {
      fetchData(month);
    }
  }, []);

  console.log("coinDetail >> ", coinDetail);

  return (
    <div style={contentStyle}>
      <LinePlot data={coinDetail}></LinePlot>
    </div>
  );
};

export default CoinDetailPage;
