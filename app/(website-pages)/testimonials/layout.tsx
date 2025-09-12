import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Testimonials | Edinburgh Festival Voluntary Guides Association",
  description:
    "Read genuine reviews and testimonials from visitors who joined our volunteer-led walking tours of Edinburgh’s Royal Mile and historic districts.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
