def search(query: str, k: int = 5):
    return [f"Beispiel für {query} #{i+1}" for i in range(k)]
