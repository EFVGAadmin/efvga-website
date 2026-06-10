import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import StoryblokPage from "@/components/storyblok/StoryblokPage";
import { fetchStory } from "@/lib/storyblok";

const fallbackMetadata: Metadata = {
  title: "Free Walking Tours of Edinburgh's Royal Mile | EFVGA",
  description:
    "Explore Edinburgh's historic Old Town with volunteer guides. Join the Edinburgh Festival Voluntary Guides Association for free Royal Mile walking tours every August or arrange a private tour any time of year.",
};

export async function generateMetadata(): Promise<Metadata> {
  const story = await fetchStory("home");
  if (!story) return fallbackMetadata;

  const content = story.content as {
    seo_title?: string;
    seo_description?: string;
    body?: unknown[];
  };
  //
  if (!content.body?.length) return fallbackMetadata;

  return {
    title: content.seo_title || fallbackMetadata.title,
    description: content.seo_description || fallbackMetadata.description,
  };
}

export default async function Home() {
  const { isEnabled } = await draftMode();
  const story = await fetchStory("home");
  const content = story?.content as { body?: unknown[] } | undefined;

  if (!story || !content?.body?.length) notFound();

  return <StoryblokPage story={story} bridge={isEnabled} />;
}
