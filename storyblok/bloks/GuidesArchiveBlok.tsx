import Link from "next/link";
import {
  storyblokEditable,
  type SbBlokData,
  StoryblokServerRichText,
} from "@storyblok/react/rsc";

export default function GuidesArchiveBlok({ blok }: { blok: SbBlokData }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12"
    >
      <Link
        href="/guides/archives"
        className="text-orange-700 hover:text-orange-700/80 underline"
      >
        Back to Archives
      </Link>
      {blok.body ? (
        <article className="cms-prose mx-auto">
          <StoryblokServerRichText doc={blok.body as never} />
        </article>
      ) : null}
      <Link
        href="/guides/archives"
        className="text-orange-700 hover:text-orange-700/80 underline"
      >
        Back to Archives
      </Link>
    </div>
  );
}
