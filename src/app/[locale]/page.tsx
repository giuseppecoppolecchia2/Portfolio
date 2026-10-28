import Link from "next/link";
import { notFound } from "next/navigation";
import { copy, cv, isLocale, profile } from "@/content/site";
import { projects } from "@/content/projects";
import { Trail } from "@/components/Trail";
import { ProjectCover } from "@/components/ProjectCover";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) return {}; return pageMetadata(locale); }

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  return <main id="main">
    <section className="hero wrap" aria-labelledby="hero-heading">
      <div className="hero-id"><span>Giuseppe Coppolecchia</span><span>{t.role}</span></div>
      <h1 id="hero-heading" className="hero-heading">Follow<br /><span className="hero-last">the why<span className="why-mark" aria-hidden="true">?</span></span></h1>
      <Link className="hero-question" href={`/${locale}/projects/care-workspace`}><span>{locale === "it" ? "Una domanda dal mio lavoro" : "A question from my work"}</span><span>{locale === "it" ? "Accoglienza e riservatezza. Come farle convivere?" : "Welcoming and private. How can a website be both?"}</span><span aria-hidden="true">↗</span></Link>
      <div className="hero-bottom"><div className="hero-thesis"><p>{t.heroTop}<br />{t.heroBottom}</p><svg className="thread" viewBox="0 0 240 70" fill="none" aria-hidden="true"><path d="M2 14C50 14 46 62 94 62S134 8 173 8c35 0 17 42 45 42h18"/><path d="m228 42 9 8-9 8"/></svg></div><div className="hero-copy"><p>{t.intro}</p><div className="hero-ctas"><Link href="#work" className="button">{t.explore}<span aria-hidden="true">↗</span></Link><Link href="#contact" className="text-link">{t.contact}<span aria-hidden="true">↗</span></Link></div></div></div>
      <a href="#trail" className="hero-scroll"><span>{t.scroll}</span><span aria-hidden="true">↓</span></a>
    </section>
    <div id="trail"><Trail locale={locale}/></div>
    <section id="work" className="work wrap" aria-labelledby="work-heading"><div className="section-heading"><p>{t.selectedNote}<span aria-hidden="true">(01—03)</span></p><h2 id="work-heading">{t.selected}</h2></div>
      <div className="project-list">{projects.map(project => { const s = project.stories[locale]; return <article key={project.slug} className="project-row"><Link href={`/${locale}/projects/${project.slug}`} className="project-visual"><ProjectCover theme={project.theme} locale={locale}/><span className="project-open" aria-hidden="true">↗</span></Link><div className="project-info"><span className="project-number">/{project.number}</span><div><p className="project-category">{s.category}</p><h3><Link href={`/${locale}/projects/${project.slug}`}>{s.name}</Link></h3><p className="project-summary">{s.summary}</p><span className="project-tech">{project.technologies.slice(0,3).join(" / ")}</span><Link href={`/${locale}/projects/${project.slug}`} className="text-link">{t.read}<span aria-hidden="true">↗</span></Link></div></div></article>; })}</div>
    </section>
    <section className="thinking" aria-labelledby="thinking-heading"><div className="wrap"><h2 id="thinking-heading">{t.thinking}</h2><div className="principles">{t.principles.map((principle, i) => <article key={principle.slug}><span aria-hidden="true">0{i+1}</span><h3>{principle.title}</h3><p>{principle.text}</p><Link href={`/${locale}/projects/${principle.slug}`} className="text-link">{projects[i].stories[locale].name}<span aria-hidden="true">↗</span></Link></article>)}</div></div></section>
    <section id="about" className="about wrap" aria-labelledby="about-heading"><div className="about-top"><h2 id="about-heading">{t.aboutTitle}</h2><div><p className="about-intro">{t.aboutText}</p><div className="outside"><span className="outside-symbol" aria-hidden="true">✳</span><div><h3>{t.outside}</h3><p>{t.outsideText}</p></div></div></div></div><ol className="timeline">{t.timeline.map(item => <li key={item.date}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.place}</p></div></li>)}</ol></section>
    <section id="quick" className="quick wrap" aria-labelledby="quick-heading"><div><p>{t.quick}</p><h2 id="quick-heading">{t.snapshot}</h2><p className="quick-intro">{t.snapshotText}</p><a className="button cv-download" href={cv[locale]} download>{t.downloadCv}<span aria-hidden="true">↓</span></a><span className="cv-details">{t.cvDetails}</span></div><div className="quick-details"><dl>{[[t.skills[0], "React / JavaScript / HTML / CSS / Tailwind"], [t.skills[1], "PHP / Laravel / MySQL / Supabase / REST API"], [t.skills[2], "Git / GitHub / Agile / Scrum / Debugging"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p>{t.education}</p><p>{t.languages}</p><a className="text-link" href={profile.github}>GitHub<span aria-hidden="true">↗</span></a></div></section>
    <section id="contact" className="contact wrap" aria-labelledby="contact-heading"><span className="contact-mark" aria-hidden="true">?</span><h2 id="contact-heading">{t.contactTitle}</h2><div className="contact-bottom"><p>{t.contactText}</p><a className="button" href={profile.linkedin}>{t.linkedin}<span aria-hidden="true">↗</span></a></div></section>
  </main>;
}
