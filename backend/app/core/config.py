from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Garden Planner"
    DATABASE_URL: str = "postgresql://garden_planner:garden_planner@localhost/garden_planner"

    class Config:
        env_file = ".env"

settings = Settings()
