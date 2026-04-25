# Implementation Plan: Vrebo-Bau Rebuild V2

## Ziel

Dieser Plan beschreibt die technische Umsetzung nach Phase 1. Er ist bewusst in Milestones gegliedert, damit die neue Website nicht unuebersichtlich wird und nicht versehentlich aus dem alten Vrebo-Projekt kopiert wird.

## Milestone 1: Projektgrundlage

### Aufgaben

- Astro-Projekt in `vrebo-bau-rebuild-v2` initialisieren.
- Tailwind CSS v4 und TypeScript einrichten.
- `src`, `public`, `docs` und Grundstruktur anlegen.
- `astro.config.mjs`, `tsconfig.json`, `package.json` sauber konfigurieren.
- Alias `@/*` auf `src/*` einrichten.

### Empfohlene Kommandos

- `npm create astro@latest . -- --template minimal --install --git false --typescript strict`
- `npm i @tailwindcss/vite@^4.2.2 tailwindcss@^4.2.2`
- falls benoetigt: `npm i -D @astrojs/check typescript`

### Checks

- `npm run build`
- `npm run check`, falls Script vorhanden

## Milestone 2: Basisarchitektur

### Ordnerstruktur

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
```

### Aufgaben

- `BaseLayout.astro` erstellen.
- `SeoHead.astro` erstellen.
- globale Styles und Tokens anlegen.
- `site.ts` mit Site-Metadaten erstellen.
- `navigation.ts` mit Hauptnavigation und Leistungsnavigation erstellen.
- `structuredData.ts` fuer Schema.org-Hilfen erstellen.

### Entscheidungen

- Sprache: Deutsch.
- Keine i18n im MVP.
- Service-Routen bevorzugt unter `/leistungen/[slug]`.
- Alte `/service/*` Routen spaeter weiterleiten.

### Checks

- Build muss nach Layout/SEO-Basis laufen.
- HTML der Startseite muss gueltige Meta-Basis enthalten.

## Milestone 3: Designsystem

### Aufgaben

- Farb-Tokens fuer Rosewood, Anthrazit, Stone, Sand, Paper definieren.
- Typografie-Tokens definieren.
- Container-Klassen definieren.
- Button-Komponente bauen.
- Tag/Badge-Komponente bauen.
- SectionHeading-Komponente bauen.
- Card-/Surface-Utilities definieren.
- Focus- und Reduced-Motion-Regeln anlegen.

### Komponenten zuerst

- `Button.astro`
- `SectionHeading.astro`
- `Tag.astro`
- `Accordion.astro`
- `PictureFrame.astro` optional

### Checks

- Mobile Textumbruch pruefen.
- Buttons duerfen auf kleinen Viewports nicht ueberlaufen.
- Farben nicht zu einfarbig/beige/rotlastig halten.

## Milestone 4: Datenmodell fuer Leistungen

### Empfehlung

Content Collection `services` verwenden. Das alte Vrebo-Projekt zeigt, dass dieses Muster gut passt.

### Felder

- `title`
- `slug`
- `navLabel`
- `description`
- `seoTitle`
- `seoDescription`
- `heroImage`
- `tags`
- `intro`
- `servicesIncluded`
- `processSteps`
- `benefits`
- `gallery`
- `relatedServices`
- `areasServed`
- `faq`
- `schemaServiceType`

### Start-Leistungen

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

### Content-Regel

Legacy-Texte duerfen als Rohmaterial genutzt werden, aber V2-Texte muessen redaktionell verbessert werden. Neue Leistungen duerfen nicht mit Placeholder-Texten live gehen.

### Checks

- `getStaticPaths` erzeugt alle Service-Routen.
- Sitemap enthaelt alle Services.
- Jede Service-Seite hat Title, Description, H1, CTA und Schema.

## Milestone 5: Globale Layout-Komponenten

### Header

- Logo links.
- Desktop-Navigation.
- Leistungen-Dropdown aus Daten.
- CTA rechts.
- Mobile-Menue mit `details` oder kleiner eigener TS-Interaktion.
- Active-States.
- Fokus- und Escape-Verhalten falls JS-Menue.

### Footer

- Markenblock.
- Kontaktblock.
- Leistungslinks.
- Legal-Links.
- Einsatzgebiet.
- keine fremden Brands.

### Checks

- Header funktioniert ohne Webflow-JS.
- Mobile-Menue ist bedienbar.
- Footer bleibt auf Mobile lesbar.

## Milestone 6: Kernseiten

### Reihenfolge

1. Startseite `/`
2. Leistungen `/leistungen`
3. Leistungsdetail-Template `/leistungen/[slug]`
4. Kontakt `/kontakt`
5. Ueber uns `/ueber-uns`
6. Legal-Seiten

### Startseite Sections

- HeroHome
- ServicesOverview
- WhyVrebo/Trust
- ProcessSection
- RegionalSection
- FAQSection
- FinalCTA

### Leistungen Sections

- PageHero
- ServiceClusterOverview
- FullServiceList
- Process/Trust Teaser
- CTA

### Kontakt Sections

- PageHero
- ContactDetails
- ContactForm
- Anfrage-Hinweise
- Einsatzgebiet

### Checks

- Jede Seite auf Mobile, Tablet und Desktop pruefen.
- Kein sichtbarer Placeholder.
- CTAs fuehren korrekt.

## Milestone 7: Assets kuratieren und aufbereiten

### Quellen

- `new-figma-assets`
- `reference-webflow/images`
- `reference-webflow/videos`
- `buenaparkjf_logo-typografie`

### Aufgaben

- Logo-Variante final auswaehlen.
- Favicons uebernehmen oder neu exportieren.
- pro Service 1 Hero-Bild und 2-3 Galerie-Bilder auswaehlen.
- Bilder komprimieren und in moderne Formate bringen.
- Alt-Texte schreiben.
- Videos nur verwenden, wenn Dateigroesse und Wirkung passen.
- fremde/templatehafte Assets ausschliessen.

### Checks

- Keine riesigen Rohbilder unkomprimiert ausliefern.
- Bildverhaeltnisse stabil.
- Hero-Bilder auf Mobile nicht falsch gecroppt.
- Alle Bilder haben sinnvolle Alt-Texte oder leere Alt-Texte, wenn rein dekorativ.

## Milestone 8: SEO und strukturierte Daten

### Technische SEO

- `SeoHead.astro`
- Canonicals
- Open Graph
- Twitter Cards
- robots je nach Environment
- sitemap aus statischen und Service-Routen
- 404-Seite neu gestalten

### JSON-LD

- Organization
- LocalBusiness oder passender Bau-/Dienstleistertyp
- WebSite
- WebPage
- Service pro Leistungsseite
- BreadcrumbList
- ContactPage
- AboutPage

### Lokale SEO

- `areaServed` mit Freilassing, Bad Reichenhall, Berchtesgadener Land, Salzburg Umgebung, Bayern.
- keine Keyword-Stuffing-Bloecke.
- Titles und Descriptions pro Leistung sauber schreiben.

### Checks

- Jede Seite hat eindeutigen Title und Description.
- Sitemap listet nur gewollte Routen.
- robots blockiert Staging und erlaubt Production.
- Structured Data validierbar.

## Milestone 9: Kontaktformular

### Entscheidung

Moegliche Varianten:

- PHP-Formular wie Quantum/Vrebo alt, falls Hosting PHP kann.
- Externer Formularservice.
- Zunaechst Mailto-Fallback, wenn Backend ungeklart ist.

### Mindestanforderungen

- POST statt GET.
- Honeypot.
- Validierung fuer Name, E-Mail, Nachricht.
- Datenschutz-Hinweis.
- Success/Error-Zustaende.
- Rueckgabe auf Kontaktseite ohne kaputte Query-States.

### Checks

- Erfolgreiche Testanfrage in Staging.
- Fehlerfaelle fuer fehlende Pflichtfelder.
- Kein Spam-Feld sichtbar.

## Milestone 10: QA und Launch-Vorbereitung

### Lokale Checks

- `npm run build`
- `npm run check`, falls vorhanden
- `npm run lint`, nur wenn Script existiert
- Browser-Check Desktop/Mobile
- Lighthouse- oder manuelle Performance-Pruefung

### Inhaltliche Checks

- keine Webflow-Klassen
- keine Webflow-JS-Abhaengigkeit
- keine Placeholdertexte
- keine fremden Template-Brands
- alle Kontaktangaben korrekt
- Legal-Inhalte final geprueft
- "Seit ueber 15 Jahren" bestaetigt oder entfernt
- Serviceumfang fachlich korrekt

### Responsiveness

- 360px Mobile
- 768px Tablet
- 1280px Desktop
- 1440px+ Wide Desktop

### Launch

- Production-Environment setzen.
- Canonical auf `https://vrebo-bau.de`.
- robots auf indexierbar.
- Sitemap pruefen.
- Redirects fuer alte `/service/*` Routen einrichten.
- Kontaktformular live testen.

## Sauberkeitsregeln

- Keine bestehenden Referenzprojekte veraendern.
- Kein Kopieren von Webflow-Struktur.
- Keine unnoetige Komponentenvermehrung.
- Service-Daten zentral halten.
- Assets bewusst kuratieren.
- Nach jedem groesseren Milestone builden.
- Dokumentation aktuell halten.

## Empfohlene Phase-2-Reihenfolge

1. Astro-Projekt initialisieren.
2. Tokens/Layout/SEO-Basis bauen.
3. Service-Collection mit finalem Schema anlegen.
4. Header/Footer bauen.
5. Startseite und Leistungsuebersicht bauen.
6. Detailseiten generieren.
7. Kontakt und Legal fertigstellen.
8. Assets optimieren.
9. SEO/QA/Browser-Pruefung.

## Definition of Done fuer V2-MVP

- Alle Kernseiten und Leistungsseiten sind statisch gebaut.
- Alle wichtigen CTAs funktionieren.
- Build und Check laufen.
- Mobile Darstellung ist hochwertig.
- SEO-Basis ist vollstaendig.
- Keine Webflow-Altlasten im Code.
- Die Website wirkt eigenstaendig und qualitativ auf Quantum-Niveau.
