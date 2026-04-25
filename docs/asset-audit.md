# Asset Audit: Phase 4

## Quellen

Gelesen, aber nicht geaendert:

- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\new-figma-assets`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\reference-webflow\images`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\reference-webflow\videos`
- `C:\Users\bosan\Documents\codex\vrebo.de-rebulid\buenaparkjf_logo-typografie`

## Gefundene Logo-Dateien

- `new-figma-assets/Vrebo.png`
- `new-figma-assets/Vrebo-1.png`
- `new-figma-assets/Vrebo-2.png`
- `new-figma-assets/Vrebo-3.png`
- `new-figma-assets/Vrebo-4.png`
- `new-figma-assets/Vrebo-5.png`
- `new-figma-assets/vrebo-main-img.png`
- `new-figma-assets/vrebo-main-img-v2.png`
- `new-figma-assets/vrebo-main-img-v3.png`
- `new-figma-assets/vrebo+building-images/Group 39.png`
- `reference-webflow/images/Vrebo-1.png`
- `reference-webflow/images/Vrebo-Bau.png`
- `reference-webflow/images/Group-30.png`
- `buenaparkjf_logo-typografie/design.jasonwalcott.BuenaParkJF.ttf`

Bewertung: Fuer Phase 4 wurde nur `Vrebo-3.png` als klare rote Wordmark uebernommen. Die Gebaeude-/Logo-Kombinationen wirken als grosses Markenmotiv interessant, sind aber fuer Header/Footer zu schwer und fuer Phase 4 nicht noetig. Die BuenaParkJF-Schrift bleibt ungenutzt, weil sie logo-nah ist und nicht als UI-Schrift dienen soll.

## Gefundene Favicon-Dateien

- `new-figma-assets/256x256-fav.png`
- `new-figma-assets/500x500fav.png`
- `new-figma-assets/fav32x32.png`
- `reference-webflow/images/favicon.png`
- `reference-webflow/images/webclip.png`
- bestehend im Zielprojekt: `public/favicon.svg`

Bewertung: `256x256-fav.png` wurde optimiert als Touch-/Brand-Favicon uebernommen. Das bestehende SVG-Favicon bleibt als schlanke Browser-Favicon-Datei bestehen; `SeoHead` verweist zusaetzlich auf die optimierte PNG-Datei als `apple-touch-icon`.

## Geeignete Hero-Bilder

- `new-figma-assets/IMG_20251213_134149.jpg`: echter Vrebo-Standort mit Fahrzeug, gut als Startseiten-Hero.
- `new-figma-assets/Bilder Webseite/komprimiert/bilder/20250301_142603.jpg`: echter Innenausbau, gut fuer die Leistungsuebersicht.
- `reference-webflow/images/bau-freilassing-p-1600.png`: Markenillustration, geeignet als spaeteres Brand-/UI-Motiv, aber kein echtes Projektfoto.
- `reference-webflow/videos/vrebo-bau_*` und `innenaufbau-Freilassing-01_*`: inhaltlich interessant, aber fuer Phase 4 wegen Groesse/Video-Performance nicht uebernommen.

## Geeignete Servicebilder

- Badsanierung: `Bilder Webseite/komprimiert/bad/20251022_153440.jpg`
- Trockenbau und Innenausbau: `Bilder Webseite/komprimiert/trockenbau/20221216_102551.jpg`
- Bodenverlegung: `Bilder Webseite/komprimiert/bilder/20240619_132114.jpg`
- Fenster und Tueren: `Bilder Webseite/komprimiert/tueren_und_fenster/20221107_130658.jpg` (normalisierte Schreibweise; Quellordner nutzt einen Umlaut)
- Renovierung und Neubau: `Bilder Webseite/komprimiert/renovierung/20251022_153448.jpg`
- Energetische Sanierung: `Bilder Webseite/komprimiert/bilder/20250219_121750.jpg`
- Abdichtung und Feuchtigkeitsschutz: `Bilder Webseite/komprimiert/bilder/20240605_082729.jpg`
- Aussenanlagen: `Bilder Webseite/komprimiert/pflastern/20230324_110729.jpg`

## Noch nicht geeignet oder bewusst nicht gesetzt

- Entruempelung und Rueckbau: keine ausreichend echte, passende Projektaufnahme gefunden. Die vorhandenen `canva/entruempelung*.png`-Motive wirken stock-/templatehaft und wurden nicht uebernommen.
- Hausmeisterservice und Objektpflege: optionaler Service, nicht Teil der Phase-4-Zielliste. Kein Bild gesetzt.
- Reine Berg-/Gartenmotive wie `komprimiert/garten/20220913_155902.jpg`: regional huebsch, aber fuer diese Phase zu dekorativ.
- QR-Codes, Visitenkarten-Designs und ZIP-Archive: nicht relevant fuer die Website-Bildbasis.

## Dateien, die zu gross sind

- `new-figma-assets/VID_20251116_115754.mp4`: ca. 62 MB.
- `new-figma-assets/VID_20251116_115754 - Trim.mp4`: ca. 51 MB.
- `reference-webflow/videos/vrebo-bau.mp4`: ca. 19 MB.
- `reference-webflow/videos/innenaufbau-Freilassing-01.mp4`: ca. 12 MB.
- Mehrere Rohfotos in `Abdul Website`, `Bilder Webseite/Foto` und `service-pictures` liegen bei ca. 3-7 MB und wurden nicht roh kopiert.
- `canva/.../widescrfeen.zip`: ca. 8 MB, nicht relevant.

## Templatehafte oder fremde Assets ausgeschlossen

- `reference-webflow/images/arvora-white.svg`: fremde Template-Brand.
- `reference-webflow/images/solar-*.avif`, `blog-banner_1blog-banner.avif`, `service-banner_1service-banner.avif`: thematisch Solar/Energie-Template, nicht Vrebo-spezifisch.
- `new-figma-assets/canva/*` und `service-pictures/neue bilder/canva/*`: groesstenteils stock-/templatehafte Motive; fuer Phase 4 nicht uebernommen.
- `vektoren/Rectangle *.png`: dekorative Vektor-/Figma-Schnitte ohne klaren Website-Nutzen.

## In Phase 4 uebernommen

| Ziel | Quelle | Ausgabe |
| --- | --- | --- |
| Wordmark | `new-figma-assets/Vrebo-3.png` | `public/images/brand/vrebo-wordmark.png` |
| Favicon PNG | `new-figma-assets/256x256-fav.png` | `public/images/brand/vrebo-favicon.png` |
| Startseiten-Hero | `new-figma-assets/IMG_20251213_134149.jpg` | `public/images/hero/vrebo-standort-fahrzeug.webp` |
| Leistungsuebersicht | `Bilder Webseite/komprimiert/bilder/20250301_142603.jpg` | `public/images/services/leistungsuebersicht-innenausbau.webp` |
| Badsanierung | `Bilder Webseite/komprimiert/bad/20251022_153440.jpg` | `public/images/services/badsanierung-badbereich.webp` |
| Trockenbau | `Bilder Webseite/komprimiert/trockenbau/20221216_102551.jpg` | `public/images/services/trockenbau-innenraum.webp` |
| Bodenverlegung | `Bilder Webseite/komprimiert/bilder/20240619_132114.jpg` | `public/images/services/bodenverlegung-holzoptikboden.webp` |
| Fenster und Tueren | `Bilder Webseite/komprimiert/tueren_und_fenster/20221107_130658.jpg` (normalisierte Schreibweise; Quellordner nutzt einen Umlaut) | `public/images/services/fenster-tueren-haustuer.webp` |
| Renovierung und Neubau | `Bilder Webseite/komprimiert/renovierung/20251022_153448.jpg` | `public/images/services/renovierung-neubau-flur.webp` |
| Energetische Sanierung | `Bilder Webseite/komprimiert/bilder/20250219_121750.jpg` | `public/images/services/energetische-sanierung-fenster.webp` |
| Abdichtung und Feuchtigkeitsschutz | `Bilder Webseite/komprimiert/bilder/20240605_082729.jpg` | `public/images/services/abdichtung-feuchtigkeitsschutz-terrasse.webp` |
| Aussenanlagen | `Bilder Webseite/komprimiert/pflastern/20230324_110729.jpg` | `public/images/services/aussenanlagen-plattenweg.webp` |

## Optimierung

- Alle Service- und Hero-Bilder wurden mit `sharp` nach WebP konvertiert und auf 1200-1400 px Breite begrenzt.
- Die Wordmark und das Favicon-PNG wurden verkleinert und als PNG mit Transparenz optimiert.
- Keine grossen Originalbilder oder Videos wurden in `public/` kopiert.
- `public/images/regional/` und `public/images/ui/` sind fuer spaetere kuratierte Assets vorbereitet, in Phase 4 aber bewusst leer.
