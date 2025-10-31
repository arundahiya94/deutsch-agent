import os
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()  # reads apps/api/.env if present

class Settings(BaseModel):
    WEB_ORIGIN: str = os.getenv("WEB_ORIGIN", "http://localhost:3000")
    OLLAMA_HOST: str = os.getenv("OLLAMA_HOST", "http://localhost:11434")
    EMBEDDING_MODEL: str = os.getenv("EMBEDDING_MODEL", "sentence-transformers/all-MiniLM-L6-v2")

settings = Settings()
