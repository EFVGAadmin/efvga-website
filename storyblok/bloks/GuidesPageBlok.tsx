import {
  storyblokEditable,
  type SbBlokData,
  StoryblokServerRichText,
} from "@storyblok/react/rsc";

export default function GuidesPageBlok({ blok }: { blok: SbBlokData }) {
  const heading = (blok.heading as string) || "";
  const showConfidential = Boolean(blok.show_confidential);

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12"
    >
      {heading ? (
        <h3 className="text-2xl font-display font-normal">{heading}</h3>
      ) : null}
      {showConfidential ? (
        <p className="text-red-600">
          Please treat the information on this page as confidential within the
          Association.
        </p>
      ) : null}
      {blok.body ? (
        <div className="cms-prose">
          <StoryblokServerRichText doc={blok.body as never} />
        </div>
      ) : null}
    </section>
  );
}
