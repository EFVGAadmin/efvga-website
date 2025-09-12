import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety on Edinburgh Walking Tours | EFVGA",
  description:
    "Practical tips and advice to ensure a safe, enjoyable experience on our guided walking tours of Edinburgh’s Royal Mile and Old Town.",
};

import HeroAlt from "@/app/components/sections/HeroAlt";

export default function TourSafety() {
  return (
    <HeroAlt
      imageSrc="/edinburgh-city-alt.jpg"
      imageAlt="Edinburgh city street"
      caption="Photo: Derek Harper"
    >
      <h1 className="text-3xl mb-4 font-display">Safety on tours</h1>

      <p className="mb-6 font-semibold">
        You will enjoy your walk with us even more by observing these simple
        common-sense tips.
      </p>
      <p>
        Our walking tours in and around Edinburgh's Royal Mile are inherently
        very safe. But, as no activity is completely without risk, we offer the
        following advice to enhance your safety. These tips will help avoid
        mishaps, enabling you to enjoy your visit to the full.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Watch your step.</strong> Edinburgh is an old town with narrow
          streets and some uneven surfaces. Some of the passageways and
          courtyards on your tour will be narrow and some might be steep. None
          of them is at all dangerous but please do watch your step at all
          times.
        </li>
        <li>
          <strong>Keep an eye on your valuables.</strong> Edinburgh is not a
          high-crime area but the streets are often crowded and where there are
          crowds there are thieves. So be sure to take care of your handbag,
          purse or wallet — just as you would in any other busy city centre.
        </li>
        <li>
          <strong>Dress wisely.</strong> Choose clothing in which you will feel
          comfortable and footwear suitable for walking on hard pavements.
        </li>
        <li>
          <strong>Be sure you are fit enough</strong> to undertake the tour. The
          walk will not be at all fast and there will be many stops, but you
          will be walking for at least a mile (1.6 km) and this might include
          some short steep sections and some short flights of steps.
        </li>
      </ul>

      <p className="mt-6">
        Your guide will remind you of these points at the start of the tour.
        Please take note of the guide’s advice and follow it carefully. If you
        have any concerns, please discuss these with the guide or our
        representative at the start point.
      </p>

      <p className="mt-4 font-semibold">
        Please note that, while we take every care to avoid dangers, the EFVGA
        cannot be held liable for any accident, loss or injury, however caused,
        sustained by anyone taking part in a tour.
      </p>

      <p className="mt-4">
        By keeping these simple rules in mind, you can look forward to a
        trouble-free and enjoyable visit.
      </p>
    </HeroAlt>
  );
}
