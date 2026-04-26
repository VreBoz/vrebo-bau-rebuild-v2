# Site Structure: Vrebo-Bau Rebuild V2

## Ziel

Die neue Website soll Vrebo als regionales Bauunternehmen fuer Freilassing, Bad Reichenhall, Berchtesgadener Land und die nahe Salzburg Umgebung positionieren. Die Struktur soll SEO-freundlich, conversion-orientiert und wartbar sein.

## Grundprinzip

Die Seitenstruktur wird erweitert. Die sechs Legacy-Services bleiben erhalten, aber die neue Website plant zusaetzliche Bauleistungen ein, die fuer die Zielgruppe und lokale Suche wichtig sind.

## Geplante Hauptnavigation

Empfohlene Desktop-Navigation:

- Startseite: `/`
- Leistungen: `/leistungen`
- Ueber uns: `/ueber-uns`
- Kontakt: `/kontakt`

Leistungen bekommt ein Dropdown mit priorisierten Eintraegen:

- Renovierung und Neubau
- Energetische Sanierung
- Badsanierung
- Trockenbau
- Bodenverlegung
- Fenster und Tueren
- Abdichtung und Feuchtigkeitsschutz
- Aussenanlagen
- Entruempelung und Rueckbau

Hausmeisterservice/Objektpflege bleibt als sichtbare Leistung in der Navigation, weil die Leistung in V2 angelegt und auf der Leistungsuebersicht erreichbar sein soll.

## Geplante URL-Struktur

### Kernseiten

- `/`
- `/leistungen`
- `/ueber-uns`
- `/kontakt`
- `/datenschutz`
- `/impressum`

### Leistungsseiten

Empfohlen: `/leistungen/[slug]`

Gruende:

- fachlich klarer als `/service/[slug]`
- deutschsprachig und passend zur Navigation
- gute Basis fuer lokale SEO
- laesst sich sauber in Breadcrumbs darstellen

Moegliche Zielrouten:

- `/leistungen/renovierung-neubau`
- `/leistungen/energetische-sanierung`
- `/leistungen/badsanierung`
- `/leistungen/trockenbau-innenausbau`
- `/leistungen/bodenverlegung`
- `/leistungen/fenster-tueren`
- `/leistungen/abdichtung-feuchtigkeitsschutz`
- `/leistungen/aussenanlagen`
- `/leistungen/entruempelung-rueckbau`
- `/leistungen/hausmeisterservice-objektpflege`

### Redirects / Legacy-Kompatibilitaet

Die alten Routen sollten spaeter per Redirect erhalten bleiben:

- `/service/innenausbau` -> `/leistungen/trockenbau-innenausbau`
- `/service/tueren-und-fenster` -> `/leistungen/fenster-tueren`
- `/service/entruempelung` -> `/leistungen/entruempelung-rueckbau`
- `/service/hausmeisterservice` -> `/leistungen/hausmeisterservice-objektpflege`
- `/service/boden-verlegen` -> `/leistungen/bodenverlegung`
- `/service/badsanierung` -> `/leistungen/badsanierung`

Wenn Redirects technisch in der Hosting-Umgebung erst spaeter geloest werden, koennen die alten Routen als statische Weiterleitungsseiten oder Server-Regeln geplant werden.

## Footer-Struktur

Empfohlene Footer-Zonen:

- Markenblock: Vrebo, kurzer Claim, Einsatzgebiet
- Kontakt: Telefon, E-Mail, Adresse
- Leistungen: wichtigste 6-9 Leistungslinks
- Unternehmen: Ueber uns, Kontakt
- Rechtliches: Datenschutz, Impressum
- Lokale Signale: Freilassing, Bad Reichenhall, Berchtesgadener Land, Salzburg Umgebung

Footer sollte keine fremden Template-Brands enthalten.

## Startseiten-Struktur

### 1. Hero

Aufgabe:

- sofort klaeren: Wer ist Vrebo, was bietet Vrebo, wo arbeitet Vrebo?
- starke Conversion ermoeglichen

Inhalte:

- Headline mit Bauunternehmen/Renovierung/Sanierung/Freilassing
- kurzer Beschreibungstext
- CTA "Projekt anfragen"
- CTA "Leistungen ansehen"
- Trust-Signale: direkter Ansprechpartner, saubere Ausfuehrung, regionale Naehe
- echtes Projekt- oder Standortbild

Aktueller Homepage-Stand:

