# Design Direction: Vrebo-Bau Rebuild V2

## Zielbild

Vrebo V2 soll wie ein modernes, hochwertiges und regional verankertes Bauunternehmen wirken. Der Auftritt soll Vertrauen schaffen, Leistungen klar erklaeren und die Kontaktaufnahme erleichtern.

Die Seite orientiert sich qualitativ an Quantum, darf aber nicht wie Quantum aussehen. Vrebo braucht mehr lokale Waerme, Baukontext, handwerkliche Praezision und regionale Identitaet.

## Markenhaltung

Vrebo soll vermitteln:

- serioes
- lokal greifbar
- handwerklich sauber
- direkt ansprechbar
- strukturiert
- hochwertig, aber nicht arrogant
- modern, aber nicht tech-lastig
- vertrauensstark fuer Privatkunden, Eigentuermer und Unternehmen

## Farbempfehlung

### Kernpalette

- `brand-950`: sehr dunkles Rosewood, z. B. `#2b090b`
- `brand-900`: Vrebo-Rosewood, z. B. `#651113`
- `brand-700`: heller Cardinal-Akzent, z. B. `#ab3743`
- `stone-950`: fast schwarzes warmes Anthrazit, z. B. `#15110f`
- `stone-800`: dunkles Bau-Grau, z. B. `#302b28`
- `stone-600`: warmer Textgrau-Ton, z. B. `#6b625c`
- `sand-100`: heller Kalk-/Putzton, z. B. `#f4efe8`
- `sand-200`: warmer Flaechenton, z. B. `#e9dfd2`
- `paper`: sehr helles Warmweiss, z. B. `#fffaf4`
- `white`: nur fuer starke Kontraste

### Anwendung

- Rosewood als Markenanker fuer CTAs, aktive Navigation, kleine Linien, Labels und Akzente.
- Anthrazit fuer Hero, Footer und Bild-Overlays.
- Sand-/Putztoene fuer helle Sections und ruhige Flaechen.
- Cardinal nur sparsam fuer Hover, kleine Akzente und wichtige Hervorhebungen.

### Vermeiden

- keine Quantum-Navy/Olive-Kopie
- keine dominante beige Einheitsflaeche
- keine bunten Zusatzfarben
- keine grossen roten Flaechen ueber mehrere Sections
- keine dekorativen Gradient-Orbs oder bokehartigen Hintergruende

## Typografie

### Empfehlung

- Headings: `Instrument Sans` oder eine vergleichbare moderne Sans.
- Body: `Manrope` oder System-Sans, sofern Performance/Fonts sauber geloest werden.
- Logo-Akzent: `BuenaParkJF` nur fuer Logo-nahe Signaturen, nicht fuer UI oder lange Texte.

### Stil

- grosse, ruhige Headlines mit klarer Zeilenhoehe
- weniger extremes Letterspacing als im Webflow-Export
- keine zu engen, aggressiven Display-Zeilen
- starke Lesbarkeit fuer Service- und Legal-Texte
- Tags und Eyebrows klein, praezise und nicht ueberdekoriert

## Layout-Stil

### Desktop

- starke erste Ansicht mit breiter Medienflaeche und lokaler Aussage
- Content-Container ca. 1200-1280px
- Textcontainer ca. 720-820px
- grosse, klare Section-Abstaende
- zweispaltige Service-/Trust-Kompositionen
- ausgewogene Mischung aus Bild, Text und CTA

### Tablet

- 2-Spalten-Layouts frueh genug aufbrechen
- Cards und Medien in klaren Reihen
- Navigation kompakt, aber nicht ueberladen
- CTA-Zonen gut erreichbar

### Mobile

- Hero nicht ueberfrachten
- CTA direkt sichtbar
- Services als gut scannbare Cards oder kompakte Listen
- grosse Touch-Ziele
- kein Text in engen Bild-Overlays, wenn Lesbarkeit leidet
- Footer und Kontakt kurz und klar

## Bildsprache

### Ziel

Die Bildsprache soll echt, handwerklich und regional wirken. Bilder sollen nicht wie generische Stockfotos aussehen.

### Geeignete Motive

- echte Projektfotos aus `new-figma-assets/service-pictures`
- Gebaeude-/Standortmotive aus `vrebo+building-images`
- ruhige Innenausbau-Details
- Bad-/Boden-/Fenster-/Trockenbau-Motive
- regionale Berg-/Freilassing-Anklaenge als sekundare Identitaet
- sauber abgeschlossene Details und geordnete Baustellen

