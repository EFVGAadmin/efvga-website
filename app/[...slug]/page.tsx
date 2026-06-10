import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import StoryblokPage from "@/components/storyblok/StoryblokPage";
import { fetchStory } from "@/lib/storyblok";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const storySlug = slug.join("/");

  const story = await fetchStory(storySlug);
  if (!story) return {};

  const content = story.content as {
    seo_title?: string;
    seo_description?: string;
  };

  return {
    title: content.seo_title || story.name,
    description: content.seo_description,
  };
}

export default async function CmsCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const storySlug = slug.join("/");

  const story = await fetchStory(storySlug);
  if (!story) notFound();

  const { isEnabled } = await draftMode();

  return <StoryblokPage story={story} bridge={isEnabled} />;
}
