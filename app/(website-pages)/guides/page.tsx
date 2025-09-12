"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import HeroAlt from "@/app/components/sections/HeroAlt";

export default function GuidesLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/guides/home", // where we want to land after login
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials");
      return;
    }

    // NextAuth returns the URL we asked for; navigate there and refresh so the
    // new session cookie is picked up immediately without a manual reload.
    router.replace(res?.url ?? "/guides/home");
    router.refresh();
  };

  if (session) {
    return (
      <HeroAlt
        imageSrc="/free-tours.jpg"
        imageAlt="Guides"
        caption="Photo: EFVGA"
      >
        <h1 className="text-3xl mb-4 font-display">Guides Pages</h1>
        <p className="mb-6">
          You are already logged in. Click continue to access the guides area.
        </p>
        <button
          onClick={() => router.push("/guides/home")}
          className="bg-yellow-400 px-6 py-3 rounded font-semibold text-[#1D080C] hover:bg-yellow-500 transition-color cursor-pointer"
        >
          Continue
        </button>
      </HeroAlt>
    );
  }

  return (
    <HeroAlt
      imageSrc="/free-tours.jpg"
      imageAlt="Guides"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">Guides Pages</h1>
      <p className="mb-6">
        This section of the site is reserved for our guides. To access this part
        of the site, you will need to enter your user name and password. If you
        need any help with this, please contact the Secretary or Webmaster.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-yellow-400 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-yellow-400 rounded px-3 py-2"
            required
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-yellow-400 px-6 py-3 rounded font-semibold text-[#1D080C] hover:bg-yellow-500 transition-color cursor-pointer"
        >
          Log in
        </button>
      </form>
    </HeroAlt>
  );
}
