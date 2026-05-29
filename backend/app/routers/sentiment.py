from fastapi import APIRouter, HTTPException
from app.models.schemas import PredictRequest, PredictResponse, ModelInfo
from app.services.sentiment import run_prediction, get_all_models

router = APIRouter(prefix="/api", tags=["sentiment"])


@router.get("/models", response_model=list[ModelInfo])
def list_models():
    """Returns all available models from the registry."""
    return get_all_models()


@router.post("/predict", response_model=PredictResponse)
def predict(request: PredictRequest):
    """Runs sentiment prediction for a given text and model."""
    try:
        return run_prediction(request.model_id, request.text)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))