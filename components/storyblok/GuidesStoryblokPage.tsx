import "@/storyblok/storyblok-init";
import {
  StoryblokLiveEditing,
  type ISbStoryData,
  type SbBlokData,
} from "@storyblok/react/rsc";
import GuidesArchiveBlok from "@/storyblok/bloks/GuidesArchiveBlok";
import GuidesPageBlok from "@/storyblok/bloks/GuidesPageBlok";

export default function GuidesStoryblokPage({
  story,
  bridge = false,
}: {
  story: ISbStoryData;
  bridge?: boolean;
}) {
  const content = story.content as SbBlokData & { component?: string };

  return (
    <>
      {bridge ? <StoryblokLiveEditing story={story} /> : null}
      {content.component === "guides_archive" ? (
        <GuidesArchiveBlok blok={content} />
      ) : (
        <GuidesPageBlok blok={content} />
      )}
    </>
  );
}
