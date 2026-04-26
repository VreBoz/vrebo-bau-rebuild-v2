# Final Design Refinement

## Ziel

Diese Phase verfeinert den bestehenden Vrebo-Auftritt, ohne einen neuen Rebuild oder Stilbruch einzufuehren. Der Fokus liegt auf Markencharakter, regionaler Identitaet, ruhiger Premium-Wirkung und stabilen Micro-Interactions.

## Umgesetzte Designentscheidungen

- Die Startseite behaelt das echte Standort-/Fahrzeugbild als authentischen Hero, wurde aber in Crop, Overlay, CTA-Balance, lokaler Signatur und Brand-Badge veredelt.
- Die Vrebo-Wortmarke wird gezielt in Header, Hero-Badge, Footer, Kontakt-/Ueber-uns-Brandcards und OG-Bild eingesetzt.
- Das regionale Watzmann-/Bergmotiv aus dem Visitenkartenstil wurde als dezente Silhouette optimiert und nur in ausgewählten dunklen oder warmen Flaechen genutzt.
- Diagonale Akzente aus dem Brand-/Visitenkartenkontext wurden subtil in Page-Heros, Service-Detailseiten und CTA-Flaechen aufgenommen.
- Button-Hover wurden beruhigt: keine Transform-Spruenge, keine wechselnden Border-/Padding-Groessen, keine gradient-to-solid Blinkeffekte.
- Service-Detailseiten erhielten staerkere Hero-Flaechen, Quick-Prooflines, Akzentkanten und markantere CTA-/Related-Bereiche.
- Kontakt und Ueber uns wurden mit ruhigeren Flaechen, Markenmomenten und regionaler Einordnung hochwertiger gestaltet.
- Footer wurde als dunkler Markenabschluss mit Wortmarke, Brandline und regionaler Silhouette ausgebaut.

## SEO und technische Grenzen

- SEO-Struktur, JSON-LD-Komponenten, Sitemap, Robots, Kontaktformular und Redirect-Dateien wurden nicht strukturell veraendert.
- Das globale OG-Defaultbild wurde auf `public/images/brand/vrebo-og-card.webp` gesetzt. Die Startseite nutzt dieses Bild explizit als OG-Bild; Service-Seiten koennen weiterhin ihre Leistungsbilder ausspielen.
- Es wurden keine fremden Template-Assets, Webflow-Klassen oder Referenzprojekt-Aenderungen eingefuehrt.

## Noch offen vor Launch

- Finale Kontaktangaben, Telefonnummer und Adresse bestaetigen.
- Kontaktformular auf dem Zielhosting serverseitig testen.
- Datenschutz und Impressum rechtlich final pruefen lassen.
- Bildrechte/Nutzungsrechte der verwendeten Vrebo- und Regionalassets final bestaetigen.
- Robots/Canonical/Sitemap nach finalem Production-Build auf `https://vrebo-bau.de` live pruefen.

## Homepage Design Revision

Diese Phase hebt gezielt nur die Startseite sichtbar staerker an. Sie ist keine kleine Politur, sondern eine neue Homepage-Dramaturgie innerhalb der bestehenden Vrebo-Marke.

### Hero

- Der Hero wurde von einer klassischen Text/Bild-Split-Flaeche zu einer grossen, dunklen Bildbuehne mit echter Standort-/Fahrzeugaufnahme weiterentwickelt.
- Text, CTA und Trust-Signale liegen jetzt in einer klaren, hochwertigen Dramaturgie auf dem Bildmotiv.
- Die neue Trustbar im unteren Hero-Bereich verdichtet direkte Abstimmung, saubere Ausfuehrung und regionale Erreichbarkeit.
- Das optimierte Gebaeude-/Markenmotiv aus den neuen Figma-Assets wird nur subtil als Brand-Layer eingesetzt.

### Leistungsuebersicht

- Die Startseite nutzt nicht mehr das normale Kartenraster als erste Leistungsdramaturgie.
- Ein grosser Featured-Service mit Bildinszenierung fuehrt die Sektion an; weitere Leistungsbereiche stehen als ruhige, scanbare Service-Zeilen daneben.
- Die Leistungsseite selbst behaelt ihre kompaktere Uebersichtslogik, damit die Revision auf die Homepage fokussiert bleibt.

### Trust, Prozess, FAQ und CTA

- Warum-Vrebo wurde als dunkle, markige Vertrauenszäsur neu komponiert.
- Die Prozessdarstellung wurde in eine ruhigere Timeline mit klarer Einstiegsnotiz ueberfuehrt.
- Der FAQ-Bereich wurde als besser eingebundene Beratungsflaeche mit direkter Kontaktoption verfeinert.
- Der Abschluss-CTA wurde als staerkerer dunkler Markenabschluss mit Wortmarke, Brand-Layer und klarer naechster Handlung gestaltet.

### Technische Hinweise

- SEO, JSON-LD, Sitemap, Robots und Kontaktformularlogik wurden nicht strukturell veraendert.
- Die Revision arbeitet mit Homepage-spezifischen Props in bestehenden Section-Komponenten, damit andere Seiten nicht unbeabsichtigt umgebaut werden.
- Desktop wurde per Chrome-Headless-Screenshot visuell geprueft. Die Chrome-CLI-Mobile-Screenshot-Funktion lieferte in dieser Umgebung nur einen schmalen Crop eines breiteren Layouts; die Mobile-Breakpoints und Typografie wurden dennoch gezielt abgesichert.
