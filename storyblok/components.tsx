import type { SbReactComponentsMap } from "@storyblok/react/rsc";
import HeroFullwidthBlok from "./bloks/HeroFullwidthBlok";
import HeroWithContentBlok from "./bloks/HeroWithContentBlok";
import RichTextBlok from "./bloks/RichTextBlok";
import TourPromoSectionBlok from "./bloks/TourPromoSectionBlok";
import FaqSectionBlok from "./bloks/FaqSectionBlok";
import TestimonialsSectionBlok from "./bloks/TestimonialsSectionBlok";
import SidebarImageBlok from "./bloks/SidebarImageBlok";
import GuidesPageBlok from "./bloks/GuidesPageBlok";
import GuidesArchiveBlok from "./bloks/GuidesArchiveBlok";

export const storyblokComponents: SbReactComponentsMap = {
  hero_fullwidth: HeroFullwidthBlok,
  hero_with_content: HeroWithContentBlok,
  rich_text: RichTextBlok,
  tour_promo_section: TourPromoSectionBlok,
  faq_section: FaqSectionBlok,
  testimonials_section: TestimonialsSectionBlok,
  sidebar_image: SidebarImageBlok,
  guides_page: GuidesPageBlok,
  guides_archive: GuidesArchiveBlok,
};
