from pydantic import BaseModel
from typing import List
from app.schemas.plant import Plant
from .plant import Plant

class GardenBase(BaseModel):
    name: str

class GardenCreate(GardenBase):
    pass

class Garden(GardenBase):
    id: int
    plants: List[Plant] = []

    class Config:
        orm_mode = True
