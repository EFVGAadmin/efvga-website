import {
  storyblokEditable,
  type SbBlokData,
  StoryblokServerRichText,
} from "@storyblok/react/rsc";

export default function RichTextBlok({ blok }: { blok: SbBlokData }) {
  if (!blok.body) return null;

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-yellow-100 py-16 font-sans"
    >
      <div className="container mx-auto px-4 xl:px-12 cms-prose">
        {blok.heading ? (
          <h2 className="font-display font-normal text-2xl mb-4">{blok.heading as string}</h2>
        ) : null}
        <StoryblokServerRichText doc={blok.body as never} />
      </div>
    </section>
  );
}
