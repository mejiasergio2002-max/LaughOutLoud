import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/landing.jpg"
        alt="Comedy bar"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
          LaughOutLoud
        </h1>

        <p className="max-w-xl text-lg md:text-xl mb-10 text-white">
          Live stand-up comedy.  
          Real people. Real bombs. Real laughs.
        </p>

        <div className="flex gap-4">
          <Link
            href="/room"
            className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition"
          >
            Enter the Club
          </Link>

          <button
            className="rounded-full border border-white px-8 py-4 text-lg text-white hover:bg-white/10 transition"
          >
            Just Watching
          </button>
        </div>

        <p className="mt-10 text-sm italic text-white/80">
          Tip your comedian. Heckle responsibly.
        </p>
      </div>
    </main>
  );
}
