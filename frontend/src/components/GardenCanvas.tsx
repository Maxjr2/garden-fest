import React, { useRef, useEffect } from 'react';
import { GardenBed } from '../types';

interface GardenCanvasProps {
  size: { width: number; height: number };
  beds: GardenBed[];
  onAddBed: (bed: GardenBed) => void;
  onEditBed: (bedId: number) => void;
}

const GardenCanvas: React.FC<GardenCanvasProps> = ({ size, beds, onAddBed, onEditBed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw garden beds
    beds.forEach((bed) => {
      ctx.fillStyle = bed.type === 'raised' ? '#8B4513' : '#228B22';
      ctx.fillRect(bed.x, bed.y, bed.width, bed.height);
    });
  }, [size, beds]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if clicked on existing bed
    const clickedBed = beds.find(bed => 
      x >= bed.x && x <= bed.x + bed.width &&
      y >= bed.y && y <= bed.y + bed.height
    );

    if (clickedBed) {
      onEditBed(clickedBed.id);
    } else {
      // Add new bed
      onAddBed({
        id: Date.now(),
        x,
        y,
        width: 50,
        height: 50,
        type: 'ground'
      });
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={size.width * 50}
      height={size.height * 50}
      onClick={handleCanvasClick}
      style={{ border: '1px solid black' }}
    />
  );
};

export default GardenCanvas;
