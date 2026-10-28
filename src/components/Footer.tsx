import Link from "next/link";
import { copy, profile, type Locale } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <footer className="footer wrap"><Link href={`/${locale}`} className="footer-name">Giuseppe Coppolecchia<span>{t.footer}</span></Link><span>© {new Date().getFullYear()}</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub<span className="sr-only"> ({locale === "it" ? "nuova scheda" : "new tab"})</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> ({locale === "it" ? "nuova scheda" : "new tab"})</span></a><a href="#main" aria-label={locale === "it" ? "Torna in alto" : "Back to top"}>↑</a></div></footer>;
}
