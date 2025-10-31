def guess(lemma: str):
    if lemma.endswith(("keit","ung")): return "die"
    if lemma.endswith(("chen","lein")): return "das"
    return "der"
