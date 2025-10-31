# DeutschAgent

**DeutschAgent** — An open-source, LLM-powered German learning assistant that automatically finds meanings, grammar, examples, and images for new words, then turns them into interactive flashcards for vocabulary practice.

---

## 🚀 Features
- 💬 FastAPI-based backend with modular components (`core`, `rag`, `routers`, etc.)
- ⚙️ Typed configuration and validation via **Pydantic**
- 🧠 Semantic search and ranking with **LangChain** + **BM25**
- 🧾 PDF generation with **ReportLab**
- 🧰 Structured logging using **Loguru** and **Structlog**
- 🧹 Code style and linting managed by **Black**, **Isort**, and **Pylint**

---

## 🧩 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/deutsch-agent.git
cd deutsch-agent/apps/api
```

### 2️⃣ Create and activate a virtual environment
```bash
python -m venv .venv
# On macOS/Linux
source .venv/bin/activate
# On Windows
.\.venv\Scripts\activate
```

### 3️⃣ Install dependencies using the pyproject.toml
To install the main application:
```bash
pip install .
```

To include developer tools (Black, Isort, Pylint, etc.):
```bash
pip install ".[dev]"
```

### 🧪 Running the API locally

Start the FastAPI app with Uvicorn:
```bash
uvicorn core.main:app --reload
```

Then open your browser at:
👉 http://127.0.0.1:8000/docs

### 🧼 Linting & Formatting

Use the following commands to maintain consistent code quality:
```bash
black .
isort .
pylint core db rag routers

```
