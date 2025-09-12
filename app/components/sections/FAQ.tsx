"use client";

import React, { useState, ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: "Are your tours really free?",
    answer: (
      <>
        <p>
          During the Edinburgh International Festival and Fringe, our
          twice-daily tours are completely free – with no catches. Our guides do
          not expect tips and will never ask for one.
        </p>
        <p>
          We do charge a modest fee for our private tours, but we do everything
          we can to keep this to a minimum. These fees go towards our running
          costs.
        </p>
      </>
    ),
  },
  {
    question: "If you don't make money from your tours, why do you do it?",
    answer: (
      <p>
        Because we love doing so. Our guides all have a great enthusiasm for our
        city and its history, and get a great deal of pleasure in sharing their
        knowledge with others. We hope that you will get as much enjoyment from
        taking part in our tours as we do from leading them.
      </p>
    ),
  },
  {
    question:
      "There are other free walking tours advertised in Edinburgh. Why should I choose yours?",
    answer: (
      <>
        <p>
          Unlike some other tour organisers, we do not employ transient students
          or backpackers as guides. All our guides are long-standing Edinburgh
          residents who have gone through a rigorous training and qualification
          programme.
        </p>
        <p>
          Also, unlike other tour organisers, we keep our groups small:
          typically six to eight people per tour, and rarely more than 12. That
          way, everyone can clearly hear the guide and has an opportunity to ask
          questions.
        </p>
        <p>
          <Link href="/testimonials" className="text-orange-700 underline">
            Click here
          </Link>{" "}
          to see what other visitors have said about our tours.
        </p>
      </>
    ),
  },
  {
    question: "What if I turn up for a tour and find that it is full?",
    answer: (
      <p>
        We have several guides available for each morning and afternoon session.
        If a tour is full, we simply allocate another guide to the next group.
      </p>
    ),
  },
  {
    question: "What if the weather is bad?",
    answer: (
      <p>
        Our tours go out in all weathers. A light rain or chilly wind won't put
        us off, but, if the weather is particularly bad, the guide might choose
        to shorten the walk or to spend more time at indoor sites such as the
        Old Parliament Hall or various churches (subject to opening hours and
        other factors).
      </p>
    ),
  },
  {
    question:
      "I will be in Edinburgh outside the period of the Festival and Fringe. Can I still go on a tour?",
    answer: (
      <p>
        Yes. We can arrange a private tour for your family or group at any time
        during the year except during the Festival period in August. These tours
        are run by the same expert guides as those during the Festival. Note
        that we charge a small fee for private tours.
      </p>
    ),
  },
  {
    question: "Can I arrange a private tour at short notice?",
    answer: (
      <p>
        We ask for a minimum of two weeks notice for a private tour – or longer
        in the case of a large party that might need more than one guide.
      </p>
    ),
  },
  {
    question: "How long does a tour take?",
    answer: (
      <>
        <p>
          Our free tours take about one and a half hours. But if you don't have
          that much time available, don't worry. You are still welcome to join a
          tour, even if you have to leave early – for example if you have
          another event to go to.
        </p>
      </>
    ),
  },
  {
    question: "How far will I have to walk? Is the walk difficult?",
    answer: (
      <>
        <p>
          The route of the walk is approximately one mile (1.6 km) – and it's
          mainly downhill. There are no special difficulties, but keep in mind
          that this is an old town with narrow pavements and some uneven
          surfaces, so you will need to take care. See also our{" "}
          <Link href="/tour-safety" className="text-orange-700 underline">
            Safety on Tours
          </Link>{" "}
          page.
        </p>
      </>
    ),
  },
  {
    question: 'Will there be a "comfort break"?',
    answer: (
      <p>
        We don't usually plan a specific toilet stop on our tours but there are
        several places on the route where toilets are available. The guide will
        be happy to point these out on request.
      </p>
    ),
  },
  {
    question: "Where do the tours start from?",
    answer: (
      <p>
        Our free tours all start from in front of the City Chambers in the Royal
        Mile – see our{" "}
        <Link href="/contact_us" className="text-orange-700 underline">
          Contact Us
        </Link>{" "}
        page for directions. For our custom tours, you will normally agree a
        meeting point with your guide.
      </p>
    ),
  },
  {
    question: "Can I park at the City Chambers?",
    answer: (
      <p>
        No. Parking anywhere in the vicinity of the Royal Mile during the
        Festival is extremely difficult. What's more, the streets in the Old
        Town are narrow and crowded, and parts of the Royal Mile (including the
        section in front of the City Chambers) are closed to vehicles during the
        Festival. If you are bringing a car to Edinburgh, our advice would be to
        leave it at your accommodation and to travel into town by bus or on
        foot. (See{" "}
        <Link
          href="https://www.lothianbuses.com/"
          target="_blank"
          className="text-orange-700 underline"
        >
          here
        </Link>{" "}
        for details of local bus services.)
      </p>
    ),
  },
  {
    question: "Are the walks suitable for families?",
    answer: (
      <p>
        Yes. We are happy to take children on our tours, provided they are
        accompanied by a responsible adult.
      </p>
    ),
  },
  {
    question: "Can you take blind people?",
    answer: (
      <>
        <p>
          We will happily organise a tour for blind or partially-sighted people.
          Please ask us for details.
        </p>
      </>
    ),
  },
  {
    question: "Can I go on a tour more than once?",
    answer: (
      <p>
        Certainly. Given that we have around 50 guides, each with his or her own
        preferred route, preferences for which places to visit and favourite
        stories to tell, it's unlikely you would get exactly the same tour more
        than once. We have clients who come back year after year and tell us
        that they always learn something new.
      </p>
    ),
  },
  {
    question: "Where can I find out more about Edinburgh and the Royal Mile?",
    answer: (
      <p>
        The{" "}
        <Link href="/about-edinburgh" className="text-orange-700 underline">
          About Edinburgh
        </Link>{" "}
        page on this website would be a good place to start.
      </p>
    ),
  },
  {
    question:
      "I am interested in becoming a guide myself. How do I go about it?",
    answer: (
      <p>
        We would be delighted to hear from you. To find out what is involved,
        see{" "}
        <Link href="/becoming" className="text-orange-700 underline">
          Becoming a Guide
        </Link>
        . For the email address of the person to contact, see our{" "}
        <Link href="/contact_us" className="text-orange-700 underline">
          Contact Us
        </Link>{" "}
        page.
      </p>
    ),
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FFFBF1] py-20 font-sans">
      <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-8 text-[#1D080C]">
          Frequently Asked Questions
        </h2>

        <ul className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li
                key={item.question}
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
                {isOpen && (
                  <div className="px-6 pb-6 text-[#1D080C] text-base md:text-lg leading-relaxed space-y-4">
                    {item.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
