import {
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { blokImage } from "@/lib/storyblok-image";

type PromoCard = SbBlokData & {
  title?: string;
  subtitle?: string;
  link?: string;
};

export default function TourPromoSectionBlok({ blok }: { blok: SbBlokData }) {
  const cards = (blok.cards as PromoCard[] | undefined) ?? [];
  const badge = blokImage(blok, "badge_image", "badge_image_path");
  const badgeLink = blok.badge_link as string | undefined;

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white py-20 font-sans"
    >
      <div className="container mx-auto px-4 xl:px-12 flex flex-col items-center gap-12">
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {cards.map((card) => (
            <div
              key={card._uid}
              className="bg-yellow-400 text-[#1D080C] p-8 rounded shadow-md flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 font-display">
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed mb-2">{card.subtitle}</p>
              </div>
              <div>
                <Button href={card.link || "#"} variant="black" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        {badge.src && badgeLink ? (
          <Link
            href={badgeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor Travellers' Choice Award"
            className="inline-block"
          >
            <Image
              src={badge.src}
              alt={badge.alt || "TripAdvisor award"}
              width={200}
              height={262}
              className="h-48 w-auto mx-auto"
              unoptimized={badge.src.startsWith("https://a.storyblok.com")}
            />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
