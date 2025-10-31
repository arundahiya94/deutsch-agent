from pydantic import BaseModel
from typing import List, Tuple, Dict, Optional
from .common import Term, Example

class Pack(BaseModel):
    topic: str
    terms: List[Term]
    examples: List[Example]
    qa: List[Tuple[str, str]]
    dialogue: List[Tuple[str, str]]
    assets: Optional[Dict] = None
