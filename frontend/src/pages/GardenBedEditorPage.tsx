import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlantSearch from '../components/PlantSearch';
import { Plant } from '../types';

const GardenBedEditorPage: React.FC = () => {
  const { bedId } = useParams<{ bedId: string }>();
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    // TODO: Fetch bed details and existing plants
  }, [bedId]);

  const handleAddPlant = (plant: Plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <div>
      <h2>Garden Bed Editor</h2>
      <p>Editing bed: {bedId}</p>
      <PlantSearch onSelectPlant={handleAddPlant} />
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.common_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GardenBedEditorPage;
