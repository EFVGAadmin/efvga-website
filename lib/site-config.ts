export type NavLink = {
  label: string;
  href: string;
  protected?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  protected?: boolean;
  children?: NavLink[];
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SiteConfig = {
  topbarTagline: string;
  topbarOrgName: string;
  festivalYear: string;
  facebookUrl: string;
  tripadvisorUrl: string;
  mainNav: NavItem[];
  footerColumns: FooterColumn[];
};

type Blok = {
  component?: string;
  label?: string;
  href?: string;
  protected?: boolean;
  title?: string;
  links?: Blok[];
  children?: Blok[];
};

export const DEFAULT_MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Edinburgh", href: "/about-edinburgh" },
  {
    label: "Tours",
    children: [
      { label: "Free Tours 2026", href: "/free-tours" },
      { label: "Private Tours", href: "/private-tours" },
      { label: "Safety on Tours", href: "/tour-safety" },
      { label: "Tours FAQ", href: "/tours-faq" },
    ],
  },
  { label: "Make a Donation", href: "/bank" },
  {
    label: "Guides",
    children: [
      { label: "Becoming a Guide", href: "/becoming" },
      { label: "Guides Login", href: "/guides", protected: true },
    ],
  },
  { label: "Contact", href: "/contact_us" },
];

export const DEFAULT_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Make a Donation", href: "/bank" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/tours-faq" },
      { label: "Contact Us", href: "/contact_us" },
    ],
  },
  {
    title: "Tours",
    links: [
      { label: "About Edinburgh", href: "/about-edinburgh" },
      { label: "Free Tours 2026", href: "/free-tours" },
      { label: "Private Tours", href: "/private-tours" },
      { label: "Safety on Tours", href: "/tour-safety" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Becoming a guide", href: "/becoming" },
      { label: "Guides Login", href: "/guides", protected: true },
    ],
  },
];

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  topbarTagline: "Guiding since 1947 • Patron: Lord Provost of Edinburgh",
  topbarOrgName: "Edinburgh Festival Voluntary Guides Association",
  festivalYear: String(new Date().getFullYear()),
  facebookUrl: "https://www.facebook.com/EFVGA/?locale=en_GB",
  tripadvisorUrl:
    "https://www.tripadvisor.co.uk/Attraction_Review-g186525-d6725641-Reviews-Edinburgh_Festival_Voluntary_Guides_Association-Edinburgh_Scotland.html",
  mainNav: DEFAULT_MAIN_NAV,
  footerColumns: DEFAULT_FOOTER_COLUMNS,
};

function parseNavLink(blok: Blok): NavLink | null {
  if (!blok.label || !blok.href) return null;
  return {
    label: blok.label,
    href: blok.href,
    protected: Boolean(blok.protected),
  };
}

function parseNavItem(blok: Blok): NavItem | null {
  if (!blok.label) return null;

  if (blok.component === "nav_group") {
    const children = (blok.children || [])
      .map(parseNavLink)
      .filter((l): l is NavLink => l !== null);
    return { label: blok.label, children };
  }

  if (blok.href) {
    return {
      label: blok.label,
      href: blok.href,
      protected: Boolean(blok.protected),
    };
  }

  return null;
}

function parseFooterColumn(blok: Blok): FooterColumn | null {
  if (!blok.title) return null;
  const links = (blok.links || [])
    .map(parseNavLink)
    .filter((l): l is NavLink => l !== null);
  return { title: blok.title, links };
}

export function parseSiteConfig(content: unknown): SiteConfig | null {
  if (!content || typeof content !== "object") return null;
  const c = content as Record<string, unknown>;

  const mainNav = ((c.main_nav as Blok[]) || [])
    .map(parseNavItem)
    .filter((item): item is NavItem => item !== null);

  const footerColumns = ((c.footer_columns as Blok[]) || [])
    .map(parseFooterColumn)
    .filter((col): col is FooterColumn => col !== null);

  return {
    topbarTagline:
      (c.topbar_tagline as string) || DEFAULT_SITE_CONFIG.topbarTagline,
    topbarOrgName:
      (c.topbar_org_name as string) || DEFAULT_SITE_CONFIG.topbarOrgName,
    festivalYear:
      (c.festival_year as string) || DEFAULT_SITE_CONFIG.festivalYear,
    facebookUrl:
      (c.facebook_url as string) || DEFAULT_SITE_CONFIG.facebookUrl,
    tripadvisorUrl:
      (c.tripadvisor_url as string) || DEFAULT_SITE_CONFIG.tripadvisorUrl,
    mainNav: mainNav.length ? mainNav : DEFAULT_SITE_CONFIG.mainNav,
    footerColumns: footerColumns.length
      ? footerColumns
      : DEFAULT_SITE_CONFIG.footerColumns,
  };
}

/** Replace year in labels like "Free Tours 2026" using config festival year. */
export function formatNavLabel(label: string, festivalYear: string): string {
  if (/Free Tours/i.test(label)) {
    return `Free Tours ${festivalYear}`;
  }
  return label;
}
