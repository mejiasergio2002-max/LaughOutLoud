export default function FeedPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Live Comedy Feed
      </h1>

      <p className="text-white/70 mb-10">
        Live and recorded stand-up sets will appear here.
      </p>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-video bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center text-white/40"
          >
            Video Feed Placeholder
          </div>
        ))}
      </div>
    </main>
  );
}
