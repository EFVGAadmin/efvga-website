"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export default function GuidesHome() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) {
    redirect("/guides");
  }
  console.log(session);
  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-8">
      <div className="container mx-auto px-4 xl:px-12 space-y-6">
        <h3 className="text-2xl font-display">Contents</h3>
        <p>
          This part of the site is reserved for our qualified guides.{" "}
          <span className="text-red-600">
            Please treat the information on these pages as confidential within
            the Association.
          </span>
        </p>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <Link
              href="/documents/2025_agenda.pdf"
              className="text-orange-700 underline"
            >
              AGM 2025 Agenda
            </Link>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <Link
                  href="/documents/2024_AGM_Minutes.pdf"
                  className="text-orange-700 underline"
                >
                  Draft Minutes of 2024 AGM
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/2024_treasurer.pdf"
                  className="text-orange-700 underline"
                >
                  Statement of Financial Position
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/documents/master_Rota_2025_c.pdf"
              className="text-orange-700 underline"
            >
              Master Rota 2025
            </Link>
          </li>

          <li>
            <Link
              href="/documents/EFVGA Privacy Statement May 2018.pdf"
              className="text-orange-700 underline"
            >
              Privacy Statement
            </Link>
            . How we deal with your personal information, as required by the
            General Data Protection Regulation 2018.
          </li>
          <li>
            <Link href="/guides/agm" className="text-orange-700 underline">
              Previous AGM Papers
            </Link>
          </li>
          <li>
            <Link
              href="/guides/newsletters"
              className="text-orange-700 underline"
            >
              Newsletters
            </Link>
          </li>
          <li>
            <Link href="/guides/hints" className="text-orange-700 underline">
              Hints and Tips
            </Link>
            . Advice for co-ordinators, and for guides on conducting a tour.
          </li>
          <li>
            <Link href="/guides/training" className="text-orange-700 underline">
              Training and Research Notes
            </Link>
            . Useful information for prospective guides including information
            about the Royal Mile, and a recommended reading list. There are also
            some useful links to other websites about Edinburgh and its history.
          </li>
          <li>
            <Link
              href="/guides/committee"
              className="text-orange-700 underline"
            >
              Committee
            </Link>
            . Who's who on the Association's committee - and how to contact
            them.
          </li>
          <li>
            <Link
              href="/documents/timeline.pdf"
              className="text-orange-700 underline"
            >
              EFVGA History
            </Link>
            . A brief history of the Association (1947 - 2017), published on the
            occasion of our 70th anniversary.
          </li>
          <li>
            <Link href="/guides/photos" className="text-orange-700 underline">
              Photo Sharing
            </Link>
            . View, download and share historic images of Edinburgh.
          </li>
          <li>
            <Link href="/guides/archives" className="text-orange-700 underline">
              Archives
            </Link>
            . Material from the old EFVGA site including Archie's Notes.
          </li>
        </ul>
      </div>
    </section>
  );
}
