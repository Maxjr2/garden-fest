from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Garden Planner"
    DATABASE_URL: str = "postgresql://garden_user:garden_password@localhost/garden_planner"

    class Config:
        env_file = ".env"

settings = Settings()
