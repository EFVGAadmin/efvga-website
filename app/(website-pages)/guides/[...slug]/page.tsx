import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import GuidesStoryblokPage from "@/components/storyblok/GuidesStoryblokPage";
import { fetchStory } from "@/lib/storyblok";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

function storySlugFromParams(slug: string[]) {
  if (slug.length === 1 && slug[0] === "archives") {
    return "guides/archives/index";
  }
  return `guides/${slug.join("/")}`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await fetchStory(storySlugFromParams(slug));
  if (!story) return {};

  const content = story.content as {
    heading?: string;
    title?: string;
    body?: { content?: Array<{ type: string; content?: Array<{ text?: string }> }> };
  };

  const richtextTitle = content.body?.content?.find((node) => node.type === "heading")
    ?.content?.[0]?.text;

  return {
    title: content.heading || content.title || richtextTitle || story.name,
  };
}

export default async function GuidesCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await fetchStory(storySlugFromParams(slug));
  if (!story) notFound();

  const { isEnabled } = await draftMode();

  return <GuidesStoryblokPage story={story} bridge={isEnabled} />;
}
