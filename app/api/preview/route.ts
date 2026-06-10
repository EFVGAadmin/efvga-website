import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "home";
  const secret = searchParams.get("secret");
  console.log(slug);
  console.log(secret);
  console.log(process.env.STORYBLOK_PREVIEW_SECRET);

  if (
    process.env.STORYBLOK_PREVIEW_SECRET &&
    secret !== process.env.STORYBLOK_PREVIEW_SECRET
  ) {
    return new Response("Invalid preview secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const path = slug === "home" ? "/" : `/${slug}`;
  redirect(path);
}
