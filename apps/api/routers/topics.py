from fastapi import APIRouter
from apps.api.core.logger import log

router = APIRouter()

@router.get("/sample")
def sample_topics():
    topics = ["Ordering Food", "House", "Essen & Trinken", "Directions"]
    log.info("topics_sample_returned", count=len(topics))
    return {"topics": topics}
