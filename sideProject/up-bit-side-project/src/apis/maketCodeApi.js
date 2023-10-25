import axios from "axios";

// get
export async function fetchBitMarets() {
  try {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    return response;
  } catch (error) {
    console.log("업비트 코인들 불러 오기 실패: ", error);
    throw error;
  }
}

// get
export async function fetchCoinDetail(market, to, count) {
  try {
    const response = await axios.get(
      "https://api.upbit.com/v1/candles/months",
      {
        params: {
          market: market,
          to: to,
          count: count,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("업비트 코인들 상세 정보 불러 오기 실패: ", error);
    throw error;
  }
}
