import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Edinburgh Festival Voluntary Guides Association",
  description:
    "Learn about the history, mission and volunteer guides of the Edinburgh Festival Voluntary Guides Association (EFVGA), founded in 1947 to welcome visitors with free walking tours of the Royal Mile.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
