import Topbar from "./topbar";
import NavbarDesktop from "./navbar-desktop";
import NavbarTouch from "./navbar-touch";
import { fetchConfig } from "@/lib/storyblok";
import {
  DEFAULT_SITE_CONFIG,
  parseSiteConfig,
} from "@/lib/site-config";
import { buildMobileNav } from "@/lib/build-mobile-nav";

export default async function SiteHeader() {
  let config = DEFAULT_SITE_CONFIG;
  try {
    const story = await fetchConfig();
    config = parseSiteConfig(story?.content) ?? DEFAULT_SITE_CONFIG;
  } catch {
    // use defaults
  }

  const mobileNav = buildMobileNav(config.mainNav);

  return (
    <>
      <Topbar tagline={config.topbarTagline} orgName={config.topbarOrgName} />
      <div className="hidden xl:block sticky top-0 z-50">
        <NavbarDesktop nav={config.mainNav} festivalYear={config.festivalYear} />
      </div>
      <div className="xl:hidden">
        <NavbarTouch nav={mobileNav} festivalYear={config.festivalYear} />
      </div>
    </>
  );
}
