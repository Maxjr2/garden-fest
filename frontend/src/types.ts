export interface GardenBed {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'raised' | 'ground';
}

export interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  image_url?: string;
}
