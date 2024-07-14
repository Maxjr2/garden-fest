import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Plant } from '../types';

interface GardenMapProps {
  plants: Plant[];
}

const GardenMap: React.FC<GardenMapProps> = ({ plants }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {plants.map((plant) => (
        <Marker key={plant.id} position={[plant.lat, plant.lng]}>
          <Popup>{plant.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GardenMap;
