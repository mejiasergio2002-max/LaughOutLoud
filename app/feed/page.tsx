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
      title: "Crowd Work Set",
      comedian: "Shane",
      src: "/shane.mp4",
      live: true,
    },
    {
      id: 2,
      title: "Fast Punchlines",
      comedian: "Hart",
      src: "/hart.mp4",
      live: true,
    },
    {
      id: 3,
      title: "Storytelling Chaos",
      comedian: "Theo",
      src: "/theo.mp4",
      live: false,
    },
    {
      id: 4,
      title: "Classic Crowd Killer",
      comedian: "Jo Koy",
      src: "/jokoy.mp4",
      live: false,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-10">
        Comedy Feed
      </h1>

      <section className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {feed.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden border border-white/10 bg-black"
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
              controls
              playsInline
              preload="metadata"
              className="w-full bg-black"
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
