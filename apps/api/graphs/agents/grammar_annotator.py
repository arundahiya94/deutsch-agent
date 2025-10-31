from apps.api.tools.nlp.articles import guess
from apps.api.tools.nlp.conjugate_de import conjugate
from apps.api.core.logger import log

def annotate_terms(terms: list[dict]) -> list[dict]:
    log.info("grammar_annotator_start", count=len(terms))
    out = []
    for t in terms:
        if t["pos"] == "noun":
            art = t["lemma"].split()[0]
            article = art if art in {"der","die","das"} else guess(t["lemma"])
            plural = t["lemma"] + "-en" if article == "die" else t["lemma"] + "-e"
            out.append({**t, "article": article, "plural": plural})
        elif t["pos"] == "verb":
            out.append({**t, "conjugation": conjugate(t["lemma"])})
        else:
            out.append(t)
    log.info("grammar_annotator_done")
    return out
