import {
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { blokImage } from "@/lib/storyblok-image";

type CtaBlok = SbBlokData & {
  label?: string;
  link?: string;
  variant?: "primary" | "secondary" | "black";
};

export default function HeroFullwidthBlok({ blok }: { blok: SbBlokData }) {
  const { src, alt } = blokImage(blok);
  const ctas = (blok.ctas as CtaBlok[] | undefined) ?? [];

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative h-[85vh] min-h-[500px] flex items-center justify-center text-center"
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          unoptimized={src.startsWith("https://a.storyblok.com")}
        />
      ) : null}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-white max-w-3xl">
        {blok.heading ? (
          <h1 className="text-3xl md:text-5xl mb-4 font-display">
            {blok.heading as string}
          </h1>
        ) : null}
        {blok.subtext ? (
          <p className="text-lg md:text-2xl mb-8 font-sans">
            {blok.subtext as string}
          </p>
        ) : null}
        {ctas.length > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctas.map((cta) => (
              <Button
                key={cta._uid}
                href={cta.link || "#"}
                variant={cta.variant === "secondary" ? "secondary" : "primary"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
