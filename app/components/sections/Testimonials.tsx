"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  meta?: string;
}

const TESTIMONIALS: Testimonial[] = [
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
      "Every tour you go on with this group will be unique and filled with hidden gems! I went on one of these tours during a free afternoon of the Fringe and I could not recommend it more. Our guide's passion, wit and love for Scottish history was just wonderful. Well done.",
    author: "D9450YOashleyg – Tripadvisor, August 2023",
  },
  {
    quote:
      "This was a great experience. Our guide was friendly and accommodating, told great stories but all factual so we really learned a lot. And it's genuinely free – no-one asks at the end to pay anything. I would highly recommend this for anyone interested in a history-based walking tour.",
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

const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: false,
  align: "center",
};

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Re-init listeners when emblaApi changes
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-yellow-100 py-20 font-sans">
      <div>
        <div className="container mx-auto px-4 xl:px-12">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6 text-[#1D080C]">
            Testimonials
          </h2>
          <p className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-12 text-[#1D080C] leading-relaxed">
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
        </div>

        <div className="relative">
          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] px-4"
                >
                  <div className="bg-[#FFFBF1] rounded shadow p-8 h-full text-[#1D080C] flex flex-col">
                    <p className="text-lg md:text-xl leading-relaxed mb-4">
                      “{t.quote}”
                    </p>
                    <p className="mt-auto font-semibold">— {t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-3 rounded-full shadow disabled:opacity-30 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-3 rounded-full shadow disabled:opacity-30 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
