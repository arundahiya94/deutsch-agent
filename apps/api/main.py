from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from apps.api.core.config import settings
from apps.api.core.errors import install_exception_handlers
from apps.api.core.logger import log
from apps.api.routers import topics, packs, practice

app = FastAPI(title="DeutschAgent API", version="0.1.0")

# CORS for Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.WEB_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

install_exception_handlers(app)

@app.middleware("http")
async def request_logger(request: Request, call_next):
    path, method = request.url.path, request.method
    log.info("http_request_start", method=method, path=path)
    try:
        response = await call_next(request)
        log.info("http_request_end", method=method, path=path, status=response.status_code)
        return response
    except Exception as e:
        log.exception("unhandled_middleware_exception", method=method, path=path, error=str(e))
        raise

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(topics.router, prefix="/topics", tags=["topics"])
app.include_router(packs.router, prefix="/packs", tags=["packs"])
app.include_router(practice.router, prefix="/practice", tags=["practice"])
