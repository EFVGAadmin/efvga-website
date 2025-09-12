"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function HintsTips() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const pdf = (path: string, label: string, note?: string) => (
    <li>
      <Link href={`/${path}`} className="text-orange-700 underline">
        {label}
      </Link>{" "}
      {note && <span>({note})</span>}
    </li>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Hints and Tips</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>

      <ul className="list-disc ml-6 space-y-4">
        {pdf(
          "documents/hints_Committee.pdf",
          "Hints for Co-ordinators",
          "last updated July 2023"
        )}
        {pdf(
          "documents/hints_Guides.pdf",
          "Hints for Guides on conducting a tour",
          "last updated July 2023"
        )}
        {pdf(
          "documents/oldnewroute.pdf",
          "Old Town / New Town walk: suggested route",
          "July 2019"
        )}
        {pdf(
          "documents/oldnewnotes.pdf",
          "Old Town / New Town walk: notes on the route",
          "July 2019"
        )}
      </ul>
    </section>
  );
}
