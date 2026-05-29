export default function HistoryPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">History</h1>
        <p className="text-slate-500 text-sm">
          Your past analyses will appear here.
        </p>
      </div>

      <div className="bg-white border border-dashed border-slate-200 rounded-xl px-6 py-16 text-center">
        <p className="text-slate-400 text-sm">
          Authentication coming soon —<br />sign in to save and revisit your analyses.
        </p>
      </div>
    </div>
  );
}