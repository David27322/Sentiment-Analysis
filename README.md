# SentimentLens

Social media sentiment analysis using Logistic Regression, Naive Bayes, and ANN — served via FastAPI + Next.js.

## Stack
- **Frontend** — Next.js 14, Tailwind CSS
- **Backend** — FastAPI, scikit-learn, TensorFlow
- **Models** — versioned via `registry.json`, hot-swappable

## Project Structure
```
social-sentiment/
├── frontend/        # Next.js app
├── backend/         # FastAPI + ML layer
│   └── ml/
│       ├── registry.json       # model registry
│       ├── models/             # .pkl / .h5 files (not in git)
│       └── preprocessors/      # vectorizers (not in git)
└── docker-compose.yml
```

## Local Dev

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
python -c "import nltk; nltk.download('stopwords')"
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Backend → http://localhost:8000  
Frontend → http://localhost:3000  
API docs → http://localhost:8000/docs

## Model Registry

Models are declared in `backend/ml/registry.json`.  
To add a new model: drop the file in `ml/models/`, add an entry to the registry, restart the server.

| ID | Name | Type | Enabled |
|----|------|------|---------|
| log_reg_v1 | Logistic Regression | sklearn | ✅ |
| bayes_v1 | Naive Bayes | sklearn | ✅ |
| ann_baseline_v1 | ANN Baseline | keras | 🐳 Docker only |
| ann_improved_v1 | ANN Improved | keras | 🐳 Docker only |

## Roadmap
- [ ] Docker deployment
- [ ] Clerk authentication
- [ ] Supabase history storage
- [ ] ONNX export for ANN (Windows support)