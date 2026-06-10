import TestimonialsSectionClient from "./TestimonialsSectionClient";
import type { SbBlokData } from "@storyblok/react/rsc";
import { blokImage } from "@/lib/storyblok-image";

type TestimonialItem = SbBlokData & {
  quote?: string;
  author?: string;
};

type AwardImageBlok = SbBlokData & {
  alt?: string;
};

export default function TestimonialsSectionBlok({ blok }: { blok: SbBlokData }) {
  const items = (blok.items as TestimonialItem[] | undefined) ?? [];
  const display = (blok.display as string) === "list" ? "list" : "carousel";
  const layout = (blok.layout as string) === "page" ? "page" : "section";
  const awardImages =
    (blok.award_images as AwardImageBlok[] | undefined)?.map((item) => {
      const { src, alt } = blokImage(item);
      return {
        src,
        alt: item.alt || alt || "TripAdvisor award badge",
      };
    }) ?? [];

  return (
    <TestimonialsSectionClient
      blok={blok}
      heading={(blok.heading as string) || "Testimonials"}
      intro={blok.intro as string | undefined}
      tripadvisorUrl={blok.tripadvisor_url as string | undefined}
      display={display}
      layout={layout}
      awardImages={awardImages.filter((img) => img.src)}
      items={items.map((item) => ({
        uid: item._uid || "",
        quote: item.quote || "",
        author: item.author || "",
      }))}
    />
  );
}
