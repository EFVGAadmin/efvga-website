"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Newsletters() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const pdf = (path: string, label: string) => (
    <li>
      <Link href={`/${path}`} className="text-orange-700 underline">
        {label}
      </Link>
    </li>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Newsletters</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>

      <ul className="list-disc ml-6 space-y-4">
        {pdf("documents/newsletter_2025_Summer.pdf", "Summer 2025")}
        {pdf("documents/newsletter_2025_Spring.pdf", "Spring 2025")}
        {pdf("documents/newsletter_2024_Autumn.pdf", "Autumn 2024")}
        {pdf("documents/newsletter_2024_Summer.pdf", "Summer 2024")}
        {pdf("documents/newsletter_2024_Spring.pdf", "Spring 2024")}
        {pdf("documents/news23summer.pdf", "Summer 2023")}
        {pdf("documents/news22summer.pdf", "Summer 2022")}
        {pdf("documents/news21xmas.pdf", "Christmas/New Year 2021/22")}
        {pdf("documents/news202107.pdf", "Summer 2021")}
        {pdf("documents/news202007.pdf", "Summer 2020")}
        {pdf("documents/news201909.pdf", "Autumn 2019")}
        {pdf("documents/news201906.pdf", "June 2019")}
        {pdf("documents/news201811.pdf", "November 2018")}
        {pdf("documents/news201806.pdf", "June 2018")}
        {pdf("documents/news201801.pdf", "January 2018")}
        {pdf("documents/news201711.pdf", "November 2017")}
        {pdf("documents/news201707.pdf", "July 2017")}
        {pdf("documents/news201703.pdf", "March 2017")}
        {pdf("documents/news201611.pdf", "November 2016")}
        {pdf("documents/news201607.pdf", "July 2016")}
        {pdf("documents/news201603.pdf", "March 2016")}
        {pdf("documents/news201510.pdf", "October 2015")}
        {pdf("documents/news201503.pdf", "March 2015")}
        {pdf("documents/news201410.pdf", "October 2014")}
        {pdf("documents/news201406.pdf", "June 2014")}
      </ul>
    </section>
  );
}
