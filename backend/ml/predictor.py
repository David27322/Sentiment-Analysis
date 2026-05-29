from .preprocessor import clean_text
from .loader import store


def predict(model_id: str, text: str) -> dict:
    model = store.get(model_id)
    vectorizer = store.get_vectorizer_for(model_id)

    if model is None or vectorizer is None:
        raise ValueError(f"Model '{model_id}' not found in registry")

    cleaned = clean_text(text)
    vectorized = vectorizer.transform([cleaned])

    # Find model type from registry
    entry = next(m for m in store.registry() if m["id"] == model_id)

    if entry["type"] == "sklearn":
        label = int(model.predict(vectorized)[0])
        proba = model.predict_proba(vectorized)[0]
        confidence = float(max(proba))

    elif entry["type"] == "keras":
        raw = float(model.predict(vectorized.toarray(), verbose=0)[0][0])
        label = 1 if raw > 0.5 else 0
        confidence = raw if label == 1 else 1 - raw

    return {
        "model_id": model_id,
        "label": label,           # 0 = negative, 1 = positive
        "sentiment": "positive" if label == 1 else "negative",
        "confidence": round(confidence, 4),
        "cleaned_text": cleaned,
    }