### Einsatzregeln

- Hero: ein starkes, echtes Motiv mit ruhigem Overlay.
- Services: pro Leistung ein klares Hauptbild und 2-3 Galerie-/Detailmotive.
- Ueber uns: Arbeitsweise, Team-/Projektatmosphaere, nicht zu inszeniert.
- Kontakt: Standort/Markenmotiv oder ruhiger Projektabschluss.
- Legal: keine grosse dramatische Bildinszenierung.

### Vermeiden

- dunkle, unklare Crops
- Bilder ohne echten Bau-/Projektbezug
- zu viele Bergmotive statt Leistungsbelege
- kleine dekorative Icons als Ersatz fuer echte Bilder
- ungepruefte Template-Assets wie fremdes Branding

## Komponenten-Stil

### Header

- sticky oder leicht sticky
- helle Variante auf normalen Seiten
- optional transparente/dunkle Variante ueber Hero
- klares Logo links
- Navigation: Startseite, Leistungen, Ueber uns, Kontakt
- Leistungen-Dropdown mit wichtigsten Services
- Primaer-CTA: "Projekt anfragen" oder "Angebot anfordern"
- Mobile-Menue als sauberes Panel mit grossen Links

### Footer

- dunkler, vertrauensstarker Abschluss
- Kontakt, Standort, Einsatzgebiet, schnelle Links, Legal
- keine fremden Template-Brands
- optional dezentes regionales Bildmotiv
- klarer CTA in der Footer-naehe

### Buttons

- Primary: Rosewood-Flaeche, pill oder leicht gerundetes Rechteck
- Secondary: helle Flaeche oder Outline auf hellem Grund
- Ghost/Text: fuer weniger wichtige Links
- konsistente Hoehen und Innenabstaende
- deutlicher Focus-State
- mobile Buttons bei Bedarf volle Breite

### Cards

- Radius ca. 12-16px, nicht zu rund
- feine Borders oder sehr weiche Schatten
- keine Cards in Cards
- Service-Cards mit Bild, Titel, Kurztext, Tags und CTA
- Trust-Cards kompakt und scanbar
- auf Mobile stabile Bildratios

### Sections

- keine Landingpage-Deko, sondern echte Inhalte
- klare Reihenfolge: Problem/Leistung/Vertrauen/Prozess/FAQ/Kontakt
- helle und dunkle Bands bewusst abwechseln
- keine uebermaessige Card-Flut
- jede Section braucht eine eindeutige Aufgabe

## Hero-Richtung

### Startseite

Empfohlene Komposition:

- Full-width oder fast full-width Bild-/Video-Hero
- Headline: "Bauunternehmen fuer Renovierung, Sanierung und Ausbau in Freilassing"
- Supporting Copy mit regionalem Radius
- CTA 1: "Projekt anfragen"
- CTA 2: "Leistungen ansehen"
- Trust Row: "Direkter Ansprechpartner", "Saubere Ausfuehrung", "Region Freilassing"
- Bildmotiv: echtes Bau-/Innenausbau-/Standortmotiv, kein rein atmosphaerischer Hintergrund

### Unterseiten

- kompaktere Page-Hero-Variante
- Breadcrumb oder Eyebrow
- kurzer Einleitungstext
- optional kleines Bildpanel
- weniger dramatisch als Startseite

### Service-Detailseiten

- Titel, lokale SEO-Aussage, Kurzbeschreibung
- Tags fuer Leistungsumfang
- CTA zur Anfrage
- Bild, das genau zur Leistung passt
- klare interne Links zu verwandten Leistungen

## Unterschiede zu Quantum

Damit Vrebo nicht wie eine Kopie wirkt:

- andere Farbwelt: Rosewood, Stein, Putz, Anthrazit statt Navy/Olive
- mehr lokaler Bau- und Handwerkskontext
- weniger Konzern-/Service-Holding-Gefuehl
- keine Logo-Rail wie Quantum
- keine Technical/Facility-Themenlogik
- andere Card-Kompositionen mit staerkerem Projekt-/Materialbezug
- Hero mehr regional und handwerklich, weniger corporate
- Animationen noch zurueckhaltender
- Services staerker nach Privatkunden/Eigentuemer-Bedarf strukturiert

## Conversion-Richtung

