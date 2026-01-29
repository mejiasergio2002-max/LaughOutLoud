"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // later you’ll add validation + backend here
    router.push("/feed");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6">
          Enter the Club
        </h1>

        <p className="mb-8 text-white/80">
          Create a profile to perform, react, or tip comedians.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            required
            className="rounded-md px-4 py-3 bg-black border border-white/30 text-white focus:outline-none focus:border-white"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="rounded-md px-4 py-3 bg-black border border-white/30 text-white focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="mt-4 bg-red-600 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