- Hero als dunkle Bildbuehne mit Standort-/Fahrzeugfoto.
- Trust-Signale sind als untere Hero-Bar integriert.
- CTA-Gruppe bleibt direkt im ersten Viewport sichtbar.
- Subtiles Gebaeude-/Brandmotiv ergaenzt die Markenwirkung, ohne das echte Foto zu ersetzen.

### 2. Leistungsueberblick

Aufgabe:

- die wichtigsten Services scanbar machen
- direkt in Detailseiten fuehren

Empfohlen:

- 6-9 Service-Cards oder Service-Bands
- nach Bedarf in Cluster teilen: Ausbau/Sanierung, Huell-/Schutzarbeiten, Aussen/Objekt
- kurze Beschreibungen statt langer SEO-Bloecke

Aktueller Homepage-Stand:

- Startseite nutzt eine Featured-Service-Komposition plus scanbare Service-Zeilen.
- Die normale Karten-/Listenlogik bleibt fuer `/leistungen` erhalten.

### 3. Warum Vrebo

Aufgabe:

- Vertrauen aufbauen
- Unterschiede zu anonymen Grossanbietern zeigen

Inhalte:

- direkte Abstimmung
- klare Projektplanung
- saubere Baustellen
- regionale Erreichbarkeit
- ordentliche Uebergabe

### 4. Arbeitsweise / Prozess

Aufgabe:

- Unsicherheit vor der Anfrage reduzieren

Schritte:

- Anfrage und erstes Gespraech
- Besichtigung und Beratung
- Angebot und Ablaufplanung
- Ausfuehrung
- Abnahme und Uebergabe

### 5. Projekt- oder Bildsektion

Aufgabe:

- echte Arbeitsqualitaet und Materialnaehe zeigen

Moeglich:

- kuratierte Bilderreihe aus Servicefotos
- Split-Section mit Projektmotiven
- kein schweres Portfolio-System im MVP

### 6. Regionale SEO-/Einsatzgebiet-Section

Aufgabe:

- lokale Suchrelevanz, aber natuerlich und nutzerfreundlich

Inhalte:

- Freilassing als Kernstandort
- Bad Reichenhall
- Berchtesgadener Land
- Salzburg Umgebung, sofern passend
- Bayern/Region nur als Kontext

### 7. FAQ

Aufgabe:

- Einwaende klaeren
- Anfragebarriere senken

Themen:

- Dauer
- Besichtigung
- kleine und grosse Projekte
- Sauberkeit und Entsorgung
- Fotos/Infos fuer Anfrage
- Einsatzgebiet

### 8. Abschluss-CTA

Aufgabe:

- klare naechste Handlung

Inhalte:

- "Projekt kurz schildern"
- "Wir melden uns persoenlich"
- Kontaktbutton und Telefon/E-Mail

## Leistungsuebersicht `/leistungen`

### Ziel

Die Seite soll alle Leistungen strukturiert zeigen und Nutzer zur passenden Detailseite fuehren.

### Sections

- Page Hero: "Leistungen fuer Renovierung, Sanierung und Bau in Freilassing"
- Intro: fuer Privatkunden, Eigentuemer, Unternehmen und regionale Kunden
- Service-Cluster:
  - Ausbau und Renovierung
  - Energie, Abdichtung und Schutz
  - Aussen und Rueckbau
  - Objektpflege
- kurze Trust-Section: sauber, direkt, lokal
- Prozess-Teaser
- CTA zur Anfrage

## Leistungsdetailseiten

### Gemeinsames Template

Jede Leistungsdetailseite sollte aus derselben Datenstruktur gerendert werden.

Sections:

- Hero mit Titel, Ortssignal, Kurzbeschreibung, Bild, CTA
- "Wann ist diese Leistung sinnvoll?"
- Leistungsumfang
- Ablauf
- Qualitaets-/Vertrauensabschnitt
- Bilder/Galerie
- verwandte Leistungen
- FAQ-Auswahl
- CTA

### Service-Datenfelder

Empfohlen:

- `title`
- `slug`
- `navLabel`
- `seoTitle`
- `seoDescription`
- `description`
- `intro`
- `heroImage`
- `gallery`
- `tags`
- `servicesIncluded`
- `processSteps`
- `benefits`
- `relatedServices`
- `areasServed`
- `faq`
- `schemaServiceType`

## Ueber uns `/ueber-uns`

### Ziel

Vertrauen und lokale Naehe staerken.

Sections:

