def conjugate(lemma: str) -> dict:
    return {"prasens": {"ich": lemma, "du": lemma+"st", "er": lemma+"t"}, "perfekt": {"ich": f"habe {lemma}t"}}
