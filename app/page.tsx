import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden text-white">
      <Image
        src="/landing.jpg"
        alt="Comedy bar"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          LaughOutLoud
        </h1>

        <p className="max-w-xl text-lg md:text-xl mb-10">
          Live stand-up comedy. Real people. Real bombs. Real laughs.
        </p>

        <div className="flex gap-4">
          <Link
            href="/register"
            className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition"
          >
            Enter the Club
          </Link>

          <Link
            href="/feed"
            className="rounded-full border border-white px-8 py-4 text-lg text-white hover:bg-white/10 transition"
          >
            Just Watching
          </Link>
        </div>
      </div>
    </main>
  );
}
