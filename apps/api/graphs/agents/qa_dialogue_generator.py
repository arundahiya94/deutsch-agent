from apps.api.tools.llm.prompts import TOPIC_QA_TEMPLATE
from apps.api.tools.llm.ollama_client import generate
from apps.api.core.logger import log

def generate_qa_dialogue(plan: dict):
    log.info("qa_generator_start", topic=plan["name"])
    _ = generate(TOPIC_QA_TEMPLATE.format(level=plan["cefr"], topic=plan["name"]))
    qa = [("Frage", "Antwort") for _ in range(10)]
    dialogue = [("Kunde", "Ich hätte gern die Suppe."), ("Kellner", "Sehr gern. Möchten Sie Brot dazu?")]
    log.info("qa_generator_done", qa=len(qa), dialogue=len(dialogue))
    return qa, dialogue
