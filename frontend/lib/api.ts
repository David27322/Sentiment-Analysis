const BASE = process.env["NEXT_PUBLIC_API_URL"] ?? "http://localhost:8000";

export interface ModelInfo {
  id: string;
  name: string;
  version: string;
  description: string;
}

export interface PredictResponse {
  model_id: string;
  sentiment: "positive" | "negative";
  confidence: number;
  cleaned_text: string;
}

export async function getModels(): Promise<ModelInfo[]> {
  const res = await fetch(`${BASE}/api/models`);
  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
}

export async function predict(
  model_id: string,
  text: string
): Promise<PredictResponse> {
  const res = await fetch(`${BASE}/api/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model_id, text }),
  });
  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}

export async function predictAll(
  text: string,
  models: ModelInfo[]
): Promise<PredictResponse[]> {
  return Promise.all(models.map((m) => predict(m.id, text)));
}