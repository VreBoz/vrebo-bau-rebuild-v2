# SEO Audit: Phase 6

## Aktuelle SEO-Struktur

- Astro baut statische Kernseiten, Leistungsdetailseiten, `robots.txt` und `sitemap.xml`.
- SEO läuft zentral über `src/components/layout/SeoHead.astro` und `src/data/site.ts`.
- Leistungsseiten beziehen Title, Description, Service-Typ, Regionen und strukturierte Daten aus der Content Collection.
- JSON-LD-Helfer liegen in `src/utils/structuredData.ts`.
- Die final geplante Production-Domain ist `https://vrebo-bau.de`.
- Die aktuelle Testdomain ist `https://testvrebo.de` und soll nicht indexiert werden.

## Empfohlene Titles und Descriptions

| Route | Title | Description |
| --- | --- | --- |
| `/` | Bauunternehmen in Freilassing für Renovierung & Sanierung | Vrebo Bau begleitet Renovierung, Sanierung, Innenausbau und Badsanierung in Freilassing, Bad Reichenhall und dem Berchtesgadener Land. |
| `/leistungen` | Leistungen für Renovierung & Sanierung in Freilassing | Leistungen von Vrebo Bau für Renovierung, Sanierung, Innenausbau, Badsanierung und objektnahe Arbeiten in Freilassing und Umgebung. |
| `/ueber-uns` | Über Vrebo Bau in Freilassing | Vrebo Bau steht für regionale Nähe, saubere Arbeitsweise und direkte Abstimmung bei Bau- und Sanierungsprojekten in Freilassing. |
| `/kontakt` | Kontakt zu Vrebo Bau in Freilassing | Kontakt für Renovierung, Sanierung, Badsanierung und Ausbau mit Vrebo Bau in Freilassing, Bad Reichenhall und Umgebung. |
| `/datenschutz` | Datenschutz | Datenschutzhinweise für die Website von Vrebo Bau in Freilassing. |
| `/impressum` | Impressum | Impressum und Anbieterkennzeichnung von Vrebo Bau in Freilassing. |
| `/404` | Seite nicht gefunden | Die gesuchte Seite wurde nicht gefunden. Von hier aus gelangen Sie zurück zu Vrebo Bau, den Leistungen oder zur Kontaktseite. |
| `/leistungen/renovierung-neubau` | Renovierung & Neubau in Freilassing | Vrebo Bau begleitet Renovierung, Modernisierung und bauliche Anpassungen in Freilassing, Bad Reichenhall und Umgebung. |
| `/leistungen/energetische-sanierung` | Energetische Sanierung in Freilassing | Energetische Sanierung mit Vrebo Bau in Freilassing: bauliche Modernisierung, Anschlüsse und Vorbereitung am Bestand. |
| `/leistungen/badsanierung` | Badsanierung in Freilassing | Badsanierung mit Vrebo Bau: Badmodernisierung, Vorbereitung, Abdichtung und Innenausbau in Freilassing und Bad Reichenhall. |
| `/leistungen/trockenbau-innenausbau` | Trockenbau in Freilassing | Trockenbau und Innenausbau mit Vrebo Bau: Raumaufteilung, Wand- und Deckenarbeiten in Freilassing und Berchtesgadener Land. |
| `/leistungen/bodenverlegung` | Bodenverlegung in Freilassing | Bodenverlegung mit Vrebo Bau: Untergrundprüfung, Materialabstimmung und saubere Anschlüsse in Freilassing und Umgebung. |
| `/leistungen/fenster-tueren` | Fenster und Türen in Freilassing | Fenster und Türen mit Vrebo Bau: Austausch, Einbau und Anschlussarbeiten in Freilassing, Bad Reichenhall und Umgebung. |
| `/leistungen/abdichtung-feuchtigkeitsschutz` | Abdichtung in Freilassing | Abdichtung und Feuchtigkeitsschutz mit Vrebo Bau für sensible Bauteile, Feuchtraumbereiche und Sanierung in Freilassing. |
| `/leistungen/aussenanlagen` | Außenanlagen in Freilassing | Außenanlagen mit Vrebo Bau: Wege, Flächen und objektnahe Arbeiten in Freilassing, Bad Reichenhall und Umgebung. |
| `/leistungen/entruempelung-rueckbau` | Entrümpelung & Rückbau in Freilassing | Entrümpelung und Rückbau mit Vrebo Bau als Vorbereitung für Renovierung, Sanierung oder Übergabe in Freilassing und Umgebung. |
| `/leistungen/hausmeisterservice-objektpflege` | Hausmeisterservice & Objektpflege in Freilassing | Hausmeisterservice und Objektpflege mit Vrebo Bau: abgestimmte Betreuung, kleinere Arbeiten und Pflege rund um Objekte in Freilassing und Umgebung. |

