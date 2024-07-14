import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GardenMap from '../components/GardenMap';
import PlantList from '../components/PlantList';
import { fetchPlants } from '../redux/plantSlice';
import { RootState } from '../redux/store';

const GardenPlannerPage: React.FC = () => {
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plants.plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  return (
    <div>
      <h1>Garden Planner</h1>
      <GardenMap plants={plants} />
      <PlantList plants={plants} />
    </div>
  );
};

export default GardenPlannerPage;
