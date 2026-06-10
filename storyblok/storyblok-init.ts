import {
  storyblokInit,
  apiPlugin,
  type StoryblokClient,
} from "@storyblok/react/rsc";
import { storyblokComponents } from "./components";

const region = process.env.STORYBLOK_REGION || "eu";
const accessToken = process.env.STORYBLOK_PREVIEW_TOKEN;

let apiInstance: StoryblokClient | null = null;

export function getStoryblokApi(): StoryblokClient {
  if (!accessToken) {
    throw new Error("STORYBLOK_PREVIEW_TOKEN is not set");
  }

  if (!apiInstance) {
    const initClient = storyblokInit({
      accessToken,
      apiOptions: { region },
      use: [apiPlugin],
      components: storyblokComponents,
    });
    const client = initClient();
    if (!client) {
      throw new Error("Failed to initialize Storyblok API client");
    }
    apiInstance = client;
  }

  return apiInstance;
}
