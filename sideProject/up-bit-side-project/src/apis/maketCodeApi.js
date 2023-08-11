import axios from "axios";

// get
export async function fetchBitMarets() {
  try {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    return response;
  } catch (error) {
    console.log("todos 삭제 실패: ", error);
    throw error;
  }
}
