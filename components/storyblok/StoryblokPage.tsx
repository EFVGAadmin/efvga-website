import "@/storyblok/storyblok-init";
import {
  StoryblokServerComponent,
  StoryblokServerStory,
  type ISbStoryData,
} from "@storyblok/react/rsc";
import { StoryblokLiveEditing } from "@storyblok/react/rsc";

export default function StoryblokPage({
  story,
  bridge = false,
}: {
  story: ISbStoryData;
  bridge?: boolean;
}) {
  const content = story.content as {
    body?: Array<{ component: string; _uid: string }>;
    component?: string;
  };

  if (content.component === "home" || content.component === "page") {
    return (
      <>
        {bridge ? <StoryblokLiveEditing story={story} /> : null}
        {(content.body ?? []).map((blok) => (
          <StoryblokServerComponent blok={blok} key={blok._uid} />
        ))}
      </>
    );
  }

  return (
    <>
      {bridge ? <StoryblokLiveEditing story={story} /> : null}
      <StoryblokServerStory story={story} />
    </>
  );
}
