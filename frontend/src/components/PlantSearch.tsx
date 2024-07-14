import React, { useState } from 'react';
import { searchPlants } from '../services/trefleApi';
import { Plant } from '../types';

interface PlantSearchProps {
  onSelectPlant: (plant: Plant) => void;
}

const PlantSearch: React.FC<PlantSearchProps> = ({ onSelectPlant }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Plant[]>([]);

  const handleSearch = async () => {
    const plants = await searchPlants(query);
    setResults(plants);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for plants"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((plant) => (
          <li key={plant.id} onClick={() => onSelectPlant(plant)}>
            {plant.common_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantSearch;
