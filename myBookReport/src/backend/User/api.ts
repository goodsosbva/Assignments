// api.ts

import axios from 'axios';

export const getFetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${endpoint}:`, error);
    throw error;
  }
};

