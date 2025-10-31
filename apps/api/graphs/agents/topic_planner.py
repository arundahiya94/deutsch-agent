from apps.api.core.logger import log

def plan_topic(topic: str) -> dict:
    log.info("topic_planner_start", topic=topic)
    plan = {
        "name": topic,
        "cefr": "A1",
        "subtopics": ["Bestellen", "Bezahlen", "Höflichkeit"],
        "seed_phrases": ["Ich hätte gern", "Die Rechnung bitte", "Was empfehlen Sie?"],
    }
    log.info("topic_planner_done", topic=topic)
    return plan
