import type { Metadata } from "next";
import Image from "next/image";
import HomeHero from "./components/sections/HomeHero";
import ContentWithImage from "./components/sections/ContentWithImage";
import ToursSection from "./components/sections/ToursSection";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";

export const metadata: Metadata = {
  title: "Free Walking Tours of Edinburgh's Royal Mile | EFVGA",
  description:
    "Explore Edinburgh's historic Old Town with volunteer guides. Join the Edinburgh Festival Voluntary Guides Association for free Royal Mile walking tours every August or arrange a private tour any time of year.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <ContentWithImage
        imageSrc="/home-page-main.jpg"
        imageAlt="Edinburgh's Royal Mile"
        caption="Photo: Dave Hitchborne"
      >
        <p>
          Our expert guides will take you to the hidden corners of this
          fascinating district: the closes and courtyards, the neuks and
          crannies – places that you might never discover on your own. We'll
          tell you about its history and especially about the characters and
          historical figures who have made Edinburgh what it is.
        </p>
        <p>
          All our guides are local people who love our city and are only too
          pleased to share their knowledge and enthusiasm with you.
        </p>
        <p>We offer the following options:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Free walking tours during August.</strong> These tours are
            open to everyone. They are genuinely free with no need to book in
            advance.{" "}
            <a href="/free-tours" className="text-orange-700 underline">
              Read more…
            </a>
          </li>
          <li>
            <strong>Customised private walking tours</strong> for your
            organisation, group or family – at any time of the year. These
            tours, for which we make a small charge, can be constructed to cover
            any special interests that you may have.
            <a href="/private-tours" className="text-orange-700 underline">
              {" "}
              Read more…
            </a>
          </li>
        </ul>
      </ContentWithImage>

      <ToursSection />
      <Testimonials />
      <FAQ />
    </>
  );
}
