import type { Metadata } from "next";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Private Walking Tours of Edinburgh | EFVGA",
  description:
    "Arrange a personalised walking tour of Edinburgh's historic districts with our enthusiastic volunteer guides – available year-round for groups, conferences and families.",
};

export default function FreeTours() {
  return (
    <HeroAlt
      imageSrc="/private-tours.jpg"
      imageAlt="EFVGA Private Tours"
      caption="Photo:EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">
        Walking tours of Edinburgh's historic districts – at a time which suits
        you best
      </h1>
      <p className="text-xl mb-8 font-sans font-semibold">
        Let us organise a tour especially for your organisation, group or
        family.
      </p>
      <p>
        These private tours are led by the same expert local guides who lead our
        highly-praised{" "}
        <Link href="/free-tours" className="text-orange-700 underline">
          free Royal Mile tours
        </Link>{" "}
        during the Edinburgh International Festival and Fringe.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We can arrange a walking tour for your group at any time of the year.
        </li>
        <li>
          These tours are suitable for conference delegates, cruise ship
          passengers, etc., as well as for smaller groups and families. (To keep
          things manageable, we normally split large groups among multiple
          guides, with each guide taking six to twelve people.)
        </li>
        <li>
          Choose from one of the suggested itineraries listed below, or ask us
          to plan a route that matches your specific interests.
        </li>
        <li>
          Although we will do our best to arrange your tour for the date that
          suits you best, this cannot always be guaranteed. It would help if you
          could give us at least two weeks notice and also if you could provide
          a choice of dates.
        </li>
        <h2 className="text-2xl font-display my-8">Cost and booking</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>All tours cost £6.50 per person (£3 for under-17s).</li>
          <li>
            There is no charge for primary or secondary school groups (including
            teachers and other accompanying adults) from within the City of
            Edinburgh.
          </li>
          <li>
            There are no hidden costs. Our guides are all volunteers who do not
            expect tips. The fees shown here all go towards the running of our
            association.
          </li>
          <li>
            Please{" "}
            <Link href="/contact_us" className="text-orange-700 underline">
              contact us
            </Link>{" "}
            when you are ready to book a tour or if you have any questions.
          </li>
        </ul>
        <h2 className="text-2xl font-display my-8">Suggested itineraries</h2>
        <p>
          We are completely flexible in the tours that we offer. The following
          are our most popular routes, but we are happy to vary these to meet
          your personal preferences or to include any particular sites that you
          would like to visit.
        </p>
        <p>Tours usually last about two hours.</p>
        <h3 className="text-xl font-sans font-bold my-6">
          WALK 1: UPPER ROYAL MILE
        </h3>
        <p>
          The original burgh of Edinburgh, including the Edinburgh Castle
          Esplanade, Lawnmarket, Parliament Hall, City Chambers, Tron Kirk and
          John Knox House.
        </p>
        <h3 className="text-xl font-sans font-bold my-6">
          WALK 2: LOWER ROYAL MILE
        </h3>
        <p>
          The quieter eastern section of the Royal Mile (the old Canongate
          burgh), taking in Canongate Tolbooth, Canongate Kirk, the Scottish
          Parliament and the Palace of Holyroodhouse.
        </p>
        <h3 className="text-xl font-sans font-bold my-6">
          WALK 3: ROYAL MILE HIGHLIGHTS
        </h3>
        <p>
          Selected sites from the full length of the Royal Mile, from the castle
          at the top of the hill to the palace and the bottom.
        </p>
        <h3 className="text-xl font-sans font-bold my-6">
          WALK 4: GRASSMARKET AND GREYFRIARS KIRK
        </h3>
        <p>
          The Grassmarket is Edinburgh’s original marketplace and now, in the
          21st century, one of the liveliest spots in the city. Greyfriars is
          one of the oldest churches in the city with many historic
          associations. Its adjacent kirk yard is the scene of the world-famous
          story of Greyfriars Bobby.
        </p>
        <h3 className="text-xl font-sans font-bold my-6">
          WALK 5: EDINBURGH'S NEW TOWN
        </h3>
        <p>
          The New Town (which in fact dates from the 18th Century) has some of
          the finest neo-classical and Georgian architecture in Britain and is
          considered a masterpiece of town planning. Our tour will show a
          selection of its many hundreds of historic buildings.
        </p>
        <p className="mt-8">
          Please{" "}
          <Link href="/contact_us" className="text-orange-700 underline">
            contact us
          </Link>{" "}
          when you are ready to book a tour or if you have any questions.
        </p>
      </ul>
    </HeroAlt>
  );
}
