import Footer from "./footer";
import { fetchConfig } from "@/lib/storyblok";
import {
  DEFAULT_SITE_CONFIG,
  parseSiteConfig,
} from "@/lib/site-config";

export default async function SiteChromeFooter() {
  try {
    const story = await fetchConfig();
    const config = parseSiteConfig(story?.content) ?? DEFAULT_SITE_CONFIG;
    return (
      <Footer
        columns={config.footerColumns}
        festivalYear={config.festivalYear}
        facebookUrl={config.facebookUrl}
      />
    );
  } catch {
    return <Footer />;
  }
}
