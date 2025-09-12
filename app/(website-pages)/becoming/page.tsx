import type { Metadata } from "next";
import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Volunteer Guide | EFVGA",
  description:
    "Find out what it takes to join the Edinburgh Festival Voluntary Guides Association, the training process and the benefits of becoming a volunteer tour guide.",
};

export default function BecomingGuide() {
  return (
    <HeroAlt
      imageSrc="/free-tours.jpg"
      imageAlt="Becoming a guide"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">Becoming a guide</h1>
      <p className="mb-6 font-semibold">
        We are always on the lookout for new volunteer guides. Becoming a guide
        can be a fairly demanding process, but the role is enjoyable and very
        satisfying. If you think it is right for you, we would love to hear from
        you.
      </p>

      <h2 className="text-2xl font-display my-6">
        What being a guide involves
      </h2>
      <p>
        As a guide, you will be leading our highly-praised walking tours in and
        around the Royal Mile. Your aim will be to give visitors a flavour of
        our city's rich and colourful history. You will show them the important
        historic sites, and also the “hidden corners”: the closes, pends and
        wynds that they would be unlikely to find on their own.
      </p>
      <p>
        Most of our tours take place in August, during the Festival Fringe.
        These tours are completely free, and the guides, who are all volunteers,
        receive no payment.
      </p>

      <h2 className="text-2xl font-display my-6">What we look for</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          A deep interest in – and an enthusiasm for – Edinburgh, its history
          and its culture. You might not be an expert at the outset, but you
          must be willing to learn and to develop your knowledge to the full.
        </li>
        <li>
          A good speaking voice, with the ability to engage and entertain an
          audience – not to mention making yourself heard over the hubbub of the
          Edinburgh Fringe.
        </li>
        <li>
          A reasonable level of physical fitness. Our tours are in no way
          physically demanding, but you will be on your feet for up to two hours
          at a time, walking for at least a mile on narrow crowded pavements.
        </li>
        <li>
          Foreign language skills are an advantage but by no means essential.
        </li>
      </ul>

      <h2 className="text-2xl font-display my-6">What you get in return</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          The chance to develop your knowledge of local history and to share
          your knowledge with others.
        </li>
        <li>
          The opportunity to meet many interesting people from around the world.
        </li>
        <li>
          The satisfaction of being a member of a long-standing organisation
          with an enviable reputation. Association members are sometimes able to
          visit interesting places in the Old Town that are not normally open to
          the public, as well as attending social events.
        </li>
      </ul>

      <h2 className="text-2xl font-display my-6">Your commitment</h2>
      <p>
        As a guide, we ask you to commit to leading six to eight tours over the
        25 days of the Fringe season, on dates convenient to yourself. As far as
        possible, we won't expect you to lead two tours on the same day or on
        consecutive days (unless you prefer to do so).
      </p>
      <p>
        We also occasionally ask for guides to lead out-of-season tours. These
        take place at a date and time convenient to both guide and visitors.
      </p>

      <h2 className="text-2xl font-display my-6">The training process</h2>
      <p>
        All our guides go through a fairly demanding training process followed
        by a practical test. The training is self-paced. You can decide for
        yourself how much time you want to put into it and how fast you want to
        proceed. Some of our trainees spread the process over several months
        while others complete it more quickly. It will be entirely up to you to
        decide when you feel ready to take the test.
      </p>

      <h2 className="text-2xl font-display my-6">The next steps</h2>
      <p>
        If you haven't already done so, spend a few minutes browsing our
        website. This will give you an idea of what our tours involve and what
        you will be expected to do. Then contact our Training Coordinator who
        will be happy to answer your questions. This will be an informal chat
        and won't commit you to anything.
      </p>
      <p>
        For contact details, see our{" "}
        <Link href="/contact_us" className="text-orange-700 underline">
          Contacts Page
        </Link>
        .
      </p>
    </HeroAlt>
  );
}
