from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps

router = APIRouter()

@router.post("/", response_model=schemas.Plant)
def create_plant(
    plant: schemas.PlantCreate,
    db: Session = Depends(deps.get_db)
):
    return crud.plant.create(db=db, obj_in=plant)

@router.get("/{plant_id}", response_model=schemas.Plant)
def read_plant(
    plant_id: int,
    db: Session = Depends(deps.get_db)
):
    plant = crud.plant.get(db=db, id=plant_id)
    if not plant:
        raise HTTPException(status_code=404, detail="Plant not found")
    return plant

@router.get("/", response_model=list[schemas.Plant])
def read_plants(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db)
):
    plants = crud.plant.get_multi(db, skip=skip, limit=limit)
    return plants
