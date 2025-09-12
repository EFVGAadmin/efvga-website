import type { Metadata } from "next";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Edinburgh | EFVGA",
  description:
    "Discover key facts about Edinburgh's history, Old Town, New Town, festivals and landmarks. Background resource for visitors joining EFVGA walking tours.",
};

export default function AboutEdinburgh() {
  return (
    <HeroAlt
      imageSrc="/edinburgh-castle.jpg"
      imageAlt="Edinburgh Castle towering over the city"
      caption="Photo: Andy Stephenson"
    >
      <h1 className="text-3xl mb-4 font-display">About Edinburgh</h1>
      <p className="mb-6 font-semibold">
        Here are some facts about our city which we hope you will find
        interesting.
      </p>

      <p>
        Every year, Edinburgh welcomes around four million visitors, making it
        <strong> Scotland's most popular tourist destination</strong>. As the
        country's capital – and its second largest city – it is the home of the
        Scottish Parliament, the official residence of the monarchy in Scotland
        and the site of the world's largest arts festival.
      </p>

      <h2 className="text-2xl font-display my-6">Edinburgh Castle</h2>
      <p>
        Edinburgh Castle is very much the focal point of the city's history:
        arguably the reason that Edinburgh exists. Built on top of an
        impregnable volcanic crag, it dominates the skyline. The Castle has been
        involved in many of the great conflicts of Scottish history, from the
        Wars of Scottish Independence (13th and 14th centuries) to the Jacobite
        Rising (1745). It includes the city's oldest building, the 12th-century
        St Margaret's Chapel. Today, the Castle is Scotland's most popular
        paid-for visitor attraction.
      </p>

      <h2 className="text-2xl font-display my-6">
        The Old Town &amp; Royal Mile
      </h2>
      <p>
        The <strong>Old Town</strong> grew up in the shadow of the Castle,
        starting from about the 12th century. It grew rapidly in the 15th and
        16th centuries, quickly becoming one of the most over-crowded and
        unsanitary towns in Europe. Today, the slums have gone and the Old Town
        is very much a thriving community. Rather than being preserved merely as
        a museum piece or a tourist attraction, it is still a place where people
        live, work and go to school.
      </p>

      <figure className="my-6">
        <Image
          src="/royal-mile-street-sign.jpg"
          alt="Royal Mile street sign"
          width={800}
          height={400}
          className="w-full h-auto rounded"
        />
        <figcaption className="mt-2 text-sm italic text-center text-[#1D080C]">
          Photo: EFVGA
        </figcaption>
      </figure>

      <p>
        The <strong>Royal Mile</strong> is the Old Town's main thoroughfare:
        five contiguous streets which together form a route from the Castle in
        the west to the Palace of Holyroodhouse in the east. With more historic
        sites packed into its short length than any comparable street in Europe,
        the Royal Mile is the main focus of our{" "}
        <Link href="/free-tours" className="text-orange-700 underline">
          free walking tours
        </Link>
        .
      </p>

      <h2 className="text-2xl font-display my-6">
        The Canongate &amp; New Town
      </h2>
      <p>
        The <strong>Canongate</strong> is the eastern part of the Old Town. It
        was a separate burgh until 1856, after which it was incorporated into
        the growing city of Edinburgh. It includes the King's official residence
        in Scotland, the church where the Royal Family worships when in
        residence, and the new Scottish Parliament building. We include the
        Canongate in our free walking tours.
      </p>
      <p>
        The <strong>New Town</strong>, built between 1767 and the 1850s, lies to
        the north of Princes Street. It includes some of the UK's finest
        examples of neo-classical and Georgian architecture and is considered a
        masterpiece of town planning. Although we don't visit the New Town on
        our free tours, we are happy to arrange a{" "}
        <Link href="/private-tours" className="text-orange-700 underline">
          custom tour
        </Link>{" "}
        of this beautiful district on request.
      </p>
      <p>
        The UNESCO World Heritage site encompasses both the Old Town and New
        Town. It is one of six such sites in Scotland.
      </p>

      <figure className="my-6">
        <Image
          src="/edinburgh-city.jpg"
          alt="View over Edinburgh Old Town"
          width={800}
          height={400}
          className="w-full h-auto rounded"
        />
        <figcaption className="mt-2 text-sm italic text-center text-[#1D080C]">
          Photo: Wikimedia Commons
        </figcaption>
      </figure>

      <h2 className="text-2xl font-display my-6">Edinburgh Today</h2>
      <p>
        Edinburgh today is a vibrant cosmopolitan city of nearly half a million
        people. It has the strongest economy of any UK city outside London and
        the highest percentages of professionals and graduates. It is the UK's
        most popular conference venue and Europe's fourth largest financial
        centre. With its four universities, it is also an important centre for
        higher education.
      </p>

      <h2 className="text-2xl font-display my-6">Festivals</h2>
      <p>
        The <strong>Edinburgh International Festival</strong> and the{" "}
        <strong>Edinburgh Festival Fringe</strong> are the city's two leading
        cultural events, attracting large numbers of visitors from around the
        world. The International Festival features world-class performers in the
        fields of music, theatre and dance, while the Fringe offers a much wider
        selection of shows, including many free open-air events. Our free
        walking tours are timed to coincide with the two festivals, which take
        place concurrently over a 25-day period each year in August (see our{" "}
        <Link href="/" className="text-orange-700 underline">
          home page
        </Link>{" "}
        for the current dates).
      </p>

      <h2 className="text-2xl font-display my-6">Further Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link
            href="https://www.edinburgh.gov.uk"
            target="_blank"
            className="text-orange-700 underline"
          >
            City of Edinburgh Council
          </Link>
          . Official website of the city's local government.
        </li>
        <li>
          <Link
            href="https://www.edinburgh.gov.uk/downloads/file/30669/edinburgh-by-numbers-2021"
            target="_blank"
            className="text-orange-700 underline"
          >
            Edinburgh by Numbers
          </Link>
          . A collection of facts and figures about the city.
        </li>
        <li>
          <Link
            href="https://www.edfringe.com/"
            target="_blank"
            className="text-orange-700 underline"
          >
            Edinburgh Festival Fringe
          </Link>
          .
        </li>
        <li>
          <Link
            href="https://www.eif.co.uk/"
            target="_blank"
            className="text-orange-700 underline"
          >
            Edinburgh International Festival
          </Link>
          .
        </li>
        <li>
          <Link
            href="https://en.wikipedia.org/wiki/History_of_Edinburgh"
            target="_blank"
            className="text-orange-700 underline"
          >
            History of Edinburgh
          </Link>
          . Wikipedia article.
        </li>
        <li>
          <Link
            href="https://whc.unesco.org/en/list/728"
            target="_blank"
            className="text-orange-700 underline"
          >
            UNESCO World Heritage site
          </Link>
        </li>
      </ul>
    </HeroAlt>
  );
}
