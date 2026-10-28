"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { copy, cv, type Locale } from "@/content/site";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const t = copy[locale];
  const other = locale === "en" ? "it" : "en";
  const translated = pathname.replace(/^\/(en|it)(?=\/|$)/, `/${other}`);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="header wrap">
    <Link href={`/${locale}`} className="wordmark" aria-label="g? — Giuseppe Coppolecchia — home">g<span aria-hidden="true">?</span></Link>
    <nav aria-label={locale === "it" ? "Navigazione principale" : "Main navigation"} className="desktop-nav">
      <Link href={`/${locale}#work`}>{t.work}</Link><Link href={`/${locale}#about`}>{t.about}</Link><Link href={`/${locale}#quick`}>{t.quick}</Link>
      <a href={cv[locale]} download>{t.cv}<span className="sr-only"> ({t.cvDetails})</span></a>
    </nav>
    <div className="header-actions"><div className="languages" aria-label={locale === "it" ? "Lingua" : "Language"}><span aria-current="true">{locale.toUpperCase()}</span><span aria-hidden="true">/</span><Link href={translated} hrefLang={other} lang={other} aria-label={other === "it" ? "IT — Passa all'italiano" : "EN — Switch to English"}>{other.toUpperCase()}</Link></div><Link className="contact-nav" href={`/${locale}#contact`}>{t.contact}<span aria-hidden="true">↗</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? t.close : t.menu}<span aria-hidden="true">{open ? "−" : "+"}</span></button></div>
    <nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label={locale === "it" ? "Navigazione mobile" : "Mobile navigation"}>{[["work", t.work], ["about", t.about], ["quick", t.quick], ["contact", t.contact]].map(([id, label]) => <Link key={id} href={`/${locale}#${id}`} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}<a href={cv[locale]} download onClick={() => setOpen(false)}>{t.cv}<span className="sr-only"> ({t.cvDetails})</span><span aria-hidden="true">↓</span></a></nav>
  </header>;
}
