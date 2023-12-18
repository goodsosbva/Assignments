// api.ts

import axios from 'axios';

// const baseURL = process.env.VUE_APP_URL;

export const getFetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${endpoint}:`, error);
    throw error;
  }
};
