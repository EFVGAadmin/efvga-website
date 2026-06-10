import FaqSectionClient from "./FaqSectionClient";
import type { SbBlokData } from "@storyblok/react/rsc";
import { blokImage } from "@/lib/storyblok-image";

type FaqItem = SbBlokData & {
  question?: string;
  answer?: unknown;
};

type SidebarImageBlok = SbBlokData & {
  alt?: string;
  caption?: string;
};

export default function FaqSectionBlok({ blok }: { blok: SbBlokData }) {
  const items = (blok.items as FaqItem[] | undefined) ?? [];
  const display = (blok.display as string) === "flat" ? "flat" : "accordion";
  const layout = (blok.layout as string) === "page" ? "page" : "section";
  const sidebarImages = (blok.sidebar_images as SidebarImageBlok[] | undefined)?.map(
    (item) => {
      const { src, alt } = blokImage(item);
      return {
        uid: item._uid || "",
        src,
        alt: item.alt || alt,
        caption: item.caption as string | undefined,
      };
    }
  ) ?? [];

  return (
    <FaqSectionClient
      blok={blok}
      heading={(blok.heading as string) || "Frequently Asked Questions"}
      intro={blok.intro as string | undefined}
      display={display}
      layout={layout}
      sidebarImages={sidebarImages}
      items={items.map((item) => ({
        uid: item._uid || "",
        question: item.question || "",
        answer: item.answer,
      }))}
    />
  );
}
