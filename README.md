# Giuseppe Coppolecchia — FOLLOW THE WHY

Portfolio bilingue Next.js App Router, React, TypeScript strict e Tailwind CSS. Tema dark, screenshot autentici dei tre progetti, homepage IT/EN, Curiosity Trail senza JavaScript, tre case study per lingua, metadata localizzati, sitemap, robots e immagini Open Graph.

## Avvio locale

Richiede Node.js 24 LTS e npm.

```powershell
npm ci
npm run dev
```

Apri http://127.0.0.1:3000/it oppure http://127.0.0.1:3000/en. La root reindirizza all'inglese. La lingua è esplicita nell'URL e cambia conservando il case study.

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

Il font viene scaricato durante sviluppo/build e servito localmente ai visitatori, senza richieste a Google Fonts dal browser. È necessaria rete durante la prima compilazione.

## Dove modificare il sito

| File | Contenuto |
| --- | --- |
| `src/content/site.ts` | Testi IT/EN, profilo, link pubblici e configurazione URL |
| `src/content/projects.ts` | Case study bilingui, stack, repository e stato delle demo |
| `src/components/ProjectCover.tsx` | Screenshot responsive con next/image; fonti in `public/media/projects/SOURCES.md` |
| `tokens.css` | Palette, font, spazi e misure di base |
| `src/app/globals.css` | Layout, responsive, stati e motion |
| `src/lib/metadata.ts` | SEO e social per pagina |

## Contenuti da approvare o completare

- CV italiano e inglese disponibili in `public/cv/`, senza telefono e con testo selezionabile. Link nell'header, nel menu mobile e in “In 30 secondi”; associazione lingua/PDF in `src/content/site.ts`. L'email già presente nei CV forniti è mantenuta nei PDF; il contatto principale del sito resta LinkedIn.
- Nome della Dott.ssa Rosanna Mininni e screenshot della homepage pubblica autorizzati. Non aggiungere dashboard o dati clinici. Il percorso `/projects/care-workspace` resta stabile per conservare i link esistenti.
- Contributi individuali/coautori e riflessioni personali sui progetti. Lezioni e risultati non documentati sono omessi.
- Eventuali altri screenshot e ritratto personale. Sono già presenti tre screenshot autentici autorizzati: due catture dei siti pubblici e il catalogo Prestissimo dal repository originale.
- Dominio finale e approvazione del copy personale in entrambe le lingue.

Non aggiungere il telefono del CV o informazioni sanitarie al codice pubblico. `assets/source/` è esclusa da Git e dal deploy; contiene eventuali documenti privati solo in locale. Prima di caricare su GitHub usa un repository **privato**: PLAN.md e PROMPT_CODEX.md contengono dati personali e riferimenti da approvare. `.vercelignore` esclude questi documenti dal caricamento con Vercel CLI; l'importazione Git deve comunque avvenire da un repository privato o ripulito.

## Pubblicazione su Vercel

`vercel.json` fissa esplicitamente il framework Next.js, il comando di build e l'output `.next`, evitando che un preset Node.js generico cerchi un entrypoint `main.ts` o `server.ts`. La Root Directory su Vercel deve essere la root del repository, dove si trovano `package.json` e `vercel.json`.

1. Approva i contenuti pubblici e carica il progetto in un repository GitHub privato. Se non è già un repository, inizializzalo e crea il primo commit.
2. In Vercel scegli **Add New → Project**, importa il repository e lascia il preset **Next.js**, root del progetto, comando `npm run build` e output automatico.
3. Imposta Node.js **24.x** e la variabile `SITE_URL` con l'origine HTTPS finale, senza slash conclusivo, per esempio il dominio assegnato da Vercel. Non occorrono segreti o servizi backend.
4. Avvia il deploy. Se inizialmente non conosci il dominio, Vercel può fornire `VERCEL_PROJECT_PRODUCTION_URL`; poi imposta esplicitamente `SITE_URL` e fai **Redeploy**.
5. Verifica `/en`, `/it`, i sei case study, `/sitemap.xml`, `/robots.txt` e le immagini `/{locale}/opengraph-image`. Controlla canonical e hreflang sul dominio finale.
6. Se hai un dominio, aggiungilo in **Settings → Domains** e segui i record DNS indicati da Vercel. Aggiorna `SITE_URL`, ricompila e verifica HTTPS.

Per una preview separata imposta un `SITE_URL` corrispondente alla preview se vuoi testarne i canonical. Vercel gestisce normalmente la non indicizzazione dei deployment di preview; controlla gli header effettivi prima di condividere.

Il portfolio è stato verificato in locale; non è stato pubblicato né collegato a un account Vercel. Misure e limiti dei controlli: `QA_REPORT.md`. Decisioni visive e riferimenti: `DESIGN_RATIONALE.md`.
