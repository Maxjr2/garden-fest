from sqlalchemy.orm import Session
from app.models.garden import Plant
from app.schemas.plant import PlantCreate

def get(db: Session, id: int):
    return db.query(Plant).filter(Plant.id == id).first()

def get_multi(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Plant).offset(skip).limit(limit).all()

def create(db: Session, obj_in: PlantCreate):
    db_obj = Plant(name=obj_in.name, garden_id=obj_in.garden_id)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj
