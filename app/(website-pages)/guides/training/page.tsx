"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function TrainingResearch() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const pdf = (path: string, label: string, note?: string) => (
    <li>
      <Link href={`/${path}`} className="text-orange-700 underline">
        {label}
      </Link>{" "}
      {note && <span>{note}</span>}
    </li>
  );

  const ext = (href: string, label: string, desc: string) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 underline"
      >
        {label}
      </a>{" "}
      {desc}
    </li>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Training and Research Notes</h3>

      <ul className="list-disc ml-6 space-y-4">
        {pdf(
          "documents/Grassmarket Notes.pdf",
          "Grassmarket Notes",
          ". Notes on the Grassmarket prepared by Eric Melvin and used for a training walk for guides in June 2025."
        )}
        
        {pdf(
          "documents/Old & New Town Walks1.pdf",
          "Old & New Town Walks",
          ". Material prepared by Eric Melvin for classes on Old Edinburgh History, in five sections."
        )}
.        {pdf(
          "documents/training.pdf",
          "EFVGA Training Pack",
          ". Information for prospective guides, last updated March 2019. This is now a single document which replaces several earlier documents. "
        )}

        {ext(
          "https://oldedinburghclub.org.uk/bibliography-of-edinburgh-history/",
          "Old Edinburgh Club Bibliography of Edinburgh History",
          ". Opens in a new tab."
        )}
        {ext(
          "https://threadinburgh.scot/",
          "Threadedinburgh",
          " - the Edinburgh and Leith local history website of Andy Arthur. Lots of interesting and well-written material (opens in new tab)."
        )}
        {ext(
          "https://parliamentsquareedinburgh.net/",
          "Parliament Square, Edinburgh",
          ". Detailed site with illustrations (opens in new tab)."
        )}
        {ext(
          "https://www.edinburghbookshelf.org/",
          "Edinburgh Bookshelf",
          ". Superb searchable collection of books and pictures about Edinburgh's history (opens in new tab)."
        )}
        {ext(
          "https://independent.academia.edu/JoeRock",
          "Joe Rock's Research Pages",
          ". Much material on Edinburgh history (opens in new tab)."
        )}
      </ul>
    </section>
  );
}
