from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from apps.api.core.logger import log

def install_exception_handlers(app: FastAPI) -> None:
    @app.exception_handler(StarletteHTTPException)
    async def http_exc_handler(request: Request, exc: StarletteHTTPException):
        log.warning("http_exception", status=exc.status_code, detail=str(exc.detail))
        return JSONResponse({"error": str(exc.detail)}, status_code=exc.status_code)

    @app.exception_handler(RequestValidationError)
    async def validation_exc_handler(request: Request, exc: RequestValidationError):
        log.warning("validation_error", errors=exc.errors())
        return JSONResponse({"error": "Validation error", "details": exc.errors()}, status_code=422)

    @app.exception_handler(Exception)
    async def unhandled_exc_handler(request: Request, exc: Exception):
        log.exception("unhandled_exception", error=str(exc))
        return JSONResponse({"error": "Internal server error"}, status_code=500)
