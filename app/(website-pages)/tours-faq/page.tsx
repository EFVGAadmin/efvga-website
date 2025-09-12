"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ToursFAQ() {
  const IMAGES = [
    {
      src: "/faq-3.jpg",
      alt: "Grassmarket scene",
      caption: "Photo: Kim Traynor",
    },
    {
      src: "/faq-1.jpg",
      alt: "Group of visitors with guide",
      caption: "Photo: EFVGA",
    },
    {
      src: "/faq-2.jpg",
      alt: "Statue on the Royal Mile",
      caption: "Photo: Stanley Howe",
    },

    {
      src: "/faq-4.jpg",
      alt: "Guide with visitor group",
      caption: "Photo: Kim Traynor",
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  // Update arrow enabled state when carousel selects
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-yellow-100 py-16 pt-32 font-sans">
      <div className="container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16">
        {/* Images column for desktop */}
        <div className="hidden md:block w-full md:w-1/2 space-y-8">
          {IMAGES.map((img) => (
            <figure key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded"
              />
              <figcaption className="mt-2 text-sm text-center italic text-[#1D080C]">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* FAQ content (with mobile carousel at top) */}
        <div className="w-full md:w-1/2 text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-8">
          {/* Mobile carousel */}

          <h1 className="text-3xl md:text-4xl font-display mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 font-sans font-semibold">
            If you have any questions about our Edinburgh walking tours, this
            page will give you the answers.
          </p>

          <div className="relative md:hidden mb-8">
            {/* Embla viewport */}
            <div className="overflow-hidden rounded" ref={emblaRef}>
              <div className="flex">
                {IMAGES.map((img) => (
                  <div key={img.src} className="flex-[0_0_100%] px-2">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded"
                    />
                    <p className="mt-2 text-sm text-center italic text-[#1D080C]">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-2 rounded-full shadow disabled:opacity-30"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-[#1D080C] p-2 rounded-full shadow disabled:opacity-30"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>

          <article className="space-y-6">
            <div>
              <h3 className="font-bold mb-4">Are your tours really free?</h3>
              <p>
                During the Edinburgh International Festival and Fringe, our
                twice-daily tours are completely free – with no catches. Our
                guides do not expect tips and will never ask for one.
              </p>
              <p>
                We do charge a modest fee for our private tours, but we do
                everything we can to keep this to a minimum. These fees go
                towards our running costs.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                If you don't make money from your tours, why do you do it?
              </h3>
              <p>
                Because we love doing so. Our guides all have a great enthusiasm
                for our city and its history, and get a great deal of pleasure
                in sharing their knowledge with others. We hope that you will
                get as much enjoyment from taking part in our tours as we do
                from leading them.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                There are other free walking tours advertised in Edinburgh. Why
                should I choose yours?
              </h3>
              <p>
                Unlike some other tour organisers, we do not employ transient
                students or backpackers as guides. All our guides are
                long-standing Edinburgh residents who have gone through a
                rigorous training and qualification programme.
              </p>
              <p>
                Also, unlike other tour organisers, we keep our groups small:
                typically six to eight people per tour, and rarely more than 12.
                That way, everyone can clearly hear the guide and has an
                opportunity to ask questions.
              </p>
              <p>
                <Link
                  href="#testimonials"
                  className="text-orange-700 underline"
                >
                  Click here
                </Link>{" "}
                to see what other visitors have said about our tours.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                What if I turn up for a tour and find that it is full?
              </h3>
              <p>
                We have several guides available for each morning and afternoon
                session. If a tour is full, we simply allocate another guide to
                the next group.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">What if the weather is bad?</h3>
              <p>
                Our tours go out in all weathers. A light rain or chilly wind
                won't put us off, but, if the weather is particularly bad, the
                guide might choose to shorten the walk or to spend more time at
                indoor sites such as the Old Parliament Hall or various churches
                (subject to opening hours and other factors).
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                I will be in Edinburgh outside the period of the Festival and
                Fringe. Can I still go on a tour?
              </h3>
              <p>
                Yes. We can arrange a private tour for your family or group at
                any time during the year except during the Festival period in
                August. These tours are run by the same expert guides as those
                during the Festival. Note that we charge a small fee for private
                tours.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Can I arrange a private tour at short notice?
              </h3>
              <p>
                We ask for a minimum of two weeks notice for a private tour – or
                longer in the case of a large party that might need more than
                one guide.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">How long does a tour take?</h3>
              <p>
                Our free tours take about one and a half hours. But if you don't
                have that much time available, don't worry. You are still
                welcome to join a tour, even if you have to leave early – for
                example if you have another event to go to.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                How far will I have to walk? Is the walk difficult?
              </h3>
              <p>
                The route of the walk is approximately one mile (1.6 km) – and
                it's mainly downhill. There are no special difficulties, but
                keep in mind that this is an old town with narrow pavements and
                some uneven surfaces, so you will need to take care. See also
                our{" "}
                <Link href="/tour-safety" className="text-orange-700 underline">
                  Safety on Tours
                </Link>{" "}
                page.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Will there be a "comfort break"?
              </h3>
              <p>
                We don't usually plan a specific toilet stop on our tours but
                there are several places on the route where toilets are
                available. The guide will be happy to point these out on
                request.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Where do the tours start from?</h3>
              <p>
                Our free tours all start from in front of the City Chambers in
                the Royal Mile – see our{" "}
                <Link href="/contact_us" className="text-orange-700 underline">
                  Contact Us
                </Link>{" "}
                page for directions. For our custom tours, you will normally
                agree a meeting point with your guide.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Can I park at the City Chambers?
              </h3>
              <p>
                No. Parking anywhere in the vicinity of the Royal Mile during
                the Festival is extremely difficult. What's more, the streets in
                the Old Town are narrow and crowded, and parts of the Royal Mile
                (including the section in front of the City Chambers) are closed
                to vehicles during the Festival. If you are bringing a car to
                Edinburgh, our advice would be to leave it at your accommodation
                and to travel into town by bus or on foot. (See{" "}
                <Link
                  href="https://www.lothianbuses.com/"
                  target="_blank"
                  className="text-orange-700 underline"
                >
                  here
                </Link>{" "}
                for details of local bus services.)
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Are the walks suitable for families?
              </h3>
              <p>
                Yes. We are happy to take children on our tours, provided they
                are accompanied by a responsible adult.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Can you take blind people?</h3>
              <p>
                We will happily organise a tour for blind or partially-sighted
                people. Please ask us for details.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Can I go on a tour more than once?
              </h3>
              <p>
                Certainly. Given that we have around 50 guides, each with his or
                her own preferred route, preferences for which places to visit
                and favourite stories to tell, it's unlikely you would get
                exactly the same tour more than once. We have clients who come
                back year after year and tell us that they always learn
                something new.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Where can I find out more about Edinburgh and the Royal Mile?
              </h3>
              <p>
                The{" "}
                <Link
                  href="/about-edinburgh"
                  className="text-orange-700 underline"
                >
                  About Edinburgh
                </Link>{" "}
                page on this website would be a good place to start.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                I am interested in becoming a guide myself. How do I go about
                it?
              </h3>
              <p>
                We would be delighted to hear from you. To find out what is
                involved, see{" "}
                <Link href="/becoming" className="text-orange-700 underline">
                  Becoming a Guide
                </Link>{" "}
                . For the email address of the person to contact, see our{" "}
                <Link href="/contact_us" className="text-orange-700 underline">
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
