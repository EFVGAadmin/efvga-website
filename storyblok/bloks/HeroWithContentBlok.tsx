import {
  storyblokEditable,
  type SbBlokData,
  StoryblokServerRichText,
} from "@storyblok/react/rsc";
import Image from "next/image";
import { blokImage } from "@/lib/storyblok-image";

export default function HeroWithContentBlok({ blok }: { blok: SbBlokData }) {
  const { src, alt } = blokImage(blok);
  const reverse = Boolean(blok.reverse);
  const caption = blok.caption as string | undefined;

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-yellow-100 py-16 pt-32 font-sans"
    >
      <div
        className={`container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2">
          {src ? (
            <figure>
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[400px] object-contain rounded"
                unoptimized={src.startsWith("https://a.storyblok.com")}
              />
              {caption ? (
                <figcaption className="mt-2 text-sm text-center italic text-[#1D080C]">
                  {caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 cms-prose">
          {blok.body ? (
            <StoryblokServerRichText doc={blok.body as never} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
