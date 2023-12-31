// api.ts

import axios from 'axios';
import type { Ref } from 'vue'; // 'import type' 추가

// const baseURL = process.env.VUE_APP_URL;

// GET
export const getFetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${endpoint}:`, error);
    throw error;
  }
};

export async function fetchMainBookDataAndUpdate<T>(key: string, target: Ref<T>) {
  try {
    const response = await getFetchData(key);
    target.value = response;
  } catch (error) {
    console.error(`Error in component[${key}]:`, error);
  }
}

// POST
export const postSendData = async (endpoint: string, data: any) => {
  try {
    console.log("Data >>> ", data)
    const response = await axios.post(`http://localhost:3001/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error sending data to ${endpoint}:`, error);
    throw error;
  }
};