## Canonical-Strategie

- Canonicals werden zentral aus `SITE.url` und dem jeweiligen Pfad gebildet.
- `SITE.url` kommt aus `PUBLIC_SITE_URL`; ohne Variable fällt es auf `https://vrebo-bau.de` zurück.
- Für den finalen Production-Build sollte `PUBLIC_SITE_URL=https://vrebo-bau.de` gesetzt werden.
- Für die Testdomain kann `PUBLIC_SITE_URL=https://testvrebo.de` gesetzt werden, bleibt aber wegen Robots/Meta noindex nicht indexierbar.

## Robots- und Noindex-Strategie

- Indexierung ist nur aktiv, wenn beide Bedingungen erfüllt sind:
  - `PUBLIC_SITE_ENV=production`
  - `PUBLIC_INDEXABLE=true`
- Ohne eindeutige Production-Freigabe erzeugt die Website `noindex,nofollow` und `robots.txt` mit `Disallow: /`.
- Für `https://testvrebo.de` keine `PUBLIC_INDEXABLE=true`-Freigabe setzen.
- Beispiel finaler Launch-Build:

```powershell
$env:PUBLIC_SITE_ENV='production'
$env:PUBLIC_SITE_URL='https://vrebo-bau.de'
$env:PUBLIC_INDEXABLE='true'
npm run build
```

## Sitemap-Strategie

- `src/pages/sitemap.xml.ts` listet Kernseiten und alle Leistungsseiten aus der Content Collection.
- `/404` wird bewusst nicht in die Sitemap aufgenommen.
- Test-/interne Routen und Referenzprojekte tauchen nicht in der Sitemap auf.

## JSON-LD-Strategie

- Startseite: `Organization`, `LocalBusiness`, `WebSite`, `WebPage`.
- Leistungsseiten: `WebPage`, `Service`, `BreadcrumbList`.
- Kontaktseite: `ContactPage`, `BreadcrumbList`.
- Über-uns-Seite: `AboutPage`, `BreadcrumbList`.
- Legal- und allgemeine Seiten: `WebPage`, `BreadcrumbList`.
- `LocalBusiness` bleibt bewusst generisch, weil spezifischere Bau-Schema-Typen vor Launch nicht fachlich bestätigt sind.
- Telefonnummer, E-Mail, Straße und PLZ werden nicht erfunden; fehlende Werte bleiben leer und werden aus JSON-LD ausgelassen.

## Redirect-Strategie

Die Apache/IONOS-Hauptlösung liegt in `public/.htaccess`. Details stehen in `docs/redirect-strategy.md`.

| Alte Route | Neue Route |
| --- | --- |
| `/service/innenausbau` | `/leistungen/trockenbau-innenausbau` |
| `/service/tueren-und-fenster` | `/leistungen/fenster-tueren` |
| `/service/entruempelung` | `/leistungen/entruempelung-rueckbau` |
| `/service/hausmeisterservice` | `/leistungen/hausmeisterservice-objektpflege` |
| `/service/boden-verlegen` | `/leistungen/bodenverlegung` |
| `/service/badsanierung` | `/leistungen/badsanierung` |

## Offene Punkte vor Launch

- Echte Kontaktangaben, Adresse, Telefonnummer und E-Mail final bestätigen und in `src/data/site.ts` ergänzen.
- Rechtliche Texte für Datenschutz und Impressum final prüfen lassen.
- Bildrechte und Nutzungsrechte der verwendeten Assets bestätigen.
- Hausmeisterservice/Objektpflege ist sichtbar geschaltet; Umfang und Bildauswahl vor Launch fachlich final freigeben.
- Prüfen, ob `.htaccess` auf dem finalen IONOS-Paket aktiv ist.
- Dediziertes OG-Bild im Format 1200x630 px kann später ergänzt werden; aktuell wird das kuratierte Hero-Bild genutzt.
- Nach finalem Build robots, Canonicals und Sitemap auf `https://vrebo-bau.de` live prüfen.
