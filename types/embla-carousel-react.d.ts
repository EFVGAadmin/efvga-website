declare module "embla-carousel-react" {
  import { RefObject } from "react";

  export interface EmblaOptionsType {
    loop?: boolean;
    align?: "start" | "center" | "end";
    skipSnaps?: boolean;
    // Additional options omitted for brevity
  }

  type EmblaCarouselType = {
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: () => boolean;
    canScrollNext: () => boolean;
    on: (event: string, callback: () => void) => void;
  } | null;

  export default function useEmblaCarousel(
    options?: EmblaOptionsType
  ): [RefObject<HTMLDivElement>, EmblaCarouselType];
}
