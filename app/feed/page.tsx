"use client";

import { useEffect, useState } from "react";

type FeedItem = {
  id: number;
  title: string;
  comedian: string;
  live: boolean;
};

export default function FeedPage() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lol_username");
    if (stored) setUsername(stored);
  }, []);

  const feed: FeedItem[] = [
    {
      id: 1,
      title: "Open Mic Night",
      comedian: "Open Mic Hero",
      live: true,
    },
    {
      id: 2,
      title: "Crowd Work Chaos",
      comedian: "Roast Queen",
      live: true,
    },
    {
      id: 3,
      title: "Dark Humor Set",
      comedian: "Dark Humor Guy",
      live: false,
    },
    {
      id: 4,
      title: "Late Night Bombs",
      comedian: "First Timer",
      live: false,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Comedy Feed
        </h1>

        {username && (
          <span className="text-sm text-white/70">
            Watching as {username}
          </span>
        )}
      </header>

      {/* Feed Grid */}
      <section
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {feed.map((item) => (
          <div
            key={item.id}
            className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-white/10"
          >
            {/* LIVE BADGE */}
            {item.live && (
              <div className="absolute top-3 left-3 bg-red-600 text-xs px-3 py-1 rounded-full font-semibold">
                LIVE
              </div>
            )}

            {/* Viewer Count Placeholder */}
            <div className="absolute top-3 right-3 text-xs text-white/70">
              {Math.floor(Math.random() * 900 + 100)} watching
            </div>

            {/* Video Placeholder */}
            <div className="flex h-full w-full items-center justify-center text-white/40">
              Video Feed Placeholder
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
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
