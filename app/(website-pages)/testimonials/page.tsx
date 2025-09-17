"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestimonialsPage() {
  const AWARDS = [
    "/ta-1.jpg",
    "/ta-2.jpg",
    "/ta-3.jpg",
    "/ta-4.png",
    "/ta-5.png",
    "/ta-6.png",
    "/ta-7.png"
  ];

  const TESTIMONIALS = [
    {
      quote:
        "Our guide was great with tons of involving stories. Experienced and witty. A two hour walk in the old town and we still wanted more and more! ",
      author: "JoannaW1995 – Tripadvisor, April 2025",
    },
    {
      quote:
        "This is the best way to begin a trip to Edinburgh and we had a top-notch experience from start to end........We all felt like he paced things very well and included the ideal amount of information to keep our group of children and adults engaged. This is such a bargain for what you get ",
      author: "Seaside03502152818 – Tripadvisor, March 2024",
    },
    {
      quote:
        "Every tour you go on with this group will be unique and filled with hidden gems! I went on one of these tours during a free afternoon of the Fringe and I could not recommend it more. Our guide's passion, wit and love for Scottish history was just wonderful Well done.",
      author: "D9450YOashleyg – Tripadvisor, August 2023",
    },
    {
      quote:
        "This was a great experience. Our guide was friendly and accommodating, told great stories but all factual so we really learned a lot. And it's genuinely free - no-one asks at the end to pay anything. I would highly recommend this for anyone interested in a history-based walking tour.",
      author: "Beth K, Washington DC",
    },
    {
      quote:
        "This was a really good tour – our guide was a mine of information. Amazing that it was FREE and for us as first time visitors to Edinburgh it was really informative. ..... We had earlier in our stay paid for a different tour and I can assure you it wasn't a patch on this one! We would thoroughly recommend if you are interested in the history of Edinburgh and places of interest there.",
      author: "JuliaCornwall – Tripadvisor, August 2023",
    },
    {
      quote:
        "We wanted to say what a wonderful time we had on one of your free guided walks. [Our guide] was simply brilliant. He escorted us through the crowds, and waited for us to catch up before telling us information. He was professional, extremely knowledgeable and had a great sense of humour. We learnt so much and loved the stories he told us.",
      author: "JR, London",
    },
    {
      quote: "Do not pay for a tour when these guys do a fantastic job.",
      author: "Anne F, Beverley",
    },
    {
      quote:
        "Brilliant walking tour of Edinburgh led by a superb guide whose depth of knowledge and ability to convey this was excellent. I learned so much about this fascinating city.",
      author: "Sightsee752443 – Tripadvisor, August 2023",
    },
    {
      quote:
        "All the volunteers were extremely friendly and couldn't have been more helpful. A fantastic walk with a brilliant guide. I would highly recommend this very informative and highly interesting tour. Definitely a must-do during the Edinburgh Fringe.",
      author: "KFS, Dundee",
    },
    {
      quote:
        "An excellent way to explore the Royal Mile and the Old Town of Edinburgh. Our guide was extremely knowledgeable, friendly and engaging with our small group (8 people with 7 different nationalities). I would highly recommend this tour to anyone.",
      author: "Chris M, Pickering",
    },
    {
      quote:
        "These tours are actually free (no tips expected) and they keep each group very small. We walked the entire Royal Mile. Our guide showed us so many closes, passages and secret courtyards. We enjoyed all the history and architectural information.",
      author: "MM, Arlington VA",
    },
  ];

  return (
    <section className="bg-yellow-100 py-16 pt-32 font-sans">
      <div className="container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16">
        {/* Awards grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center self-start">
          {AWARDS.map((src) => (
            <Image
              key={src}
              src={src}
              alt="TripAdvisor award badge"
              width={150}
              height={150}
              className="w-auto h-36 object-contain"
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="w-full md:w-1/2 text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-8">
          <h1 className="text-3xl md:text-4xl font-display mb-6">
            Testimonials
          </h1>
          <p className="text-lg mb-8">
            Here are a few of the things that our visitors have said about our
            tours. You can read more detailed reviews of our tours on our{" "}
            <Link
              href="https://www.tripadvisor.co.uk/Attraction_Review-g186525-d6725641-Reviews-Edinburgh_Festival_Voluntary_Guides_Association-Edinburgh_Scotland.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 underline"
            >
              TripAdvisor
            </Link>{" "}
            page (from which some of the following extracts have been taken).
          </p>

          <ul className="space-y-6">
            {TESTIMONIALS.map((t, idx) => (
              <li key={idx} className="bg-[#FFFBF1] rounded shadow p-6">
                <p className="italic mb-4">“{t.quote}”</p>
                <p className="font-semibold">— {t.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
