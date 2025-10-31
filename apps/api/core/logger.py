from loguru import logger
import sys
import structlog

# Loguru sink (JSON)
logger.remove()
logger.add(sys.stdout, level="INFO", serialize=True)

# structlog wrapper for consistent, structured logs
structlog.configure(processors=[structlog.processors.JSONRenderer()])
log = structlog.get_logger()
