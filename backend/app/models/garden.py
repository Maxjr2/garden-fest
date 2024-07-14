from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Garden(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    plants = relationship("Plant", back_populates="garden")

class Plant(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    garden_id = Column(Integer, ForeignKey("garden.id"))
    garden = relationship("Garden", back_populates="plants")
