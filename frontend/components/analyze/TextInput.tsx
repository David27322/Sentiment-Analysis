"use client";

import { ModelInfo } from "@/lib/api";

interface Props {
  text: string;
  onTextChange: (val: string) => void;
  selectedModel?: string;
  onModelChange?: (val: string) => void;
  models?: ModelInfo[];
  onSubmit: () => void;
  loading: boolean;
  showModelSelect?: boolean;
}

export default function TextInput({
  text,
  onTextChange,
  selectedModel,
  onModelChange,
  models = [],
  onSubmit,
  loading,
  showModelSelect = true,
}: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type or paste any text, tweet, or review..."
        rows={4}
        className="w-full resize-none text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
      />

      <div className="flex items-center gap-3">
        {showModelSelect && models.length > 0 && (
          <select
            value={selectedModel}
            onChange={(e) => onModelChange?.(e.target.value)}
            className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
          >
            {models.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.version})
              </option>
            ))}
          </select>
        )}

        <button
          onClick={onSubmit}
          disabled={loading || !text.trim()}
          className="ml-auto px-5 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}