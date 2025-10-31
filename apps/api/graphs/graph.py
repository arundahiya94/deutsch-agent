from .agents.topic_planner import plan_topic
from .agents.term_miner import mine_terms
from .agents.grammar_annotator import annotate_terms
from .agents.example_retriever import build_examples
from .agents.qa_dialogue_generator import generate_qa_dialogue
from .agents.validator import validate_pack

def run_full_pack(topic_name: str) -> dict:
    plan = plan_topic(topic_name)
    terms = annotate_terms(mine_terms(plan))
    examples = build_examples(terms)
    qa, dialog = generate_qa_dialogue(plan)
    pack = {"topic": plan["name"], "terms": terms, "examples": examples, "qa": qa, "dialogue": dialog}
    return validate_pack(pack)
