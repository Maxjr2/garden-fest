from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import garden, plant
from app.core.config import settings
from app.db.session import engine
from app.db.base import Base

app = FastAPI(title=settings.PROJECT_NAME)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows the React app to connect
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(garden.router, prefix="/api/gardens", tags=["gardens"])
app.include_router(plant.router, prefix="/api/plants", tags=["plants"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Garden Planner API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
