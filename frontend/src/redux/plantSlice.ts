import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlantsAPI } from '../services/api';
import { Plant } from '../types';

interface PlantState {
  plants: Plant[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlantState = {
  plants: [],
  status: 'idle',
  error: null,
};

export const fetchPlants = createAsyncThunk(
  'plants/fetchPlants',
  async () => {
    const response = await fetchPlantsAPI();
    return response.data;
  }
);

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.plants = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default plantSlice.reducer;
