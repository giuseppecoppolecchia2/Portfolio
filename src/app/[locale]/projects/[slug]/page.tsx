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
  const { locale, slug } = await params; const index = projects.findIndex(p => p.slug === slug); const p = projects[index];
  if (!isLocale(locale) || !p) notFound();
  const t = copy[locale], s = p.stories[locale], next = projects[(index + 1) % projects.length];
  return <main id="main" className="case wrap"><Link className="text-link case-back" href={`/${locale}#work`}><span aria-hidden="true">←</span>{t.back}</Link><div className="case-heading"><p>{t.project} {p.number} / {s.category}</p><h1>{s.headline}</h1><div className="case-intro"><h2>{s.name}</h2><p>{s.summary}</p></div></div><ProjectCover theme={p.theme} locale={locale}/><div className="case-body"><aside className="case-tools"><h2>{t.stack}</h2><ul>{p.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>{p.repoUrl && <a className="text-link" href={p.repoUrl}>GitHub<span aria-hidden="true">↗</span></a>}{p.liveVerified && p.liveUrl && <a className="text-link" href={p.liveUrl}>{locale === "it" ? "Visita il sito" : "View live site"}<span aria-hidden="true">↗</span></a>}</aside><div className="case-story"><section><p className="case-label">01 / {t.question}</p><h2>{s.question}</h2></section><section><h2>{p.slug === "prestissimo" ? (locale === "it" ? "Il progetto" : "The project") : t.built}</h2><ul className="contributions">{s.contributions.map(text => <li key={text}>{text}</li>)}</ul></section><section><h2>{t.decisions}</h2>{s.decisions.map((d,i) => <article className="decision" key={d.title}><span aria-hidden="true">0{i+1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></article>)}</section><section><h2>{t.outcome}</h2><p>{s.outcome}</p></section><section className="case-discussion"><p>{t.discuss}</p><h2>{s.discussion}</h2><Link className="text-link" href={`/${locale}#contact`}>{t.contact}<span aria-hidden="true">↗</span></Link></section></div></div><Link className="next-project" href={`/${locale}/projects/${next.slug}`}><span>{t.next}</span><span>{next.stories[locale].name}</span><span aria-hidden="true">↗</span></Link></main>;
}
