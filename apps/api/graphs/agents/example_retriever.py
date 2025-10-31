from apps.api.tools.retrieval import bm25, translate
from apps.api.core.logger import log

def build_examples(terms: list[dict]) -> list[dict]:
    log.info("example_retriever_start", count=len(terms))
    examples = []
    for t in terms:
        q = t["lemma"]
        try:
            de = bm25.search(q, 1)[0]
            examples.append({"de": de, "en": translate.de_en(de)})
        except Exception as e:
            log.warning("example_build_failed", lemma=q, error=str(e))
    log.info("example_retriever_done", count=len(examples))
    return examples
