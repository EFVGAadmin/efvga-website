import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walking Tour FAQs | Edinburgh Festival Voluntary Guides Association",
  description:
    "Answers to common questions about EFVGA’s free Royal Mile walks and custom private tours in Edinburgh, including booking, group sizes and accessibility.",
};

export default function ToursFAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
