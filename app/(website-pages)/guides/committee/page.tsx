"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CommitteePage() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const Item = ({ role, detail }: { role: string; detail: string }) => (
    <li>
      <strong>{role}:</strong> {detail}
    </li>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Committee Members</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>
      <p>
        This is an up-to-date list of the Association's officers and committee
        members as at June 2024.
      </p>

      <ul className="list-disc ml-6 space-y-4">
        {Item({
          role: "Chairman",
          detail: "Bernard Heavie — 0131 661 3763, bheavie43@btinternet.com",
        })}
        {Item({
          role: "Vice Chairman",
          detail: "Val Baker — 0131 669 3767, valdotbaker@yahoo.com",
        })}
        {Item({
          role: "Secretary",
          detail: "Eric Melvin — 0131 447 5578, eric.melvin@btinternet.com",
        })}
        {Item({
          role: "Treasurer",
          detail: "Jim Eunson — 07758 223 732, eunsonjim@gmail.com",
        })}
        {Item({
          role: "Training coordinator and illustrated talks",
          detail: "Val Baker",
        })}
        {Item({
          role: "Private tours",
          detail: "John Masson — 07754 719172, john.a.masson@btinternet.com",
        })}
        {Item({ role: "Website", detail: "Jim Eunson" })}
        {Item({
          role: "Newsletter",
          detail: "Olwyn Alexander — 0758 0503472, OlwynA@gmail.com",
        })}
        {Item({
          role: "Fringe Society Liaison",
          detail: "Frances McDevitt — 0131 662 8573, sfmcdevi@gmail.com",
        })}
      </ul>

      <p className="font-semibold mt-4">Other committee members:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Elspeth McLean — 07753 123499, elspethmclean@hotmail.co.uk</li>
        <li>Colin Mckerchar — 07359 289803, mailmckerchar@gmail.com</li>
        <li>Graham Sutherland — 0131 667 3763, graham27@btinternet.com</li>
      </ul>
    </section>
  );
}
