from pydantic import BaseModel
from typing import List

class TopicPlan(BaseModel):
    name: str
    cefr: str
    subtopics: List[str]
    seed_phrases: List[str]
