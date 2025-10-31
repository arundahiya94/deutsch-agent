from apps.api.core.logger import log

def validate_pack(pack: dict) -> dict:
    seen, dedup = set(), []
    for t in pack.get("terms", []):
        if t["lemma"] not in seen:
            dedup.append(t); seen.add(t["lemma"])
    pack["terms"] = dedup
    log.info("validator_done", terms=len(dedup))
    return pack