Vrebo sollte jede wichtige Seite zu einer Anfrage fuehren:

- Header-CTA
- Hero-CTA
- Service-Detail-CTA
- Prozess-CTA
- Kontakt-/Footer-CTA

Die Kontaktaufnahme soll niedrigschwellig wirken:

- "Projekt kurz schildern"
- "Fotos helfen bei der Einschaetzung"
- "Rueckmeldung persoenlich"
- "Besichtigung und Angebot nach Abstimmung"

## SEO-visuelle Balance

Die Seite braucht lokal suchstarke Texte, darf aber nicht wie eine SEO-Textwand wirken. Deshalb:

- lokale Orte natuerlich in Hero, Intro, Service-Details und Footer einbauen
- pro Service klare `areaServed`-Signale
- FAQ fuer echte Fragen nutzen
- interne Links zwischen verwandten Leistungen
- keine kuenstlichen Keyword-Listen im sichtbaren UI

## Empfohlene Design-Tokens

In Phase 2 sollten globale Tokens angelegt werden fuer:

- Farben
- Typografie
- Container
- Section-Spacing
- Radius
- Schatten
- Motion
- Z-Index
- Focus-Ring

## Zusammenfassung

Vrebo V2 soll ruhig, hochwertig und echt wirken. Die visuelle Qualitaet soll Quantum erreichen, aber die Marke soll klar anders sein: handwerklich, lokal, vertrauenswuerdig und conversion-orientiert.

## Homepage Revision: Premium ohne Fremdaesthetik

Die Startseite darf staerker als die Unterseiten inszenieren. Der neue Startseitenansatz setzt auf:

- eine grosse dunkle Hero-Buehne statt klassischer Split-Card
- echtes Standort-/Fahrzeugbild als Vertrauensanker
- subtile Brand-Layer aus Wortmarke, Gebaeudemotiv und regionaler Silhouette
- weniger gleichfoermige Karten in der ersten Leistungsuebersicht
- klare Wechsel zwischen heller Leistungsflaeche und dunkler Vertrauenszäsur
- grosszuegigere Typografie auf Desktop und bewusst ruhigere Groessen auf Mobile

Die Marke bleibt damit regional, handwerklich und serioes. Die Revision soll nicht luxurioes oder verspielt wirken, sondern praeziser, markiger und hochwertiger.

## Finale Design-Refinement-Phase

Die finale Verfeinerung bleibt innerhalb der bestehenden Rosewood-/Stein-/Paper-Richtung. Es wurde kein neuer Stil eingefuehrt und kein Quantum-Muster kopiert.

### Markencharakter

- Die Vrebo-Wortmarke wird weiterhin sparsam genutzt: Header, Footer, ein kleines Hero-Badge, Kontakt-/Ueber-uns-Brandmomente und das OG-Bild.
- Die Wortmarke bleibt ein Markenanker und wird nicht als Fliesstext- oder UI-Schrift verwendet.
- Kleine Brandlines wie regionale Orte oder Haltungssaetze ersetzen generische Deko.

### Regionale Motive

- Das Watzmann-/Bergmotiv aus dem Visitenkartenkontext wurde als dezente Silhouette optimiert.
- Einsatz nur als ruhiger Hintergrundakzent in Footer, CTA, Kontakt/Ueber-uns und Service-Detailbereichen.
- Keine touristische Bildstrecke und keine grossflaechige Bergdominanz.

### Hero-Entscheidung

- Das echte Standort-/Fahrzeugbild bleibt fuer die Startseite erhalten, weil es authentisch und markennah ist.
- Die Wirkung wurde ueber Crop, Overlay, Brand-Badge, lokale Signatur und ruhigere Text-/CTA-Balance veredelt.
- Ein reines Berg- oder Illustrationsmotiv wurde bewusst nicht als Hero-Ersatz genutzt, weil es weniger klar Bauunternehmen und echte Vrebo-Praesenz zeigt.

### Micro-Interactions und Oberflaechen

- Button-Hover wurden stabilisiert: keine Transform-Spruenge, keine Border-/Padding-Aenderungen, reduzierte Transitionen.
- Karten, Formulare und dunkle Flaechen erhalten mehr Staffelung ueber subtile Schatten, Linien und Akzentkanten.
- Service-Detailseiten, Kontakt und Ueber uns wurden staerker als bewusst gestaltete Markenflaechen inszeniert, ohne Fake-Zahlen oder neue Trust-Claims.
