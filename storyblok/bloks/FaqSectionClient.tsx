"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import {
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react";
import { StoryblokRichText } from "@storyblok/react";

type FaqItem = {
  uid: string;
  question: string;
  answer: unknown;
};

type SidebarImage = {
  uid: string;
  src: string;
  alt: string;
  caption?: string;
};

export default function FaqSectionClient({
  blok,
  heading,
  intro,
  display,
  layout,
  sidebarImages,
  items,
}: {
  blok: SbBlokData;
  heading: string;
  intro?: string;
  display: "accordion" | "flat";
  layout: "section" | "page";
  sidebarImages: SidebarImage[];
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    display === "accordion" ? 0 : null
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  const flatFaq = (
    <article className="space-y-6">
      {items.map((item) => (
        <div key={item.uid}>
          <h3 className="font-bold mb-4">{item.question}</h3>
          {item.answer ? (
            <div className="cms-prose text-lg md:text-xl">
              <StoryblokRichText doc={item.answer as never} />
            </div>
          ) : null}
        </div>
      ))}
    </article>
  );

  if (layout === "page") {
    return (
      <section
        {...storyblokEditable(blok)}
        className="bg-yellow-100 py-16 pt-32 font-sans"
      >
        <div className="container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16">
          <div className="hidden md:block w-full md:w-1/2 space-y-8">
            {sidebarImages.map((img) => (
              <figure key={img.uid}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded"
                  unoptimized={img.src.startsWith("https://a.storyblok.com")}
                />
                {img.caption ? (
                  <figcaption className="mt-2 text-sm text-center italic text-[#1D080C]">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>

          <div className="w-full md:w-1/2 text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-8">
            <h1 className="text-3xl md:text-4xl font-display font-normal mb-6">
              {heading}
            </h1>
            {intro ? (
              <p className="text-xl mb-8 font-sans font-semibold">{intro}</p>
            ) : null}

            <div className="relative md:hidden mb-8">
              <div className="overflow-hidden rounded" ref={emblaRef}>
                <div className="flex">
                  {sidebarImages.map((img) => (
                    <div key={img.uid} className="flex-[0_0_100%] px-2">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded"
                        unoptimized={img.src.startsWith("https://a.storyblok.com")}
                      />
                      {img.caption ? (
                        <p className="mt-2 text-sm text-center italic text-[#1D080C]">
                          {img.caption}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-2 rounded-full shadow disabled:opacity-30"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-2 rounded-full shadow disabled:opacity-30"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>

            {flatFaq}
          </div>
        </div>
      </section>
    );
  }

  if (display === "flat") {
    return (
      <section {...storyblokEditable(blok)} className="space-y-6">
        {flatFaq}
      </section>
    );
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#FFFBF1] py-20 font-sans"
    >
      <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-normal text-center mb-8 text-[#1D080C]">
          {heading}
        </h2>
        {intro ? (
          <p className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-12 text-[#1D080C] leading-relaxed">
            {intro}
          </p>
        ) : null}
        <ul className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li
                key={item.uid}
                className="border border-yellow-400 rounded bg-white/60"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 md:py-5 text-left text-[#1D080C] cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-semibold text-lg md:text-xl flex-1 pr-4">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && item.answer ? (
                  <div className="px-6 pb-6 text-[#1D080C] text-base md:text-lg leading-relaxed cms-prose">
                    <StoryblokRichText doc={item.answer as never} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
