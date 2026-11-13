import Link from "next/link";
import { notFound } from "next/navigation";
import { copy, isLocale } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; const p = projects.find(p => p.slug === slug);
  if (!isLocale(locale) || !p) return {};
  return pageMetadata(locale, `/projects/${slug}`, p.stories[locale].name, p.stories[locale].summary);
}
export default async function CaseStudy({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  const project = projects[index];
  if (!isLocale(locale) || !project) notFound();

  const t = copy[locale];
  const story = project.stories[locale];
  const next = projects[(index + 1) % projects.length];
  const contributionTitle = slug === "prestissimo" ? (locale === "it" ? "Il progetto" : "The project") : t.built;
  const sections = [
    ["question", t.question],
    ["contributions", contributionTitle],
    ["decisions", t.decisions],
    ["outcome", t.outcome],
  ];

  return <main id="main" className="case wrap">
    <Link className="text-link case-back" href={`/${locale}#work`}><span aria-hidden="true">←</span>{t.back}</Link>
    <header className="case-heading">
      <h1>{story.name}</h1>
      <div className="case-intro">
        <p>{story.headline}</p>
        <div>
          <p>{story.summary}</p>
          <div className="case-links">
            {project.liveVerified && project.liveUrl && <a className="button" href={project.liveUrl}>{locale === "it" ? "Visita il sito" : "View live site"}<span aria-hidden="true">↗</span></a>}
            {project.repoUrl && <a className="text-link" href={project.repoUrl}>GitHub<span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </div>
    </header>
    <ProjectCover theme={project.theme} locale={locale} />
    <div className="case-body">
      <aside className="case-tools">
        <nav aria-label={locale === "it" ? "Indice del progetto" : "Case study contents"}>
          <ul className="case-index">{sections.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ul>
        </nav>
        <h2>{t.stack}</h2>
        <ul className="case-stack">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      </aside>
      <div className="case-story">
        <section id="question" className="case-question"><h2>{t.question}</h2><p>{story.question}</p></section>
        <section id="contributions"><h2>{contributionTitle}</h2><ul className="contributions">{story.contributions.map(line => <li key={line}>{line}</li>)}</ul></section>
        <section id="decisions">
          <h2>{t.decisions}</h2>
          {story.decisions.map(decision => <article className="decision" key={decision.title}><h3>{decision.title}</h3><p>{decision.text}</p></article>)}
        </section>
        <section id="outcome"><h2>{t.outcome}</h2><p>{story.outcome}</p></section>
        <section className="case-discussion"><p>{t.discuss}</p><h2>{story.discussion}</h2><Link className="text-link" href={`/${locale}#contact`}>{t.contact}<span aria-hidden="true">↗</span></Link></section>
      </div>
    </div>
    <Link className="next-project" href={`/${locale}/projects/${next.slug}`}><span>{t.next}</span><span>{next.stories[locale].name}</span><span aria-hidden="true">↗</span></Link>
  </main>;
}
