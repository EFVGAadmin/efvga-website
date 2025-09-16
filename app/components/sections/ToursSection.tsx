import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

/**
 * Displays two promo boxes for the Free / Private tours plus TripAdvisor award badge.
 */
const ToursSection: React.FC = () => {
  const BOXES = [
    {
      title: "Free Tours",
      subtitle:
        "Let us show you the hidden corners of Edinburgh's historic Old Town.",
      href: "/free-tours",
    },
    {
      title: "Private Tours",
      subtitle:
        "Let us organise a tour especially for your organisation, group or family.",
      href: "/private-tours",
    },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4 xl:px-12 flex flex-col items-center gap-12">
        {/* Boxes */}
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {BOXES.map((box) => (
            <div
              key={box.title}
              className="bg-yellow-400 text-[#1D080C] p-8 rounded shadow-md flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 font-display">
                  {box.title}
                </h3>
                <p className="text-lg leading-relaxed mb-2">{box.subtitle}</p>
              </div>
              <div>
                <Button href={box.href} variant="black" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* TripAdvisor badge */}
        <Link
          href="https://www.tripadvisor.co.uk/Attraction_Review-g186525-d6725641-Reviews-Edinburgh_Festival_Voluntary_Guides_Association-Edinburgh_Scotland.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TripAdvisor Travellers' Choice Award"
          className="inline-block"
        >
          <Image
            src="/tchotel_2025_LL.png"
            alt="TripAdvisor Travellers' Choice Award"
            width={155}
            height={170}
            className="h-48 w-auto mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default ToursSection;
