from ml.predictor import predict
from ml.loader import store
from app.models.schemas import PredictResponse, ModelInfo


def run_prediction(model_id: str, text: str) -> PredictResponse:
    if not text.strip():
        raise ValueError("Input text cannot be empty")

    result = predict(model_id, text)
    return PredictResponse(**result)


def get_all_models() -> list[ModelInfo]:
    return [
        ModelInfo(
            id=m["id"],
            name=m["name"],
            version=m["version"],
            description=m["description"],
        )
        for m in store.registry()
    ]