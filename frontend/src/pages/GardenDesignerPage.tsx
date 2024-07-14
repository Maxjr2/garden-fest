import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GardenCanvas from '../components/GardenCanvas';
import { GardenBed } from '../types';

const GardenDesignerPage: React.FC = () => {
  const [gardenSize, setGardenSize] = useState({ width: 10, height: 10 });
  const [gardenBeds, setGardenBeds] = useState<GardenBed[]>([]);
  const navigate = useNavigate();

  const handleAddBed = (newBed: GardenBed) => {
    setGardenBeds([...gardenBeds, { ...newBed, id: Date.now() }]);
  };

  const handleEditBed = (bedId: number) => {
    navigate(`/bed-editor/${bedId}`);
  };

  return (
    <div>
      <h2>Garden Designer</h2>
      <div>
        <label>
          Garden Width (m):
          <input
            type="number"
            value={gardenSize.width}
            onChange={(e) => setGardenSize({ ...gardenSize, width: Number(e.target.value) })}
          />
        </label>
        <label>
          Garden Height (m):
          <input
            type="number"
            value={gardenSize.height}
            onChange={(e) => setGardenSize({ ...gardenSize, height: Number(e.target.value) })}
          />
        </label>
      </div>
      <GardenCanvas
        size={gardenSize}
        beds={gardenBeds}
        onAddBed={handleAddBed}
        onEditBed={handleEditBed}
      />
    </div>
  );
};

export default GardenDesignerPage;
