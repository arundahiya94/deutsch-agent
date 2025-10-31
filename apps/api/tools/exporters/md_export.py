def export_md(topic: str, pack: dict) -> str:
    lines = [f"# {topic}", "", "## Top Terms"]
    for t in pack.get("terms", [])[:20]:
        lines.append(f"- **{t['lemma']}** ({t['pos']}) — {t['meaning']}")
    return "\n".join(lines)
