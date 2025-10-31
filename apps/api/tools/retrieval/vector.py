def search(query: str, k: int = 5):
    return [f"Vector hit: {query} #{i+1}" for i in range(k)]
