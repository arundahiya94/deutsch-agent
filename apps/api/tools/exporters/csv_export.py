import csv, io

def export_csv(rows: list[dict]) -> bytes:
    if not rows: return b""
    buf = io.StringIO()
    w = csv.DictWriter(buf, fieldnames=list(rows[0].keys()))
    w.writeheader(); w.writerows(rows)
    return buf.getvalue().encode()
