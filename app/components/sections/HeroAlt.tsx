import Image from "next/image";
import React from "react";

interface HeroAltProps {
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
  reverse?: boolean;
  children: React.ReactNode;
}

/**
 * Section wrapper with yellow background that lays out an image next to arbitrary content.
 * The image covers 50% width on desktop and stacks on mobile.
 */
const HeroAlt: React.FC<HeroAltProps> = ({
  imageSrc,
  imageAlt = "",
  caption,
  reverse = false,
  children,
}) => {
  return (
    <section className="bg-yellow-100 py-16 pt-32 font-sans">
      <div
        className={`container mx-auto px-4 xl:px-12 flex flex-col md:flex-row gap-8 xl:gap-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <figure>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[400px] object-contain rounded"
            />
            {caption && (
              <figcaption className="mt-2 text-sm text-center italic text-[#1D080C]">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
