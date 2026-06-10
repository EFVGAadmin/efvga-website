import { type ISbStoryData } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/storyblok/storyblok-init";

export { getStoryblokApi };

export type StoryFetchOptions = {
  version?: "draft" | "published";
  cv?: number;
};

async function resolveVersion(
  options: StoryFetchOptions
): Promise<"draft" | "published"> {
  if (options.version) return options.version;
  try {
    const { isEnabled } = await draftMode();
    if (isEnabled) return "draft";
  } catch {
    // draftMode unavailable outside request context
  }
  return process.env.NODE_ENV === "development" ? "draft" : "published";
}

export async function fetchStory(
  slug: string,
  options: StoryFetchOptions = {}
): Promise<ISbStoryData | null> {
  const version = await resolveVersion(options);

  try {
    const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, {
      version,
      cv: options.cv,
    });
    return data.story ?? null;
  } catch {
    return null;
  }
}

export async function fetchConfig(
  options: StoryFetchOptions = {}
): Promise<ISbStoryData | null> {
  return fetchStory("config", options);
}
