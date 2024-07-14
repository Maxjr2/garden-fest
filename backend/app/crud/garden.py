from sqlalchemy.orm import Session
from app.models.garden import Garden
from app.schemas.garden import GardenCreate

def get(db: Session, id: int):
    return db.query(Garden).filter(Garden.id == id).first()

def get_multi(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Garden).offset(skip).limit(limit).all()

def create(db: Session, obj_in: GardenCreate):
    db_obj = Garden(name=obj_in.name)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj
