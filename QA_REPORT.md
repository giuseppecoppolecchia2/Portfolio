# Verifica — FOLLOW THE WHY

## Aggiornamento: CV italiano e inglese

PDF forniti da Giuseppe, entrambi di una pagina. Create copie web in `public/cv/`: rimossa realmente la riga contenente il telefono e ricomposta senza numero; mantenuti email, località e restante contenuto. Originali non modificati. Riaperti i PDF, verificati testo selezionabile, assenza del numero nel testo estraibile e assenza di collegamenti `tel:`, renderizzate e controllate entrambe le pagine finali. Rimossi metadati originali dalle copie web.

Aggiunti download nell'header desktop, nel menu mobile e nella sezione recruiter. `scripts/cv-qa.txt` ha verificato risposte HTTP 200 con MIME PDF, download effettivi e nomi file, corrispondenza IT/EN, chiusura del menu dopo il download e assenza di overflow a 320, 390, 768 e 1440px. Lint, TypeScript e build passati. Screenshot della sezione: `output/playwright/cv-it-desktop.png` e `cv-en-desktop.png`. Nessuna nuova misurazione Lighthouse per questa modifica.

## Aggiornamento: dark e screenshot autentici

Successiva scelta immagini: Ohara usa la schermata di benvenuto allegata da Giuseppe (2464×1264); Prestissimo usa `screenshots/Detail.png` dal repository (2498×1283). I file hanno nuovi nomi per evitare la cache delle anteprime precedenti; dimensioni e alt IT/EN aggiornati.

Revisione del 28 ottobre 2026 autorizzata da Giuseppe: tema dark, nome e link pubblico della Dott.ssa Rosanna Mininni, screenshot autentici di tutti e tre i progetti. Nessuna area amministrativa visitata. Le precedenti note sull'anonimizzazione e le copertine editoriali sotto descrivono la prima iterazione.

Ripetuti con successo lint, TypeScript, build di produzione e i 125 assert Playwright. Verifica visiva desktop 1440px e mobile 390px: nome, anteprime e testo senza overflow. Lighthouse mobile `/it` aggiornato: Performance 100, Accessibility 100, Best Practices 100, SEO 100; nessun audit binario fallito. Report: `output/playwright/lighthouse-dark-it.json`. Screenshot: `dark-projects-desktop.png`, `dark-projects-mobile.png`. I risultati Lighthouse EN sotto si riferiscono alla precedente iterazione chiara; non sono stati rimisurati per questa revisione.

Fonti delle immagini in `public/media/projects/SOURCES.md`. Le conversioni WebP conservano l'immagine reale. Il dominio e la homepage pubblica della professionista sono ora autorizzati; email e CV personali di Giuseppe non sono stati aggiunti.

Data: 28 ottobre 2026. Ambiente: Windows, Node.js 24.16.0, Next.js 16.4.3, React 19.3.1, TypeScript 5.9.3, Tailwind CSS 4.3.3. Build di produzione servita su http://127.0.0.1:3001.

## Esiti

| Controllo | Esito |
| --- | --- |
| `npm run lint` | Pass, nessun warning |
| `npm run typecheck` | Pass |
| `npm run build` | Pass, 2 home + 6 case study prerenderizzati |
| Playwright CLI | 125 assert passati sulla versione definitiva |
| JavaScript disattivato | Home leggibile, Trail selezionabile e navigazione al case study, IT/EN |
| Tastiera | Skip link iniziale, radio con frecce, menu con Esc e ripristino focus |
| Reduced motion | Animazione Trail disattivata |
| Hallmark sloplint con render Chromium | 0 FAIL, 0 WARN; 2 deroghe motivate, 1 risposta e 8 segnalazioni di misura respinte dopo controllo |
| Review codice indipendente | Nessun finding aperto dopo correzione dello slug sanitario |
| Review visiva indipendente | Corretto overlap del segno corallo nei contatti su mobile |

### Lighthouse mobile

Audit di navigazione con throttling mobile simulato sulla build ottimizzata, non sul dev server.

| Pagina | Performance | Accessibility | Best Practices | SEO | LCP laboratorio | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| `/en` | 100 | 100 | 100 | 100 | 0,8 s | 0 |
| `/it` | 100 | 100 | 100 | 100 | 0,8 s | 0 |

Report JSON originali: `output/playwright/lighthouse-en.json`, `output/playwright/lighthouse-it.json`. Il controllo aggiuntivo `label-content-name-mismatch` è passato dopo aver corretto monogramma, selettore lingua e semantica delle copertine. Le misure sono locali e non garantiscono Core Web Vitals reali o risultati su Vercel. Nessuna misura di INP al 75° percentile: serve traffico reale.

## Copertura browser

Home italiana e inglese a 320, 375, 390, 768, 1280 e 1440px; screenshot Hallmark anche a 1920px. Nome, ruolo junior, un solo h1, lingua HTML, assenza di overflow e CTA nella prima viewport verificati con assert. I sei case study verificati a 390px, con cambio lingua effettivo sulla stessa storia.

Controllati redirect `/` → `/en`, quattro URL non validi con HTTP 404, collegamenti interni, sitemap, robots, icona e OG in entrambe le lingue. Nessun errore JavaScript runtime nel flusso; gli errori HTTP dei test 404 sono attesi.

Schermate finali:

- `output/playwright/final-desktop-it.png` e `final-mobile-it.png`.
- `output/playwright/home-{en,it}-{390,768,1440}.png`, pagina completa.
- `output/playwright/case-{en,it}-{care-workspace,ohara,prestissimo}-390.png`, pagina completa.
- `.hallmark/shots/127.0.0.1-3001-en-*`, fold desktop e pagina completa mobile.

Le schermate precedenti al fix dello slug restano artefatti locali ignorati da Git e deploy; usare i file con `care-workspace` per il risultato definitivo.

WebKit non disponibile: apertura tentata, runtime non installato (`webkit-2368/Playwright.exe` mancante). Nessuna verifica Safari, device fisico o screen reader dichiarata. Controllo contrasto automatico Lighthouse passato; non è una certificazione WCAG.

## Progetti esterni e privacy

GitHub Ohara e Prestissimo: HTTP 200. Le due demo inizialmente non erano accessibili dallo strumento web; un controllo successivo con browser/request ha restituito HTTP 200. Ohara è stata aperta nel browser: catalogo, ricerca e link ai generi presenti, zero errori console al caricamento (due warning). Link live aggiunto; nessun accesso ad account, modifica di dati o verifica delle funzionalità autenticate.

Il sito sanitario risponde, ma nome, dominio, screenshot e identificatori del cliente restano esclusi dal sito. La route è `/projects/care-workspace`. Non sono state aperte aree amministrative. Non sono pubblicati email, telefono, PDF CV, pazienti, dati clinici o credenziali. Le copertine sono dichiaratamente editoriali e non screenshot. Prestissimo non è presentato come prodotto commerciale, né vengono attribuiti tutti i contributi esclusivamente a Giuseppe.

Lezioni personali, KPI, feedback e risultati commerciali non documentati sono omessi. Nessun analytics o cookie di tracciamento aggiunto.

## Ripetere i controlli

In un terminale: `npm run build`, poi `npm run start -- --port 3001`.

```powershell
npx --yes --package @playwright/cli playwright-cli open http://127.0.0.1:3001/en
npx --yes --package @playwright/cli playwright-cli run-code --filename=scripts/browser-qa.txt
npx --yes --package @playwright/cli playwright-cli run-code --filename=scripts/browser-extra-qa.txt
npx --yes lighthouse http://127.0.0.1:3001/en --output=json --output-path=output/playwright/lighthouse-en.json --chrome-flags="--headless --no-sandbox" --quiet
```

Playwright CLI richiede un browser supportato. Lo script QA aggiuntivo verifica anche quattro URL esterni in sola lettura. L'opzione `--no-sandbox` qui riguarda esclusivamente Chrome di test locale, non il sito distribuito.

## Prima del deploy

Approvare copy, contatti, eventuale CV e materiali cliente. Impostare `SITE_URL` sul dominio effettivo e verificare canonical, hreflang, sitemap e OG dopo il deploy. Repository GitHub da tenere privato finché i documenti sorgente non siano ripuliti. Nessun deploy o autenticazione Vercel effettuati in questa sessione.
