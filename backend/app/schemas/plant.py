from pydantic import BaseModel

class PlantBase(BaseModel):
    name: str
    garden_id: int

class PlantCreate(PlantBase):
    pass

class Plant(PlantBase):
    id: int

    class Config:
        orm_mode = True
