# AGENTS.md: Vrebo-Bau Rebuild V2

## Projektziel

Dieses Projekt ist der saubere Neustart fuer `vrebo-bau.de` als Astro + Tailwind CSS + TypeScript Website. Ziel ist eine moderne, hochwertige, lokale Bauunternehmens-Website fuer Vrebo in Freilassing.

## Wichtige Referenzen

Nur lesen, nicht aendern:

- `C:\Users\bosan\Documents\codex\quantum-grp-rebuild`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid`

Diese Referenzen dienen nur fuer Analyse, Inhalte, Assets und Qualitaetsmuster. Dieses Projekt darf nicht durch Kopieren der alten Codebasis entstehen.

## Grundregeln

- Keine Dateien in `quantum-grp-rebuild` aendern.
- Keine Dateien in `vrebo.de-rebulid` aendern.
- Kein Webflow-JS uebernehmen.
- Keine Webflow-Klassenstruktur uebernehmen.
- Kein altes Vrebo-`site` ungeprueft weiterbauen.
- Quantum als Architektur- und Qualitaetsreferenz nutzen, nicht als visuelles Template.
- Vrebo muss eigenstaendig wirken.

## Tech Stack

Bevorzugt:

- Astro
- Tailwind CSS v4
- TypeScript strict
- statische Seiten
- Content Collections oder typed data modules
- strukturierte SEO-Daten
- responsive Design von Anfang an

## Projektstruktur

Empfohlene Struktur:

```text
src/
  components/
    layout/
    sections/
    ui/
  content/
    services/
  data/
  layouts/
  pages/
  styles/
  utils/
public/
  images/
  fonts/
  videos/
docs/
```

## Design-Regeln

- Modern, hochwertig, serioes, lokal.
- Keine Quantum-Farbkopie.
- Palette: Rosewood, warmes Anthrazit, Stein-/Putztoene, Paper.
- Keine dominanten dekorativen Orbs, Bokeh-Blobs oder generischen Gradienten.
- Keine Cards in Cards.
- Cards nur fuer echte wiederholte Elemente, Panels oder Formulare.
- Sections als klare Flaechen/Bands oder unframed Layouts.
- Text muss auf Mobile und Desktop in Containern passen.
- Buttons konsistent und klar unterscheidbar.
- Hero nutzt echtes Bild/Video oder starkes Projektmotiv, nicht reine Deko.
- Legal-Seiten ruhig und lesefreundlich halten.

## Komponenten-Regeln

- Globale Komponenten klein und wiederverwendbar halten.
- Services aus zentralen Daten rendern.
- Keine sechs hart kopierten Service-Detailseiten.
- Header und Footer global.
- SEO zentral ueber Layout/SeoHead.
- FAQ und Prozess zentral als Daten + Section-Komponente.
- Nur abstrahieren, wenn echte Wiederholung oder Wartbarkeitsgewinn entsteht.

## SEO-Regeln

- Jede Seite braucht eindeutigen Title und Description.
- Canonicals verwenden.
- Open Graph und Twitter Cards verwenden.
- JSON-LD fuer LocalBusiness/Organization, WebPage, Service und Breadcrumbs.
- Sitemap und robots als Astro-Routen einplanen.
- Lokale Suchbegriffe natuerlich einbauen:
  - Freilassing
  - Bad Reichenhall
  - Berchtesgadener Land
  - Salzburg Umgebung
  - Bayern
  - Bauunternehmen Freilassing
  - Renovierung Freilassing
  - Sanierung Berchtesgadener Land
  - Badsanierung Freilassing
  - Energetische Sanierung Freilassing
- Kein Keyword-Stuffing.

## Leistungsstruktur

V2 plant eine erweiterte Leistungsstruktur:

- Renovierung und Neubau
- Energetische Sanierung
- Badsanierung
- Trockenbau und Innenausbau
- Bodenverlegung
- Fenster und Tueren
- Abdichtung und Feuchtigkeitsschutz
- Aussenanlagen
- Entruempelung und Rueckbau
- optional: Hausmeisterservice und Objektpflege

Legacy-Routen aus der alten Seite muessen spaeter per Redirect bedacht werden.

## Asset-Regeln

Asset-Quellen nur lesen und gezielt kopieren, wenn fuer V2 noetig:

- `vrebo.de-rebulid/new-figma-assets`
- `vrebo.de-rebulid/reference-webflow/images`
- `vrebo.de-rebulid/reference-webflow/videos`
- `vrebo.de-rebulid/buenaparkjf_logo-typografie`

Regeln:

- Bilder kuratieren, nicht alles kopieren.
- Rohbilder optimieren.
- Alt-Texte schreiben.
- Videos nur nach Performance-Pruefung verwenden.
- Fremde/templatehafte Assets wie Arvora/Solar nur uebernehmen, wenn explizit gewollt.
- BuenaParkJF nur logo-nah einsetzen.

## Content-Regeln

- Alte Texte als Rohmaterial nutzen.
- V2-Texte neu strukturieren und verbessern.
- Keine Placeholder live lassen.
- "Seit ueber 15 Jahren" nur verwenden, wenn bestaetigt.
- Neubau nur prominent bewerben, wenn fachlich wirklich angeboten.
- Salzburg Umgebung vorsichtig als Einsatznahe/Umgebung formulieren.

## Build- und Check-Kommandos

Sobald ein Astro-Projekt initialisiert ist:

- `npm install`
- `npm run build`
- `npm run check`, falls Script vorhanden
- `npm run lint`, nur falls Script vorhanden
- `npm run dev` fuer lokale Browser-Pruefung

Keine nicht existierenden Scripts erfinden.

## Browser-/QA-Regeln

Nach frontend-sichtbaren Aenderungen:

- Desktop und Mobile im Browser pruefen.
- Auf Textueberlauf achten.
- Hero, Navigation, Service-Cards, Formulare und Footer pruefen.
- Keine leeren Bilder oder falschen Crops.
- Reduced-Motion respektieren.

## Dokumentation

Diese Docs bilden die Phase-1-Basis:

- `docs/project-analysis.md`
- `docs/design-direction.md`
- `docs/site-structure.md`
- `docs/implementation-plan.md`

Bei wichtigen Architektur- oder Inhaltsentscheidungen die Docs aktualisieren.

## Arbeitsweise fuer Codex

- Erst lesen, dann aendern.
- Bestehende Referenzprojekte respektieren.
- Kleine, nachvollziehbare Schritte.
- Nach groesseren Schritten build/check laufen lassen.
- Keine ungefragten Refactors.
- Keine destruktiven Git-Operationen.
- Wenn bestehende unerklaerte Aenderungen auftauchen: nicht revertieren, sondern damit arbeiten oder nachfragen.
