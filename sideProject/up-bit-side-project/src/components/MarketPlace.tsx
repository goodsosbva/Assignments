import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { fetchBitMarets } from "../apis/maketCodeApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AllCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const StyledCard = styled(Card)`
  width: 300px;
`;

const MoreLink = styled.div`
  color: blue;
  cursor: pointer;
`;

// BitCoin 객체 타입 정의
interface BitCoin {
  market: string;
  korean_name: string;
  english_name: string;
}

const MarketPlace = () => {
  const [bitCoins, setBitCoins] = useState<BitCoin[]>([]);
  const navigate = useNavigate();

  const moveCoinMarkePage = (coin: string) => {
    navigate(`/CoinDetailPage/${coin}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBitMarets();
        setBitCoins(response.data); // 응답 객체의 data 속성을 사용합니다.
      } catch (error) {
        console.error("비트코인 데이터 목록들 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  console.log(bitCoins); // 비동기 작업이 완료된 이후에 결과 확인
  return (
    <div>
      <AllCardContainer>
        {bitCoins.slice(0, 12).map((item) => (
          <StyledCard>
            <Card
              key={item.market}
              title={item.korean_name}
              extra={
                <MoreLink
                  onClick={() => {
                    const coin = item.market;
                    moveCoinMarkePage(coin);
                  }}
                >
                  More
                </MoreLink>
              }
              style={{ width: 300 }}
            >
              <p>Market: {item.market}</p>
              <p>Korean Name: {item.korean_name}</p>
              <p>English Name: {item.english_name}</p>
            </Card>
          </StyledCard>
        ))}
      </AllCardContainer>
    </div>
  );
};

export default MarketPlace;
