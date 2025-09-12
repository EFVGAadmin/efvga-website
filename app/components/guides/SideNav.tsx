"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/guides/home", label: "Contents" },
  { href: "/guides/agm", label: "AGM Papers" },
  { href: "/guides/newsletters", label: "Newsletters" },
  { href: "/guides/hints", label: "Hints and Tips" },
  { href: "/guides/training", label: "Training and Research" },
  { href: "/guides/committee", label: "Committee" },
  { href: "/guides/photos", label: "Photo Sharing" },
  { href: "/guides/archives", label: "Archives" },
  { href: "/", label: "Go to Main site" },
];

export default function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:w-64">
      {/* mobile toggle */}
      <button
        className="md:hidden mb-4 bg-yellow-400 px-4 py-2 rounded font-semibold text-[#1D080C]"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <ul className={`space-y-2 text-lg ${open ? "block" : "hidden"} md:block`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`block px-3 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 font-sans ${
                pathname === l.href
                  ? "bg-yellow-400 font-semibold text-gray-900"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
