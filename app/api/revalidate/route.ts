import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("webhook-secret");
  const expected = process.env.STORYBLOK_WEBHOOK_SECRET;

  if (expected && secret !== expected) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const slug: string | undefined =
      body?.story?.full_slug || body?.full_slug || body?.slug;

    if (slug) {
      const path = slug === "home" ? "/" : `/${slug}`;
      revalidatePath(path);
    } else {
      revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, slug: slug ?? "all" });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
