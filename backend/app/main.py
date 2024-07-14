from fastapi import FastAPI
from app.api.routes import garden, plant
from app.core.config import settings
from app.db.session import engine
from app.db.base import Base

app = FastAPI(title=settings.PROJECT_NAME)

# Create database tables
Base.metadata.create_all(bind=engine)

app.include_router(garden.router, prefix="/api/gardens", tags=["gardens"])
app.include_router(plant.router, prefix="/api/plants", tags=["plants"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
