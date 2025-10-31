from pydantic import BaseModel
from typing import Optional, Dict

class Example(BaseModel):
    de: str
    en: str

class Term(BaseModel):
    lemma: str
    pos: str
    meaning: str
    article: Optional[str] = None
    plural: Optional[str] = None
    separable: Optional[bool] = None
    conjugation: Optional[Dict] = None
