export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.some((l) => l === value);
export const profile = {
  name: "Giuseppe Coppolecchia",
  github: "https://github.com/giuseppecoppolecchia2",
  linkedin: "https://www.linkedin.com/in/giuseppe-coppolecchia-dev",
};
export const siteUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
export const cv: Record<Locale, string> = {
  it: "/cv/Giuseppe-Coppolecchia-CV-IT.pdf",
  en: "/cv/Giuseppe-Coppolecchia-CV-EN.pdf",
};

export const copy = {
  en: {
    cv: "Résumé", downloadCv: "Download my résumé", cvDetails: "PDF / English",
    work: "Work", about: "About", contact: "Let's talk", quick: "In 30 seconds", skip: "Skip to content", menu: "Menu", close: "Close menu",
    role: "Junior Frontend / Full-Stack Developer",
    heroTop: "How it works is a start.", heroBottom: "Why is where I go next.",
    intro: "I'm Giuseppe. I build web experiences with React, a curious mind, and people in mind.",
    explore: "Explore my work", scroll: "A question worth following", trailTitle: "Good code starts with a better question.",
    trailIntro: "Follow a thought, from the first question to something useful.",
    steps: [
      { name: "Observe", title: "First, pay attention.", text: "Who will use this? What is getting in their way? Listening comes before opening the editor." },
      { name: "Ask why", title: "Look beyond the symptom.", text: "A feature is a starting point for a conversation. I want to understand the need behind it." },
      { name: "Understand", title: "Make the pieces connect.", text: "From the interface to the data, I break the problem down before choosing how to build." },
      { name: "Build", title: "Give the question a useful answer.", text: "An approachable public website and a separate private workspace: two needs, two carefully considered experiences." },
    ], trailLink: "See that thinking in practice", selected: "Three projects. Three different questions.", selectedNote: "Selected work", read: "Read the story", cover: "Editorial cover", project: "Project",
    thinking: "Curiosity is the common thread.", principles: [
      { title: "Ask better questions.", text: "A professional website and a private workspace serve different people. Their needs shape the architecture.", slug: "care-workspace" },
      { title: "Build for people.", text: "In Ohara, browsing a catalogue and keeping favourites connect discovery with a personal experience.", slug: "ohara" },
      { title: "Better together.", text: "Prestissimo connects full-stack development with a shared Git workflow. Listening belongs in the process.", slug: "prestissimo" },
    ], aboutTitle: "An engineering mindset. A very human approach.",
    aboutText: "My path took me from engineering studies to web development. I still like taking problems apart, understanding where they begin, and finding a practical way forward. I enjoy listening, sharing ideas, and building with others.",
    outside: "Away from the keyboard", outsideText: "Training, travelling, discovering new things. And three Jack Russells, who keep life interesting.",
    timeline: [{ date: "2026", title: "Frontend ReactJs specialisation", place: "Aulab Hackademy" }, { date: "2025–2026", title: "Junior Full Stack Web Developer training", place: "Aulab Hackademy — 400+ hours" }, { date: "2018–2024", title: "Mechanical / Industrial Engineering studies", place: "Politecnico di Bari / Unicusano" }],
    snapshot: "The short version.", snapshotText: "Looking for my next step as a junior frontend or full-stack developer.", skills: ["Interfaces", "Behind the scenes", "How I work"], education: "Aulab full-stack training + React specialisation", languages: "Italian (native) / English (B2)",
    contactTitle: "What's your next why?", contactText: "Got an interesting problem to solve? I'd love to hear about it.", linkedin: "Let's connect on LinkedIn", footer: "Built with curiosity.", back: "All projects", question: "The question", built: "What I built", decisions: "Why these choices", outcome: "The result", discuss: "A question to take further", stack: "Tools behind the experience", next: "Next story", home: "Back to the homepage", notFound: "This trail ends here.", notFoundText: "That page doesn't exist. There's more to discover back home.",
  },
  it: {
    cv: "CV", downloadCv: "Scarica il mio CV", cvDetails: "PDF / Italiano",
    work: "Progetti", about: "Chi sono", contact: "Parliamone", quick: "In 30 secondi", skip: "Vai al contenuto", menu: "Menu", close: "Chiudi menu",
    role: "Junior Frontend / Full-Stack Developer",
    heroTop: "Capire come è un inizio.", heroBottom: "Io cerco il perché.",
    intro: "Sono Giuseppe. Creo esperienze web con React, curiosità e attenzione alle persone.",
    explore: "Scopri i progetti", scroll: "Segui una buona domanda", trailTitle: "Il buon codice parte da una domanda migliore.",
    trailIntro: "Segui un pensiero, dalla prima domanda a qualcosa di utile.",
    steps: [
      { name: "Osservo", title: "Prima di tutto, ascolto.", text: "Chi userà questo prodotto? Cosa gli complica la vita? Ascoltare viene prima di aprire l'editor." },
      { name: "Mi chiedo", title: "Vado oltre il sintomo.", text: "Una funzionalità è l'inizio di una conversazione. Voglio capire il bisogno che c'è dietro." },
      { name: "Capisco", title: "Collego i pezzi.", text: "Dall'interfaccia ai dati, scompongo il problema prima di scegliere come costruire la soluzione." },
      { name: "Costruisco", title: "Do una risposta utile alla domanda.", text: "Un sito pubblico accogliente e uno spazio di lavoro riservato: due bisogni, due esperienze pensate con attenzione." },
    ], trailLink: "Scopri questo approccio in pratica", selected: "Tre progetti. Tre domande diverse.", selectedNote: "Progetti selezionati", read: "Leggi la storia", cover: "Copertina editoriale", project: "Progetto",
    thinking: "La curiosità è il filo comune.", principles: [
      { title: "Fare domande migliori.", text: "Un sito professionale e uno spazio riservato si rivolgono a persone diverse. I loro bisogni guidano l'architettura.", slug: "care-workspace" },
      { title: "Costruire per le persone.", text: "In Ohara, esplorare il catalogo e salvare i preferiti collega la scoperta a un'esperienza personale.", slug: "ohara" },
      { title: "Migliorare insieme.", text: "Prestissimo unisce sviluppo full-stack e un workflow Git condiviso. Anche ascoltare fa parte del processo.", slug: "prestissimo" },
    ], aboutTitle: "Una mente analitica. Un approccio umano.",
    aboutText: "Il mio percorso passa dagli studi ingegneristici allo sviluppo web. Mi piace ancora smontare i problemi, capire da dove nascono e trovare un modo concreto di affrontarli. Ascoltare, confrontare idee e costruire insieme agli altri fa parte del processo.",
    outside: "Lontano dalla tastiera", outsideText: "Allenarmi, viaggiare, scoprire cose nuove. E tre Jack Russell che rendono le giornate tutto fuorché noiose.",
    timeline: [{ date: "2026", title: "Specializzazione Frontend ReactJs", place: "Aulab Hackademy" }, { date: "2025–2026", title: "Formazione Junior Full Stack Web Developer", place: "Aulab Hackademy — oltre 400 ore" }, { date: "2018–2024", title: "Studi in Ingegneria Meccanica / Industriale", place: "Politecnico di Bari / Unicusano" }],
    snapshot: "La versione breve.", snapshotText: "Cerco il prossimo passo come junior frontend o full-stack developer.", skills: ["Interfacce", "Dietro le quinte", "Come lavoro"], education: "Formazione full-stack e specializzazione React Aulab", languages: "Italiano (madrelingua) / Inglese (B2)",
    contactTitle: "Qual è il tuo prossimo perché?", contactText: "Hai un problema interessante da risolvere? Mi piacerebbe ascoltarlo.", linkedin: "Conosciamoci su LinkedIn", footer: "Costruito con curiosità.", back: "Tutti i progetti", question: "La domanda", built: "Cosa ho realizzato", decisions: "Perché queste scelte", outcome: "Il risultato", discuss: "Una domanda da approfondire", stack: "Gli strumenti dietro l'esperienza", next: "La prossima storia", home: "Torna alla homepage", notFound: "Questo sentiero finisce qui.", notFoundText: "Questa pagina non esiste. C'è ancora molto da scoprire nella home.",
  },
} as const;
