# Giuseppe Coppolecchia — FOLLOW THE WHY

Il mio portfolio personale: progetti, percorso e domande che guidano il mio modo di sviluppare per il web. Sono un **Junior Frontend / Full-Stack Developer**, con una base React e competenze PHP/Laravel e Supabase.

**[Visita il portfolio in italiano](https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app/it)** · **[Explore in English](https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app/en)**

[LinkedIn](https://www.linkedin.com/in/giuseppe-coppolecchia-dev) · [GitHub](https://github.com/giuseppecoppolecchia2)

## Il concept

**FOLLOW THE WHY** racconta un approccio curioso e concreto: capire non soltanto come risolvere un problema, ma perché esiste. Un design editoriale dark, tipografia ampia e una linea della curiosità accompagnano due percorsi: una sintesi rapida per recruiter e approfondimenti sui progetti.

Il **Curiosity Trail** permette di esplorare quattro tappe — osservare, chiedersi, capire, costruire — attraverso controlli HTML nativi, utilizzabili anche senza JavaScript.

## Cosa trovi nel sito

- Homepage italiana e inglese con cambio lingua che conserva il case study corrente.
- Tre case study, ciascuno con domanda iniziale, implementazione, scelte tecniche e risultato documentato.
- Screenshot autentici dei progetti, ottimizzati in WebP e serviti con `next/image`.
- Percorso personale, formazione, interessi e sintesi “In 30 secondi”.
- CV italiano e inglese scaricabili dall'header, dal menu mobile e dalla sintesi recruiter.
- Navigazione da tastiera, skip link, focus visibile e supporto a `prefers-reduced-motion`.
- Metadata localizzati, canonical, hreflang, sitemap, robots e immagini Open Graph.

## Progetti raccontati

| Progetto | Tema del case study | Approfondimento |
| --- | --- | --- |
| Dott.ssa Rosanna Mininni | Sito pubblico accogliente e spazio di lavoro riservato, con React e Supabase | [Case study](https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app/it/projects/care-workspace) · [Sito pubblico](https://www.psicologamininni.com) |
| Ohara | Scoperta di videogiochi, profili e preferiti con React, RAWG e Supabase | [Case study](https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app/it/projects/ohara) · [Demo](https://ohara-blush.vercel.app) · [Repository](https://github.com/giuseppecoppolecchia2/Ohara) |
| Prestissimo | Progetto marketplace di vinili, con PHP/Laravel, ricerca e accesso per ruoli | [Case study](https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app/it/projects/prestissimo) · [Repository](https://github.com/giuseppecoppolecchia2/Prestissimo) |

Per Ohara è utilizzata la schermata di benvenuto scelta dal proprietario; per Prestissimo, lo screenshot originale `screenshots/Detail.png`. Il progetto sanitario mostra esclusivamente la homepage pubblica. Provenienza delle immagini in [SOURCES.md](public/media/projects/SOURCES.md).

## Stack del portfolio

**Next.js App Router · React · TypeScript strict · Tailwind CSS · CSS personalizzato**

I contenuti principali sono renderizzati dal server e le otto pagine di contenuto sono prerenderizzate. L'header usa JavaScript per menu e selettore lingua. Il font Reddit Sans è servito localmente tramite `next/font`.

Next.js e TypeScript descrivono le tecnologie utilizzate per questo portfolio; non sono presentati automaticamente come esperienza professionale pregressa. Non sono richiesti database, CMS, chiavi API o servizi di autenticazione per eseguire il sito.

## Avvio locale

Richiede **Node.js 24.x** e npm.

```bash
npm ci
npm run dev
```

Apri [Italiano](http://127.0.0.1:3000/it) oppure [English](http://127.0.0.1:3000/en). La root `/` reindirizza a `/en`.

Per verificare ed eseguire la build di produzione:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Il font viene scaricato durante la prima compilazione: è necessaria una connessione durante la build, mentre i visitatori non effettuano richieste a Google Fonts.

## Contenuti e struttura

| Percorso | Cosa modificare |
| --- | --- |
| `src/content/site.ts` | Copy IT/EN, profilo, link e associazione lingua/CV |
| `src/content/projects.ts` | Testi dei case study, tecnologie, screenshot e link verificati |
| `src/components/` | Header, footer, Curiosity Trail e anteprime progetto |
| `src/app/[locale]/` | Homepage, case study e immagini Open Graph |
| `src/lib/metadata.ts` | SEO e metadati per pagina |
| `tokens.css` | Colori, font, misure e spazi di base |
| `src/app/globals.css` | Layout, responsive e microinterazioni |
| `public/media/projects/` | Screenshot WebP e note sulle fonti |
| `public/cv/` | Copie web dei CV IT/EN, senza telefono |
| `scripts/` | Controlli browser riproducibili con Playwright CLI |

## Deploy su Vercel

Il sito è pubblicato su Vercel. Il file `vercel.json` imposta **Next.js**, `npm run build` e output `.next`, evitando l'uso del preset Node.js generico.

Per un nuovo deployment:

1. Importa il repository GitHub e seleziona il branch `main`.
2. Mantieni la **Root Directory sulla root del repository**, dove si trovano `package.json` e `vercel.json`.
3. Usa Node.js **24.x**.
4. Imposta `SITE_URL` nell'ambiente Production con l'origine HTTPS effettiva, senza percorso e senza slash finale:

   ```text
   SITE_URL=https://portfolio-ruddy-chi-8ox0ecdg52.vercel.app
   ```

5. Esegui il deploy dell'ultimo commit. Se modifichi `SITE_URL`, ricompila tramite un nuovo deployment.

Se `SITE_URL` non è impostata, il codice usa `VERCEL_PROJECT_PRODUCTION_URL` quando disponibile. In locale il fallback è `http://localhost:3000`; `.env.example` documenta la configurazione.

Con un dominio personalizzato, aggiorna `SITE_URL` e verifica nuovamente canonical, hreflang, sitemap e immagini social. Non occorrono credenziali dei progetti presentati nei case study.

## Verifiche

Sono stati eseguiti lint, controllo TypeScript, build di produzione, controlli Playwright su desktop/mobile e download reali dei CV IT/EN. I test includono navigazione da tastiera, menu, cambio lingua, caricamento immagini, movimento ridotto e pagine non trovate.

L'audit Lighthouse mobile locale della home italiana dark ha misurato **100** per Performance, Accessibility, Best Practices e SEO. Questi risultati riguardano il test locale documentato e non costituiscono una misurazione del dominio pubblico né una certificazione di accessibilità. Safari/WebKit e dispositivi fisici non sono stati verificati.

Dettagli e limiti in [QA_REPORT.md](QA_REPORT.md). Riferimenti e decisioni visive in [DESIGN_RATIONALE.md](DESIGN_RATIONALE.md).

## Contenuti pubblici e privacy

Le copie web dei CV mantengono il testo selezionabile e l'email fornita, senza numero di telefono. Gli originali personali restano fuori dal repository. Non sono incluse schermate amministrative, informazioni cliniche o credenziali.

`.gitignore` esclude dipendenze, build, variabili d'ambiente locali, file temporanei, documenti di pianificazione e originali in `assets/source/`. `.vercelignore` esclude inoltre gli artefatti di lavoro dal caricamento tramite Vercel CLI. Le immagini dei videogiochi e dei vinili presenti negli screenshot appartengono ai rispettivi titolari.
