"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ArchivesPage() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (!session) redirect("/guides");

  const note = (slug: string, title: string, desc: string) => (
    <p>
      <Link
        href={`/guides/archives/${slug}`}
        className="text-orange-700 underline"
      >
        {title}
      </Link>{" "}
      {desc}
    </p>
  );

  return (
    <section className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <h3 className="text-2xl font-display">Archives</h3>
      <p className="text-red-600">
        Please treat the information on this page as confidential within the
        Association.
      </p>

      <h4 className="text-xl font-bold">Archie's Notes</h4>
      <p>
        The late Archie Blyth became a guide in 1988, and served for 22 years
        before having to step down because of failing eyesight. He contributed
        these interesting – and often amusing – notes to the Association's
        newsletter during and immediately after his period as Chairman
        (1998–2004).
      </p>

      {note(
        "archie01",
        "Note No. 1",
        "Introduction; Cab Stands; International Exhibitions"
      )}
      {note("archie02", "Note No. 2", "Lost Tolbooth; Sanctuary")}
      {note(
        "archie03",
        "Note No. 3",
        "Royal Bank of Scotland; Wester Portsburgh"
      )}
      {note("archie04", "Note No. 4", "Whitefoord House")}
      {note(
        "archie05",
        "Note No. 5",
        "Marlin's Wynd; Canongate Kirkyard Chimaera; Lady Stair; Mary King's Close"
      )}
      {note(
        "archie06",
        "Note No. 6",
        "Hertford's Invasion and Dunkeld Lectern (1 of 3); Last Riding of Parliament; Traprain Law"
      )}
      {note(
        "archie07",
        "Note No. 7",
        "Greyfriars; Royal Infirmary; The Dunkeld Lectern (2 of 3); All Hallows Fair in the Grassmarket"
      )}
      {note(
        "archie08",
        "Note No. 8",
        "Corrections to 7; Allan Ramsay; George IV's Visit 1822; Freeman of Edinburgh (The Burgess Ticket)"
      )}
      {note(
        "archie09",
        "Note No. 9",
        "Development of Holyrood Palace; Edinburgh's Water Supply"
      )}
      {note(
        "archie10",
        "Note No. 10",
        "Storytelling Centre; Granny's Green Steps; Musical Society of Edinburgh; Caledonian Hotel"
      )}
      {note(
        "archie11",
        "Note No. 11",
        "Palace and Oratory of Mary of Guise; The Cunzie House; Mercat Cross"
      )}
      {note(
        "archie12",
        "Note No. 12",
        "Paul's Wark; 'Bickers; Tailors' Hall, Cowgate"
      )}
      {note(
        "archie13",
        "Note No. 13",
        "Town Cadies; Great Fire 1824; Twelve Apostles House; Dr. Alexander Wood (Lang Sandy)"
      )}
      {note(
        "archie14",
        "Note No. 14",
        "Gas; Robert Gourlay's House; George Drummond; Papal Nuncio (1 of 2)"
      )}
      {note("archie15", "Note No. 15", "Moray House; Music Festival 1815")}
      {note(
        "archie16",
        "Note No. 16",
        "John Home; Dunkeld Lectern (3 of 3); Parliament Stairs; Assembly Rooms West Bow; Papal Nuncio (2 of 2)"
      )}
      {note(
        "archie17",
        "Note No. 17",
        "James Skene of Rubislaw; Netherbow Port"
      )}
      {note(
        "archie18",
        "Note No. 18",
        "Correction to 17; Lawnmarket; Merlin's Wynd; George Heriot's Schools"
      )}
      {note(
        "archie19",
        "Note No. 19",
        "Sir John Hepburn & The Royal Scots; The Scots Guards; James VI - an author; Kirkbrae House"
      )}
      {note("archie20", "Note No. 20", "Dr Elsie Maud Inglis")}
      {note("archie21", "Note No. 21", "The Scottish Reformation; Claret")}
      {note(
        "archie22",
        "Note No. 22",
        "James Clerk Maxwell; Dancing Assemblies"
      )}

      <h4 className="text-xl font-bold mt-6">More ...</h4>
      <p>
        <Link
          href="/guides/archives/theatre"
          className="text-orange-700 underline"
        >
          A History of the Theatre in Scotland
        </Link>
        . Researched and written by former Blue Badge Guide Marion Jamieson and
        kindly donated by Ginny Spencer.
      </p>
    </section>
  );
}
