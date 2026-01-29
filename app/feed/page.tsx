"use client";

type FeedItem = {
  id: number;
  title: string;
  comedian: string;
  src: string;
  live: boolean;
};

export default function FeedPage() {
  const feed: FeedItem[] = [
    {
      id: 1,
      title: "Crowd Work Madness",
      comedian: "Shane",
      src: "/shane.mp4",
      live: true,
    },
    {
      id: 2,
      title: "Relentless Punchlines",
      comedian: "Hart",
      src: "/hart.mp4",
      live: true,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Comedy Feed
      </h1>

      <section
        className="grid gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
      >
        {feed.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden bg-black border border-white/10"
          >
            {/* LIVE BADGE */}
            {item.live && (
              <div className="absolute top-3 left-3 z-10 bg-red-600 text-xs px-3 py-1 rounded-full font-semibold">
                LIVE
              </div>
            )}

            {/* VIDEO */}
            <video
              src={item.src}
              muted
              playsInline
              controls
              preload="metadata"
              className="w-full h-auto bg-black"
            />

            {/* INFO BAR */}
            <div className="bg-black/80 px-4 py-3">
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-white/70">
                {item.comedian}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
