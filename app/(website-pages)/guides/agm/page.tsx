"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AgmPapers() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const Section = ({
    year,
    children,
  }: {
    year: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <h4 className="text-xl font-semibold mt-6">{year}</h4>
      <ul className="list-disc ml-6 space-y-1">{children}</ul>
    </div>
  );

  const pdf = (path: string, label: string) => (
    <li>
      <Link href={`/${path}`} className="text-orange-700 underline">
        {label}
      </Link>
    </li>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Past AGM Papers</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>

      <Section year="2024">
        {pdf("documents/2024notice.pdf", "2024 AGM Notification")}
        {pdf("documents/2024agenda.pdf", "2024 AGM Agenda")}
        {pdf("documents/2023minutes.pdf", "2023 AGM Minutes")}
        {pdf("documents/2024_treasurer.pdf", "2024 Financial Report")}
      </Section>

      <Section year="2023">
        {pdf("documents/2023notice.pdf", "2023 AGM Notification")}
        {pdf("documents/2023agenda.pdf", "2023 AGM Agenda")}
        {pdf("documents/2022minutes.pdf", "2022 AGM Minutes")}
        {pdf("documents/2023_treasurer.pdf", "2023 Financial Report")}
      </Section>

      <Section year="2022">
        {pdf("documents/2022agenda.pdf", "2022 AGM Agenda")}
        {pdf("documents/2022treasurer.pdf", "2022 Financial Report")}
      </Section>

      <Section year="2021">
        {pdf("documents/2021notice.pdf", "2021 AGM Notification")}
        {pdf("documents/2021agenda.pdf", "2021 AGM Agenda")}
        {pdf("documents/2021treasurer.pdf", "2021 Treasurer's Report")}
      </Section>

      <Section year="2020">
        <p>
          NOTE: The 2020 AGM did not take place because of the COVID-19
          pandemic.
        </p>
        {pdf("documents/2020notice.pdf", "2020 AGM Notification")}
        {pdf("documents/2020agenda.pdf", "2020 AGM Agenda")}
      </Section>

      <Section year="2019">
        {pdf("documents/2019notice.pdf", "2019 AGM Notification")}
        {pdf("documents/2019agenda.pdf", "2019 AGM Agenda")}
        {pdf("documents/2019minutes.pdf", "2019 AGM Minutes")}
      </Section>

      <Section year="2018">
        {pdf("documents/2018notice.pdf", "2018 AGM Notification")}
        {pdf("documents/2018agenda.pdf", "2018 AGM Agenda")}
        {pdf("documents/2018minutes.pdf", "2018 AGM Minutes")}
      </Section>

      <Section year="2017">
        {pdf("documents/2017notice.pdf", "2017 AGM Notification")}
        {pdf("documents/2017agenda.pdf", "2017 AGM Agenda")}
        {pdf("documents/2017minutes.pdf", "2017 AGM Minutes")}
      </Section>

      <Section year="2016">
        {pdf("documents/2016notice.pdf", "2016 AGM Notification")}
        {pdf("documents/2016agenda.pdf", "2016 AGM Agenda")}
        {pdf("documents/2016minutes.pdf", "2016 AGM Minutes")}
      </Section>

      <Section year="2015">
        {pdf("documents/2015notice.pdf", "2015 Notification")}
        {pdf("documents/2015agenda.pdf", "2015 AGM Agenda")}
        {pdf("documents/2015minutes.pdf", "2015 AGM Minutes")}
      </Section>

      <Section year="2014">
        {pdf("documents/2014minutes.pdf", "2014 AGM Minutes")}
      </Section>
    </section>
  );
}
