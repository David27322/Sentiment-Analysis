from pydantic import BaseModel


class PredictRequest(BaseModel):
    text: str
    model_id: str


class PredictResponse(BaseModel):
    model_id: str
    sentiment: str        # "positive" | "negative"
    confidence: float     # 0.0 – 1.0
    cleaned_text: str


class ModelInfo(BaseModel):
    id: str
    name: str
    version: str
    description: str


class HealthResponse(BaseModel):
    status: str
    models_loaded: int