- Page Hero: Vrebo als regionales Team/Unternehmen
- Story: klare Absprachen, saubere Ausfuehrung, Verantwortung
- Arbeitsweise mit Bild
- Werte: direkt, ordentlich, verlaesslich, transparent
- regionale Verankerung
- optional: belastbare Kennzahlen nur wenn redaktionell bestaetigt
- CTA: Kontakt aufnehmen oder Leistungen ansehen

Nicht ueberladen mit Template-Countern.

## Kontakt `/kontakt`

### Ziel

Anfragen moeglichst einfach machen.

Sections:

- Page Hero mit klarer Einladung
- Kontaktinformationen
- Formular
- Hilfstext: Welche Angaben helfen?
- Service-Auswahl im Formular
- direkte E-Mail und Telefon
- Einsatzgebiet
- FAQ oder kurze Vertrauenshinweise

Formularfelder:

- Name
- E-Mail
- Telefon optional
- Leistung/Projektart
- Ort/Objekt optional
- Nachricht
- Honeypot
- Datenschutz-Hinweis

## Legal-Seiten

### Datenschutz

- ruhiger Page Hero oder nur kompakter Intro-Bereich
- schmaler Textcontainer
- klare H2-Struktur
- keine grosse Marketingdramaturgie

### Impressum

- klare Anbieterangaben
- Adresse, Kontakt, Vertretung, USt-ID sofern vorhanden
- Haftung/Urheberrecht/OS-Plattform wie rechtlich benoetigt
- gleiche ruhige Legal-Komponente wie Datenschutz

## Interne Verlinkungen

Empfohlen:

- Startseite -> alle Hauptleistungen
- Leistungen -> alle Detailseiten
- Detailseiten -> Kontakt
- Detailseiten -> verwandte Leistungen
- Badsanierung -> Abdichtung/Feuchtigkeitsschutz, Trockenbau, Bodenverlegung
- Energetische Sanierung -> Fenster/Tueren, Abdichtung, Renovierung
- Aussenanlagen -> Abdichtung/Feuchtigkeitsschutz, Rueckbau
- Entruempelung/Rueckbau -> Renovierung/Neubau
- Ueber uns -> Kontakt und Leistungen
- Footer -> alle wichtigen Leistungen

## Lokale SEO-Struktur

### Primaere Suchbezuege

- Bauunternehmen Freilassing
- Renovierung Freilassing
- Sanierung Berchtesgadener Land
- Badsanierung Freilassing
- Energetische Sanierung Freilassing
- Trockenbau Freilassing
- Bodenverlegung Freilassing
- Fenster und Tueren Freilassing
- Abdichtung Feuchtigkeitsschutz Freilassing
- Aussenanlagen Freilassing

### Ortsintegration

Natuerlich einbauen in:

- Titles
- Meta Descriptions
- H1/H2 wo sinnvoll
- Introtexte
- Footer
- LocalBusiness-Schema
- Service-Schema `areaServed`
- Kontaktseite

Keine kuenstlichen Keyword-Bloecke.

## Inhalte aus alter Seite uebernehmen

- Navigation und Kernseiten
- sechs bestehende Service-Routen als Redirect-Quelle
- FAQ-Grundfragen
- Prozess-Grundlogik
- Kontaktinformationen
- regionale Positionierung
- Legal-Inhalte nach Pruefung
- Service-Rohtexte aus altem Astro-Projekt als redaktioneller Startpunkt

## Inhalte neu schreiben oder verbessern

- Claim und Startseiten-Hero
- erweiterte Leistungsseiten
- energetische Sanierung
- Renovierung/Neubau
- Abdichtung/Feuchtigkeitsschutz
- Aussenanlagen
- lokale SEO-Texte
- CTA-Texte
- Formular-Hilfstexte
- Bild-Alt-Texte
- Footer-Claim

## MVP-Abgrenzung

Im MVP enthalten:

- alle Kernseiten
- erweiterte Leistungsuebersicht
- Leistungsdetailseiten
- FAQ
- Kontaktformular-UI
- SEO-Grundgeruest
- Sitemap/Robots

Nicht im MVP enthalten:

- Blog
- Suche
- Kategorien/Tags
- CMS-Admin
- komplexes Portfolio-System
- englische Version
- Webflow-Animationen

## Empfehlung

Die beste Struktur ist eine statische Astro-Seite mit datengetriebenem Leistungsmodell. So bleibt die Website fuer lokale SEO stark, fuer Nutzer klar und fuer spaetere Codex-Sessions wartbar.
