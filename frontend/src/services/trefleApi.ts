import axios from 'axios';
import { Plant } from '../types';

const API_KEY = 'YOUR_TREFLE_API_KEY';
const BASE_URL = 'https://trefle.io/api/v1';

export const searchPlants = async (query: string): Promise<Plant[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/plants/search`, {
      params: {
        q: query,
        token: API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error searching plants:', error);
    return [];
  }
};
