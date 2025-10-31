from apps.api.tools.fetchers import wiktionary, dwds
from apps.api.core.logger import log

def mine_terms(plan: dict) -> list[dict]:
    log.info("term_miner_start", topic=plan["name"])
    base = [
        {"lemma": "bestellen", "pos": "verb"},
        {"lemma": "die Rechnung", "pos": "noun"},
        {"lemma": "das Menü", "pos": "noun"},
        {"lemma": "empfehlen", "pos": "verb"},
        {"lemma": "lecker", "pos": "adj"},
    ]
    out = []
    for t in base:
        meta = {}
        try:
            meta |= wiktionary.fetch(t["lemma"])
            meta |= dwds.fetch(t["lemma"])
        except Exception as e:
            log.warning("term_lookup_failed", lemma=t["lemma"], error=str(e))
        out.append({**t, "meaning": meta.get("meaning", t["lemma"])})
    log.info("term_miner_done", count=len(out))
    return out
