"use client";

import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export default function AboutPage() {
  return (
    <HeroAlt
      imageSrc="/home-page-main.jpg"
      imageAlt="Royal Mile guided tour"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">About EFVGA - test content change</h1>
      <p>
        The Edinburgh Festival Voluntary Guides Association (EFVGA) was founded
        in 1947, the same year as the Edinburgh International Festival, with the
        aim of providing guided tours for Festival visitors. We have been
        running our tours every year since then.
      </p>
      <p>
        At any one time, the Association has 40 to 50 active guides. The guides
        are all volunteers, and receive no payment of any kind.
      </p>
      <p>
        The Association is run by a small committee which oversees the
        recruitment and training of the guides, the rota for our programme of
        free tours, bookings for custom tours, and the general administration of
        the Association. Committee members are themselves guides, and are
        elected by the Association's members.
      </p>
      <p>
        The Association is funded entirely by donations and by the fees we
        charge for custom tours. We do not receive financial support from any
        public bodies.
      </p>
      <p>
        We are grateful for the encouragement we receive from the City of
        Edinburgh Council, and especially from the Lord Provost, who is the
        patron of the Association.
      </p>
      <p>
        For information about our tours and other activities, please use the
        menu near the top of this page.
      </p>
      <p>
        You may also be interested in this{" "}
        <Link href="/history" className="text-orange-700 underline">
          short history of the Association
        </Link>
        .
      </p>
    </HeroAlt>
  );
}
