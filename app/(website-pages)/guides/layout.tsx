"use client";

import { SessionProvider } from "next-auth/react";
import SideNav from "@/app/components/guides/SideNav";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex flex-col md:flex-row container mx-auto px-4 xl:px-12 py-8 pt-32 gap-8">
        <SideNav />
        <main className="flex-1">{children}</main>
      </div>
    </SessionProvider>
  );
}
