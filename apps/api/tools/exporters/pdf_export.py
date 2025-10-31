from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from io import BytesIO

def export_pdf(topic: str, md_text: str) -> bytes:
    buf = BytesIO(); c = canvas.Canvas(buf, pagesize=A4)
    y = 800
    for line in md_text.splitlines():
        c.drawString(40, y, line[:100]); y -= 18
        if y < 60: c.showPage(); y = 800
    c.save(); return buf.getvalue()
