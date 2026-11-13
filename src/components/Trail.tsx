import Link from "next/link";
import { copy, type Locale } from "@/content/site";

export function Trail({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="trail wrap" aria-labelledby="trail-heading">
    <div className="section-intro"><h2 id="trail-heading">{t.trailTitle}</h2><p>{t.trailIntro}</p></div>
    <fieldset className="trail-control"><legend className="sr-only">{t.trailTitle}</legend>
      {t.steps.map((step, i) => <div className="trail-step" key={step.name}>
        <input type="radio" name="curiosity" id={`step-${i}`} defaultChecked={i === 0} aria-controls={`thought-${i}`} />
        <label htmlFor={`step-${i}`}>{step.name}</label>
        <div className="trail-panel" id={`thought-${i}`}>
          <h3>{step.title}</h3><p>{step.text}</p>
          {i === 3 && <Link className="text-link" href={`/${locale}/projects/care-workspace`}>{t.trailLink}<span aria-hidden="true">↗</span></Link>}
        </div>
      </div>)}
    </fieldset>
  </section>;
}
