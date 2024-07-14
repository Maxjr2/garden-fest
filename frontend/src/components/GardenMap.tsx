import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Plant } from '../types';
import 'leaflet/dist/leaflet.css';

interface GardenMapProps {
  plants: Plant[];
}

const GardenMap: React.FC<GardenMapProps> = ({ plants }) => {
  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {plants.map((plant) => (
          <Marker key={plant.id} position={[plant.lat, plant.lng]}>
            <Popup>{plant.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GardenMap;
