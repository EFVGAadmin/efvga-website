import type { SbBlokData } from "@storyblok/react/rsc";

type AssetField = {
  filename?: string | null;
  alt?: string | null;
};

/** Resolve Storyblok asset or local public path for images during migration. */
export function resolveImageSrc(
  asset?: AssetField | null,
  fallbackPath?: string
): string {
  if (asset?.filename) {
    return asset.filename;
  }
  if (fallbackPath) {
    return fallbackPath.startsWith("/") ? fallbackPath : `/${fallbackPath}`;
  }
  return "";
}

export function resolveImageAlt(
  asset?: AssetField | null,
  fallbackAlt?: string
): string {
  return asset?.alt || fallbackAlt || "";
}

export function blokImage(
  blok: SbBlokData,
  assetKey = "image",
  pathKey = "image_path"
) {
  const asset = blok[assetKey] as AssetField | undefined;
  const path = blok[pathKey] as string | undefined;
  return {
    src: resolveImageSrc(asset, path),
    alt: resolveImageAlt(asset, blok.image_alt as string | undefined),
  };
}
