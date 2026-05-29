import SentimentBadge from "@/components/ui/SentimentBadge";
import { PredictResponse, ModelInfo } from "@/lib/api";

interface Props {
  result: PredictResponse;
  model?: ModelInfo;
}

export default function ResultCard({ result, model }: Props) {
  const pct = Math.round(result.confidence * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">
            {model?.name ?? result.model_id}
          </p>
          <SentimentBadge sentiment={result.sentiment} />
        </div>
        <span className="text-2xl font-bold text-slate-800">{pct}%</span>
      </div>

      {/* Confidence bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            result.sentiment === "positive" ? "bg-emerald-500" : "bg-red-400"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Cleaned text */}
      <div className="bg-slate-50 rounded-lg px-4 py-3">
        <p className="text-xs text-slate-400 mb-1">Processed as</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {result.cleaned_text || "—"}
        </p>
      </div>
    </div>
  );
}