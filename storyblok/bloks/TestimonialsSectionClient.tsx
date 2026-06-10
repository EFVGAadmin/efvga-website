"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react";

type TestimonialItem = {
  uid: string;
  quote: string;
  author: string;
};

type AwardImage = {
  src: string;
  alt: string;
};

export default function TestimonialsSectionClient({
  blok,
  heading,
  intro,
  tripadvisorUrl,
  display,
  layout,
  awardImages,
  items,
}: {
  blok: SbBlokData;
  heading: string;
  intro?: string;
  tripadvisorUrl?: string;
  display: "carousel" | "list";
  layout: "section" | "page";
  awardImages: AwardImage[];
  items: TestimonialItem[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "center",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const testimonialList = (
    <ul className="space-y-6">
      {items.map((t) => (
        <li key={t.uid} className="bg-[#FFFBF1] rounded shadow p-6">
          <p className="italic mb-4">&ldquo;{t.quote}&rdquo;</p>
          <p className="font-semibold">— {t.author}</p>
        </li>
      ))}
    </ul>
  );

  if (layout === "page") {
    return (
      <section
        {...storyblokEditable(blok)}
        className="bg-yellow-100 py-16 pt-32 font-sans"
      >
        <div className="container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16">
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center self-start">
            {awardImages.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={150}
                height={150}
                className="w-auto h-36 object-contain"
                unoptimized={img.src.startsWith("https://a.storyblok.com")}
              />
            ))}
          </div>

          <div className="w-full md:w-1/2 text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-8">
            <h1 className="text-3xl md:text-4xl font-display font-normal mb-6">
              {heading}
            </h1>
            {intro ? (
              <p className="text-lg mb-8">
                {intro}{" "}
                {tripadvisorUrl ? (
                  <Link
                    href={tripadvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 underline"
                  >
                    TripAdvisor
                  </Link>
                ) : null}
                {tripadvisorUrl
                  ? " page (from which some of the following extracts have been taken)."
                  : ""}
              </p>
            ) : null}
            {testimonialList}
          </div>
        </div>
      </section>
    );
  }

  const introContent = intro ? (
    <p className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-12 text-[#1D080C] leading-relaxed">
      {intro}{" "}
      {tripadvisorUrl ? (
        <Link
          href={tripadvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-700 underline"
        >
          TripAdvisor
        </Link>
      ) : null}
      {tripadvisorUrl ? " page." : ""}
    </p>
  ) : null;

  if (display === "list") {
    return (
      <section {...storyblokEditable(blok)} className="space-y-6">
        {testimonialList}
      </section>
    );
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-yellow-100 py-20 font-sans"
    >
      <div>
        <div className="container mx-auto px-4 xl:px-12">
          <h2 className="text-3xl md:text-4xl font-display font-normal text-center mb-6 text-[#1D080C]">
            {heading}
          </h2>
          {introContent}
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((t) => (
                <div
                  key={t.uid}
                  className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] px-4"
                >
                  <div className="bg-[#FFFBF1] rounded shadow p-8 h-full text-[#1D080C] flex flex-col">
                    <p className="text-lg md:text-xl leading-relaxed mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-auto font-semibold">— {t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-3 rounded-full shadow disabled:opacity-30 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
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
}
