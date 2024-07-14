from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps

router = APIRouter()

@router.post("/", response_model=schemas.Garden)
def create_garden(
    garden: schemas.GardenCreate,
    db: Session = Depends(deps.get_db)
):
    return crud.garden.create(db=db, obj_in=garden)

@router.get("/{garden_id}", response_model=schemas.Garden)
def read_garden(
    garden_id: int,
    db: Session = Depends(deps.get_db)
):
    garden = crud.garden.get(db=db, id=garden_id)
    if not garden:
        raise HTTPException(status_code=404, detail="Garden not found")
    return garden

@router.get("/", response_model=list[schemas.Garden])
def read_gardens(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db)
):
    gardens = crud.garden.get_multi(db, skip=skip, limit=limit)
    return gardens
