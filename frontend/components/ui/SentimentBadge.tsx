export default function SentimentBadge({
  sentiment,
}: {
  sentiment: "positive" | "negative";
}) {
  const isPositive = sentiment === "positive";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
        isPositive
          ? "bg-emerald-50 text-emerald-700"
          : "bg-red-50 text-red-600"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isPositive ? "bg-emerald-500" : "bg-red-500"}`} />
      {isPositive ? "Positive" : "Negative"}
    </span>
  );
}