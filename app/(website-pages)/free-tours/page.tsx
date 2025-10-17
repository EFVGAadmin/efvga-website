import type { Metadata } from "next";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Royal Mile Walking Tours | EFVGA",
  description:
    "Join our volunteer guides for free, small-group walking tours of Edinburgh's Royal Mile every August during the Festival Fringe.",
};

export default function FreeTours() {
  return (
    <HeroAlt
      imageSrc="/free-tours.jpg"
      imageAlt="EFVGA Free Tours"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">
        Free walking tours during August
      </h1>
      <p className="text-xl mb-8 font-sans font-semibold">
        Let us show you the hidden corners of Edinburgh's historic Old Town.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We'll show you not only many of the most famous historic sites in the
          city but also the out-of-the way corners and hidden places - closes
          and courtyards, pends and wynds - which you might never discover on
          your own.
        </li>
        <li>
          Our guides are all local people with a great enthusiasm for our city
          and its history, and who love to share their knowledge.
        </li>
        <li>
          Unlike some other tours, ours are genuinely free. Our guides do not
          solicit tips nor do we waste your time by taking you into gift shops
          or tourist outlets.
        </li>
        <li>
          Our groups are quite small, as we always have several guides available
          so that we can split tours into small groups as necessary.
        </li>
        <p>
          Tours leave from in front of the City Chambers in the Royal Mile at
          10:30 and 14:00 from 9th to 30th August 2026 (see our{" "}
          <Link href="/contact_us" className="text-orange-700 underline">
            Contact Us
          </Link>{" "}
          page for directions). There are no formalities. Just turn up for
          either our morning or afternoon tours. The tour takes approximately
          one and half hours. Although it is not essential, if you prefer to
          book in advance then follow{" "}
          <Link
            href={
              "https://www.edfringe.com/tickets/whats-on/free-royal-mile-tours"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 underline"
          >
            this link
          </Link>{" "}
          which will lead you to our listing in the Edinburgh Fringe website.
          (This will open in a new window) Please note that the Fringe Society
          charges a small fee for bookings made in this way.
        </p>
        <p>
          <strong>
            In the meantime if you wish to take a tour with us, you can book a{" "}
            <Link href="/private-tours" className="text-orange-700 underline">
              private tour
            </Link>{" "}
            for your family or group at any time of the year.
          </strong>
        </p>
      </ul>
    </HeroAlt>
  );
}
