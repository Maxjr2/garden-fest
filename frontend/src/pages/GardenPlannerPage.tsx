import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchPlants } from '../redux/plantSlice';
import GardenMap from '../components/GardenMap';
import PlantList from '../components/PlantList';

const GardenPlannerPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const plants = useSelector((state: RootState) => state.plants.plants);
  const status = useSelector((state: RootState) => state.plants.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlants());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Garden Planner</h2>
      <div className="garden-layout">
        <GardenMap plants={plants} />
        <PlantList plants={plants} />
      </div>
    </div>
  );
};

export default GardenPlannerPage;
