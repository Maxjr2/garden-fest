import React from 'react';
import { Plant } from '../types';

interface PlantListProps {
  plants: Plant[];
}

const PlantList: React.FC<PlantListProps> = ({ plants }) => {
  return (
    <ul>
      {plants.map((plant) => (
        <li key={plant.id}>{plant.name}</li>
      ))}
    </ul>
  );
};

export default PlantList;
