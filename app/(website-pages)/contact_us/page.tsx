import type { Metadata } from "next";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact EFVGA | Edinburgh Festival Voluntary Guides Association",
  description:
    "Find directions to our free walking tour meeting point at the City Chambers and email contacts for customised tours, volunteering and general enquiries.",
};

export default function ContactUs() {
  return (
    <HeroAlt
      imageSrc="/bridge.jpg"
      imageAlt="City Chambers arches"
      caption="Photo: Stanley Howe"
    >
      <h1 className="text-3xl mb-4 font-display">Contact Us</h1>

      <h2 className="text-2xl font-display my-6">How to find our tours</h2>
      <p>
        Our free tours start from the City Chambers. The City Chambers (see
        photo) are situated in the High Street, directly opposite St. Giles
        Cathedral. This is Venue 199 in the Fringe Brochure, and it is worth
        noting that there are no other events at this venue. The Fringe Banner
        for this venue is displayed inside the courtyard.
      </p>
      <p>
        On arrival at the City Chambers, please look for our representative,
        either on the pavement in front of the arches or in the forecourt
        (through the arches). If you have the what3words app the address is{" "}
        <Link
          href="https://what3words.com/harp.wacky.risks"
          target="_blank"
          className="text-orange-700 underline"
        >
          ///harp.wacky.risks
        </Link>
        .
      </p>

      <h2 className="text-2xl font-display my-6">How to contact us</h2>
      <p>
        We welcome your enquiries and comments – and especially your feedback on
        our tours. Please use one of the following email addresses to contact
        us.
      </p>

      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>
          <span className="font-semibold">To arrange a custom tour:</span>{" "}
          <a
            href="mailto:tours@edinburghfestivalguides.org"
            className="text-orange-700 underline"
          >
            tours@edinburghfestivalguides.org
          </a>
        </li>
        <li>
          <span className="font-semibold">
            To enquire about becoming a guide:
          </span>{" "}
          <a
            href="mailto:training@edinburghfestivalguides.org"
            className="text-orange-700 underline"
          >
            training@edinburghfestivalguides.org
          </a>
        </li>
        <li>
          <span className="font-semibold">For problems with this website:</span>{" "}
          <a
            href="mailto:webmaster@edinburghfestivalguides.org"
            className="text-orange-700 underline"
          >
            webmaster@edinburghfestivalguides.org
          </a>
        </li>
        <li>
          <span className="font-semibold">
            For contributions to the newsletter (Guides Login):
          </span>{" "}
          <a
            href="mailto:newsletter@edinburghfestivalguides.org"
            className="text-orange-700 underline"
          >
            newsletter@edinburghfestivalguides.org
          </a>
        </li>
        <li>
          <span className="font-semibold">
            For all other enquiries, comments and feedback:
          </span>{" "}
          <a
            href="mailto:info@edinburghfestivalguides.org"
            className="text-orange-700 underline"
          >
            info@edinburghfestivalguides.org
          </a>
        </li>
      </ul>
    </HeroAlt>
  );
}
