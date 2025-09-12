import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const awaitedParams = await params;
  const filename = `${awaitedParams.page}.md`;
  const filePath = path.join(process.cwd(), "archives", filename);
  let markdown = "";
  try {
    markdown = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }

  return (
    <div className="bg-yellow-100 py-16 rounded-sm font-sans text-[#1D080C] text-lg md:text-xl leading-relaxed space-y-6 container mx-auto px-4 xl:px-12">
      <Link
        href="/guides/archives"
        className="text-orange-700 hover:text-orange-700/80"
      >
        Back to Archives
      </Link>
      <article className="cms-prose mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
      <Link
        href="/guides/archives"
        className="text-orange-700 hover:text-orange-700/80"
      >
        Back to Archives
      </Link>
    </div>
  );
}

// Pre-generate static pages for all known archives
export async function generateStaticParams() {
  const slugs = [
    ...Array.from(
      { length: 22 },
      (_, i) => `archie${String(i + 1).padStart(2, "0")}`
    ),
    "theatre",
  ];
  return slugs.map((page) => ({ page }));
}
