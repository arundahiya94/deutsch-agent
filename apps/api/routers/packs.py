from fastapi import APIRouter, Query, Response
from apps.api.core.logger import log
from apps.api.graphs.graph import run_full_pack
from apps.api.tools.exporters.csv_export import export_csv

router = APIRouter()

@router.post("/generate")
def generate_pack(topic: str = Query("Ordering Food")):
    log.info("pack_generation_request", topic=topic)
    pack = run_full_pack(topic)
    log.info("pack_generation_done", topic=topic, terms=len(pack["terms"]))
    return pack

@router.post("/export/csv")
def export_csv_route(topic: str = Query("Ordering Food")):
    pack = run_full_pack(topic)
    rows = [
        {
            "front": t["lemma"],
            "back": f"{t.get('meaning','')} | {t.get('article','')} | {ex['de']} / {ex['en']}",
        }
        for t, ex in zip(pack.get("terms", []), pack.get("examples", []))
    ]
    csv_bytes = export_csv(rows)
    filename = f"{topic.replace(' ', '_')}.csv"
    log.info("csv_export_ready", topic=topic, bytes=len(csv_bytes))
    return Response(
        content=csv_bytes,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )
