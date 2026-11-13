import Link from "next/link";
import Image from "next/image";
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
      <div className="hero-copy">
        <h1 id="hero-heading" className="hero-heading">Follow<br /><span className="hero-last">the why<span className="why-mark">?</span></span></h1>
        <div className="hero-id"><strong>{profile.name}</strong><span>{t.role}</span></div>
        <p>{t.intro}</p>
        <div className="hero-ctas">
          <Link href="#work" className="button">{t.explore}<span aria-hidden="true">↓</span></Link>
          <a href={cv[locale]} className="text-link" download>{t.downloadCv}</a>
        </div>
      </div>
      <div className="hero-person">
        <div className="portrait-frame">
          <Image src="/media/giuseppe-coppolecchia.webp" width={768} height={768} sizes="(max-width: 480px) calc(100vw - 44px), (max-width: 900px) 42vw, 420px" preload alt={locale === "it" ? "Ritratto di Giuseppe Coppolecchia" : "Portrait of Giuseppe Coppolecchia"} />
        </div>
        <Link className="hero-question text-link" href={`/${locale}/projects/care-workspace`}>
          {locale === "it" ? "Come far convivere accoglienza e riservatezza?" : "How can a website feel welcoming and protect privacy?"}<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
    <section id="work" className="work wrap" aria-labelledby="work-heading">
      <div className="section-heading"><h2 id="work-heading">{t.selected}</h2></div>
      <div className="project-list">
        {projects.map(project => {
          const story = project.stories[locale];
          const href = `/${locale}/projects/${project.slug}`;
          return <article key={project.slug} className="project-row">
            <Link href={href} className="project-visual" aria-label={`${t.read}: ${story.name}`}>
              <ProjectCover theme={project.theme} locale={locale} />
              <span className="project-open" aria-hidden="true">↗</span>
            </Link>
            <div className="project-info">
              <h3>{story.name}</h3>
              <p className="project-category">{story.category}</p>
              <p className="project-summary">{story.question}</p>
              <span className="project-tech">{project.technologies.slice(0, 3).join(" / ")}</span>
              <Link href={href} className="text-link">{t.read}<span className="sr-only">: {story.name}</span><span aria-hidden="true">↗</span></Link>
            </div>
          </article>;
        })}
      </div>
    </section>
    <div id="trail"><Trail locale={locale}/></div>
    <section className="thinking" aria-labelledby="thinking-heading"><div className="wrap"><h2 id="thinking-heading">{t.thinking}</h2><div className="principles">{t.principles.map(principle => {
      const project = projects.find(project => project.slug === principle.slug);
      return <article key={principle.slug}>
        <h3>{principle.title}</h3><p>{principle.text}</p>
        {project && <Link href={`/${locale}/projects/${project.slug}`} className="text-link">{project.stories[locale].name}<span aria-hidden="true">↗</span></Link>}
      </article>;
    })}</div></div></section>
    <section id="about" className="about wrap" aria-labelledby="about-heading">
      <div className="about-top">
        <h2 id="about-heading">{t.aboutTitle}</h2>
        <div><p className="about-intro">{t.aboutText}</p><div className="outside"><div><h3>{t.outside}</h3><p>{t.outsideText}</p></div></div></div>
      </div>
      <ol className="timeline">{t.timeline.map(item => <li key={item.date}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.place}</p></div></li>)}</ol>
    </section>
    <section id="quick" className="quick wrap" aria-labelledby="quick-heading"><div><p>{t.quick}</p><h2 id="quick-heading">{t.snapshot}</h2><p className="quick-intro">{t.snapshotText}</p><a className="button cv-download" href={cv[locale]} download>{t.downloadCv}<span aria-hidden="true">↓</span></a><span className="cv-details">{t.cvDetails}</span></div><div className="quick-details"><dl>{[[t.skills[0], "React / JavaScript / HTML / CSS / Tailwind"], [t.skills[1], "PHP / Laravel / MySQL / Supabase / REST API"], [t.skills[2], "Git / GitHub / Agile / Scrum / Debugging"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p>{t.education}</p><p>{t.languages}</p><a className="text-link" href={profile.github}>GitHub<span aria-hidden="true">↗</span></a></div></section>
    <section id="contact" className="contact wrap" aria-labelledby="contact-heading"><h2 id="contact-heading">{t.contactTitle}</h2><div className="contact-bottom"><p>{t.contactText}</p><a className="button" href={profile.linkedin}>{t.linkedin}<span aria-hidden="true">↗</span></a></div></section>
  </main>;
}
