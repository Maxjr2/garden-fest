import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchPlantsAPI = () => axios.get(`${API_URL}/plants`);

export const createPlantAPI = (plant: { name: string; garden_id: number }) =>
  axios.post(`${API_URL}/plants`, plant);
