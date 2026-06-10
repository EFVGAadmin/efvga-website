import type { NavItem } from "./site-config";

/** Mobile menu includes Testimonials between Donation and Guides. */
export function buildMobileNav(mainNav: NavItem[]): NavItem[] {
  const result: NavItem[] = [];

  for (const item of mainNav) {
    result.push(item);
    if (item.href === "/bank") {
      result.push({ label: "Testimonials", href: "/testimonials" });
    }
  }

  return result;
}
