import type { Metadata } from "next";
import { Yeseva_One, Josefin_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/layout/SiteHeader";
import SiteChromeFooter from "./components/layout/SiteChromeFooter";

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Walking Tours of Edinburgh's Royal Mile | EFVGA",
  description:
    "Explore Edinburgh's historic Old Town with volunteer guides. Join the Edinburgh Festival Voluntary Guides Association for free Royal Mile walking tours every August or arrange a private tour any time of year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${yesevaOne.variable} antialiased bg-white`}
      >
        <SiteHeader />
        {children}
        <SiteChromeFooter />
      </body>
    </html>
  );
}
