import React from 'react';
import { Plant } from '../types';

interface PlantListProps {
  plants: Plant[];
}

const PlantList: React.FC<PlantListProps> = ({ plants }) => {
  return (
    <div className="plant-list">
      <h3>Plants in Your Garden</h3>
      {plants.length === 0 ? (
        <p>No plants added yet. Start adding plants to your garden!</p>
      ) : (
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlantList;
