import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/content/site";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap { return locales.flatMap(locale => ["", ...projects.map(p => `/projects/${p.slug}`)].map(path => ({ url: `${siteUrl}/${locale}${path}`, alternates: { languages: { en: `${siteUrl}/en${path}`, it: `${siteUrl}/it${path}` } } }))); }
