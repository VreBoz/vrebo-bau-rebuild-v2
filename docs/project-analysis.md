# Project Analysis: Vrebo-Bau Rebuild V2

## Zweck

Diese Datei dokumentiert Phase 1 des Neustarts fuer `vrebo-bau.de`. Sie fasst die Analyse von `quantum-grp-rebuild/site`, `vrebo.de-rebulid`, dem Webflow-Export, den vorhandenen Assets und dem alten Astro-Projekt zusammen.

Wichtig: Die bestehenden Referenzprojekte bleiben reine Lesequellen. Der neue Zielordner ist `vrebo-bau-rebuild-v2`.

## Analysierte Quellen

- `C:\Users\bosan\Documents\codex\quantum-grp-rebuild\site`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\docs`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\reference-webflow`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\new-figma-assets`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\buenaparkjf_logo-typografie`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\site`

## Analyse Quantum: Struktur und Qualitaetsmuster

`quantum-grp-rebuild/site` ist die staerkste technische Referenz. Das Projekt nutzt Astro, Tailwind CSS v4 und TypeScript mit einer klaren Trennung aus Layout, wiederverwendbaren Komponenten und strukturierten Daten.

### Seitenstruktur

Quantum hat eine klare statische Seitenarchitektur:

- `/`
- `/technical-services`
- `/facility-services`
- `/ueber-uns`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- dynamische Detailseiten unter `/technical-services/[slug]` und `/facility-services/[slug]`
- englische Parallelseiten unter `/en`
- `robots.txt.ts` und `sitemap.xml.ts`

Fuer Vrebo sinnvoll: eine aehnlich klare, aber kleinere Struktur ohne englische i18n. Vrebo braucht primaer Deutsch, lokale SEO und ein leistungsorientiertes Service-System.

### Komponentenstruktur

Quantum arbeitet mit:

- globalem `BaseLayout`
- globalem `Header` und `Footer`
- `SeoHead`
- thematischen Section-Komponenten fuer Home, Facility, Technical, About, Contact und Legal
- wiederverwendbaren Service-Detail-Komponenten
- Datenmodulen fuer Navigation, Homepage, Service-Listen, About, Contact, Legal und Detailseiten

Fuer Vrebo sinnvoll: diese Denkrichtung uebernehmen, aber weniger Domain-Sonderfaelle erzeugen. Vrebo sollte mit wenigen starken Komponenten starten:

- `BaseLayout`
- `SeoHead`
- `SiteHeader`
- `SiteFooter`
- `HeroHome`
- `HeroPage`
- `ServicesOverview`
- `ServiceDetailHero`
- `SplitMediaText`
- `ProcessSection`
- `TrustSection`
- `FAQSection`
- `ContactSection`
- `LegalContent`

### Designsystem

Quantum nutzt ein ruhiges, dunkles Grundsystem mit Navy, Olive, Orange, Paper-Tones, wiederkehrenden Radien, Schatten und Motion-Tokens. Die Global-CSS-Datei definiert:

- Farbvariablen
- Containerbreite
- Button-Klassen
- Card-Surfaces
- Motion-Durations und Easings
- Reveal-Animationen ueber `data-motion`
- gute Basisregeln fuer Images, Focus, Selection und Reduced Motion

Fuer Vrebo sinnvoll: Tokens und globale Regeln als Muster uebernehmen, aber nicht die Palette, nicht die dunkle Tech/Facility-Stimmung und nicht die exakte Hero-Komposition.

### Layout und Spacing

Quantum wirkt hochwertig durch:

- stabile Containerbreite
- grosszuegige Hero-Flaechen
- klare Section-Rhythmen
- grosse Medienflaechen statt kleiner dekorativer Assets
- ausgeglichene Desktop- und Mobile-Abstaende
- kaum visuelles Rauschen

Fuer Vrebo sinnvoll: grosszuegiger, ruhiger Bauauftritt mit klaren Abstaenden, aber dichter und lokaler als Quantum. Vrebo darf handwerklicher, waermer und regionaler wirken.

### Hero-Section

Quantum setzt auf eine grosse, fast full-bleed Hero-Flaeche mit Bild, dunklem Overlay, starker Headline, CTA und kleinen Marken-/Logo-Elementen.

Fuer Vrebo sinnvoll:

- grosser Hero mit echtem Bau-/Projektmotiv
- lokale Positionierung sofort sichtbar
- CTA "Projekt anfragen" und "Leistungen ansehen"
- kurze Vertrauenssignale direkt im ersten Viewport
- kein 1:1 Quantum-Hero mit denselben Overlay-Gesten

### SEO-Struktur

Quantum hat eine gute SEO-Basis:

- zentrale Site-Utilities
- Canonicals
- Open Graph
- Twitter Cards
- robots je nach Produktionsumgebung
- Sitemap aus statischen und dynamischen Routen
- JSON-LD fuer Organization und Service
- hreflang durch i18n

Fuer Vrebo sinnvoll:

- gleiche SEO-Disziplin ohne i18n
- LocalBusiness/Contractor bzw. HomeAndConstructionBusiness pruefen
- Service-Schema pro Leistung
- BreadcrumbList
- lokale `areaServed` mit Freilassing, Bad Reichenhall, Berchtesgadener Land, Salzburg Umgebung und Bayern
- suchstarke Titles/Descriptions pro Leistung

### Animationen und visuelle Details

Quantum nutzt dezente Reveal-Animationen, Hover-Lift, Bildzoom und reduzierte Motion bei `prefers-reduced-motion`.

Fuer Vrebo sinnvoll:

- dezente Reveals fuer Hero, Service-Cards und Split-Sections
- keine verspielten Effekte
- keine ueberladenen Parallax- oder Webflow-Animationen
- klare Reduced-Motion-Regeln

### Codequalitaet und Performance

Quantum ist in der Struktur sauber:

- wenig JavaScript
- statische Astro-Seiten
- Daten und Rendering getrennt
- Assets im `public`-Ordner
- kein Framework-Overhead ueber Astro hinaus
- klarer Build-Befehl

Fuer Vrebo sinnvoll:

- Astro statisch
- Tailwind v4
- TypeScript strict
- Content Collections oder typed data modules
- Bildkompression und AVIF/WebP in Phase 2/3
- keine Webflow-JS-Altlasten

## Analyse Vrebo: Inhalte, Assets und Altbestand

### Bestehende Webflow-Seiten

Der Webflow-Export enthaelt relevante Seiten:

- `index.html`
- `leistungen.html`
- `ueber-uns.html`
- `kontakt.html`
- `datenschutz.html`
- `impressum.html`
- `detail_service.html`

Er enthaelt ausserdem Altlasten:

- `401.html`
- `404.html`
- `blog.html`
- `detail_blog.html`
- `detail_categories.html`
- `detail_tags.html`
- `search.html`
- `templates/changelog.html`
- `templates/licenses.html`
- `templates/style-guide.html`

Bewertung: Nur die Kernseiten, Legal-Seiten und Service-Struktur sind fuer den MVP relevant. Blog, Search, Kategorien, Tags und Template-Dokumente sollen nicht migriert werden.

### Aktuelle Inhalte

Die alte Seite positioniert Vrebo als:

- Innenausbau
- Renovierung
- Montage
- Trockenbau
- Tueren und Fenster
- Entruempelung
- Hausmeisterservice und Gartenpflege
- Boden verlegen
- Badsanierung

Regionale Suchsignale:

- Freilassing
- Bad Reichenhall
- Berchtesgadener Land
- Salzburg Umgebung
- Bayern

Vertrauenssignale:

- "Seit ueber 15 Jahren"
- direkter Ansprechpartner
- saubere Baustelle
- transparente Abstimmung
- fachgerechte Entsorgung
- besenreine Uebergabe
- lokale Erreichbarkeit

### Gewuenschte erweiterte Leistungen

Die neue V2-Struktur soll nicht nur die sechs Legacy-Services erhalten. Sie soll erweiterte Leistungen sinnvoll einplanen:

- Renovierung und Neubau
- Energetische Sanierung
- Badsanierung
- Trockenbau
- Bodenverlegung
- Fenster und Tueren
- Abdichtung und Feuchtigkeitsschutz
- Aussenanlagen
- Entruempelung und Rueckbau
- optional: Hausmeisterservice/Objektpflege, wenn strategisch weiter gewollt

Diese Erweiterung ist fuer lokale SEO wichtig, weil viele Suchanfragen nicht nur nach "Innenausbau", sondern nach konkreten Bauleistungen und Orten suchen.

### Webflow-Export als Referenz

Der Export ist wertvoll fuer:

- Meta-Titles und Meta-Descriptions
- Navigationsstruktur
- vorhandene Service-Routen
- Legal-Inhalte
- Kontaktinformationen
- FAQ-Texte
- Prozess-Texte
- vorhandene Bilder und Videos
- Markenfarben

Der Export ist nicht wertvoll als technische Grundlage:

- Webflow-Klassen sind zu spezifisch und schwer wartbar
- `detail_service.html` ist ein leeres CMS-Template
- Blog/Search/Template-Seiten sind Altlasten
- Formularlogik ist nicht belastbar
- Animationen sind Webflow-gebunden
- Encoding-Artefakte und Placeholder muessen vermieden werden

### Altes Vrebo-Astro-Projekt

`vrebo.de-rebulid/site` ist technisch brauchbar als Lernquelle, aber nicht als Basis fuer V2. Es enthaelt:

- Astro + Tailwind v4 + TypeScript
- Content Collection fuer Services
- SEO/Schema-Daten
- Header/Footer
- Sections fuer Hero, ServiceList, FAQ, Process, Contact
- vorhandene Service-Markdown-Dateien

Bewertung:

- Positiv: Das Datenmodell fuer Services ist ein guter Ausgangspunkt.
- Positiv: Regionale Metadaten, LocalBusiness-Schema und Kontaktformular-Idee sind brauchbar.
- Negativ: Der visuelle Stil wirkt nicht auf dem Qualitaetsniveau von Quantum.
- Negativ: Einige Komponenten sind zu card-lastig, zu warm-beige und zu dekorativ.
- Negativ: Es soll ausdruecklich nicht einfach weitergebaut werden.

V2 darf daraus nur Muster und Inhalte uebernehmen, keine unkritische Codebasis.

### Assets

#### Webflow-Assets

Wichtige Assets:

- `reference-webflow/images/Vrebo-Bau.png`
- `reference-webflow/images/Vrebo-1.png`
- `reference-webflow/images/Group-30.png`
- `reference-webflow/images/bau-freilassing.png`
- `reference-webflow/images/tuer-wide.webp`
- `reference-webflow/images/service-banner_1service-banner.avif`
- `reference-webflow/videos/vrebo-bau_*`
- `reference-webflow/videos/innenaufbau-Freilassing-01_*`

Bewertung:

- Bilder und Videos sind gute Inhaltsreferenzen.
- Videos muessen spaeter auf Dateigroesse, Autoplay-Verhalten, Poster und mobile Performance geprueft werden.
- Einige Solar-/Arvora-Assets wirken templatefremd und sollten nicht uebernommen werden, ausser es gibt eine klare fachliche Begruendung.

#### Neue Figma-Assets

`new-figma-assets` ist inzwischen gefuellt und enthaelt:

- Favicons
- mehrere Vrebo-Logo-/Wordmark-Dateien
- `vrebo-main-img` Varianten
- Berg-/Regionalmotive
- Servicefotos
- Vektoren/kleine grafische Elemente
- Visitenkarten-Designs
- Gebaeude-/Freilassing-Bilder

Bewertung:

- Das ist die wichtigste visuelle Quelle fuer V2.
- Servicefotos koennen echte Glaubwuerdigkeit bringen, muessen aber kuratiert, komprimiert und mit Alt-Texten versehen werden.
- Berg-/Regionalmotive koennen lokale Identitaet staerken, sollten aber nicht als reine Deko dominieren.
- Logo-Assets sollten sauber vereinheitlicht werden.

#### BuenaParkJF-Logo-Schrift

Die Schrift aus `buenaparkjf_logo-typografie` sollte nicht als Fliesstext oder UI-Schrift genutzt werden. Sie ist nur fuer Logo-nahe Akzente oder sehr sparsame Brand-Signaturen geeignet.

### Bestehende Inhalte, die uebernommen werden sollten

- regionale Positionierung Freilassing, Bad Reichenhall, Berchtesgadener Land, Salzburg Umgebung
- Kontaktangaben aus der aktuellen Seite
- Legal-Inhalte, nach redaktioneller Pruefung
- FAQ-Grundfragen zu Dauer, Baustellenordnung, Entsorgung und kleinen/grossen Projekten
- Prozesslogik: Anfrage, Besichtigung, Angebot/Planung, Ausfuehrung, Uebergabe
- Service-Texte aus altem Astro-Projekt als erste Rohfassung
- Meta-Titles und Descriptions als SEO-Ausgangspunkt
- "Seit ueber 15 Jahren" nur verwenden, wenn weiterhin korrekt und gewollt

### Inhalte, die verbessert oder neu geschrieben werden sollten

- klare Positionierung als Bauunternehmen, nicht nur Innenausbau
- energetische Sanierung als eigener SEO- und Leistungsbereich
- Abdichtung/Feuchtigkeitsschutz als eigener Leistungsbereich
- Aussenanlagen als eigener Leistungsbereich
- Renovierung und Neubau klarer fassen
- Service-Details tiefer und lokaler schreiben
- Kontaktseite conversion-staerker machen
- Ueber-uns-Seite weniger templatehaft, mehr Vertrauen und lokale Arbeitsweise
- Legal-Seiten ruhiger und lesbarer
- Leistungsuebersicht nicht als einfache Liste, sondern als strukturierte Entscheidungshilfe

## Vergleich Quantum vs. Vrebo

| Bereich | Quantum | Vrebo Altbestand | V2-Empfehlung |
| --- | --- | --- | --- |
| Architektur | sehr strukturiert, datengetrieben | Webflow + angefangenes Astro | Quantum-Architekturprinzip uebernehmen |
| Design | hochwertig, dunkel, corporate | warm, handwerklich, teils templatehaft | eigenstaendig: Bau, Rosewood, Stein, Anthrazit |
| Inhalte | klar in Servicebereiche getrennt | gute lokale Inhalte, aber unvollstaendig | Service-System erweitern |
| SEO | gute Meta-/Schema-Basis | lokale Signale vorhanden | lokale SEO konsequent ausbauen |
| Navigation | klar, mit Service-Bereichen | bekannte Kernseiten + Dropdown | kompakte Nav mit Leistungen-Dropdown |
| Detailseiten | dynamisch aus Daten | Webflow-CMS im Export leer | V2 datengetrieben |
| Assets | optimierte AVIFs | viele Rohbilder und neue Figma-Assets | kuratieren und optimieren |
| Motion | dezent und kontrolliert | Webflow-Animationen | leichte eigene Motion |
| Wartbarkeit | hoch | gemischt | V2 von Anfang an sauber |

## Risiken und offene Punkte

- Die genaue rechtliche Aktualitaet von Impressum und Datenschutz muss vor Launch geprueft werden.
- "Seit ueber 15 Jahren" sollte fachlich bestaetigt werden.
- Die finale Leistungsbreite muss redaktionell geschaerft werden, damit Vrebo nicht beliebig wirkt.
- Servicefotos muessen gesichtet und je Leistung zugeordnet werden.
- Kontaktformular braucht in Phase 2 eine technische Entscheidung: PHP wie Quantum/Vrebo alt, externer Formularservice oder reine Mailto-Fallback-Loesung.
- Bildrechte und Nutzungsrechte der Figma-/Servicefotos sollten bestaetigt werden.
- Salzburg Umgebung muss SEO-seitig vorsichtig formuliert werden, damit kein falscher Leistungsradius versprochen wird.
- Neubau muss nur dann prominent als Service erscheinen, wenn Vrebo diese Leistung tatsaechlich in der gewuenschten Tiefe anbietet.

## Wiederverwendbare Quantum-Muster fuer Vrebo

- `BaseLayout` mit Header, Main, Footer und SEO
- zentrale SEO-Komponente
- Datenmodule oder Content Collection fuer Leistungen
- statische dynamische Routen fuer Service-Details
- Sitemap/Robots als Astro-API-Routen
- JSON-LD pro Seitentyp
- globale CSS-Tokens
- Motion ueber `data-motion`
- responsive Header mit sauberem Mobile-Menue
- strukturierte Contact-Section mit Success/Error-Zustaenden
- Legal-Seiten als eigene ruhige Content-Komponenten

## Bewusst nicht uebernehmen

- Quantum-Farbpalette
- Quantum-i18n fuer Vrebo-MVP
- Quantum-Industrie-/Facility-Tonalitaet
- Webflow-Klassen oder Webflow-JS
- Blog/Search/Template-Altseiten
- alte card-heavy Vrebo-V1-Optik ohne Qualitaetsupgrade
- fremd wirkende Template-Brandings

## Ergebnis Phase 1

Die neue Vrebo-Seite sollte ein eigenstaendiges Astro-Projekt werden, das Quantum als Qualitaets- und Strukturmassstab nutzt, aber visuell und inhaltlich klar als lokales Bauunternehmen aus Freilassing auftritt.

Der beste Weg ist ein datengetriebenes Service-System mit erweiterter Leistungsstruktur, lokaler SEO, echter Bildauswahl, ruhigem Designsystem und klaren Conversion-Strecken.
