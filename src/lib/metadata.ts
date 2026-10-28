import type { Metadata } from "next";
import { siteUrl, type Locale } from "@/content/site";

export function pageMetadata(locale: Locale, path = "", title?: string, description?: string): Metadata {
  const heading = title ? `${title} — Giuseppe Coppolecchia` : "Giuseppe Coppolecchia — Follow the Why";
  const desc = description || (locale === "it" ? "Junior Frontend / Full-Stack Developer. React, curiosità e attenzione alle persone. Scopri i miei progetti e il mio percorso." : "Junior Frontend / Full-Stack Developer. React, curiosity, and people in mind. Explore my projects and the thinking behind them.");
  return {
    metadataBase: new URL(siteUrl), title: heading, description: desc,
    alternates: { canonical: `/${locale}${path}`, languages: { en: `/en${path}`, it: `/it${path}`, "x-default": `/en${path}` } },
    openGraph: { title: heading, description: desc, url: `/${locale}${path}`, siteName: "Follow the Why", type: "website", locale: locale === "it" ? "it_IT" : "en_GB", alternateLocale: locale === "it" ? "en_GB" : "it_IT", images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: heading }] },
    twitter: { card: "summary_large_image", title: heading, description: desc, images: [`/${locale}/opengraph-image`] },
    robots: { index: true, follow: true },
  };
}
