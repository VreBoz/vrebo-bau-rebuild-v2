# Kontaktformular-Strategie

## Aktueller Stand

Die Kontaktseite `/kontakt` nutzt eine eigene Formular-Komponente:

- Datei: `src/components/sections/ContactForm.astro`
- Einbindung: `src/pages/kontakt.astro`
- Formularziel: `/contact.php`
- Methode: `POST`
- Fallback: sichtbarer Mailto-Link an `info@vrebo-bau.de`
- Statusmeldungen: `?status=success`, `?status=error`, `?status=invalid`

Das Formular fragt bewusst nur die wichtigsten Angaben ab:

- Name
- E-Mail
- Telefon optional
- Leistung / Projektart
- Ort / Objekt optional
- Nachricht
- Honeypot-Feld `website`
- kurzer Datenschutz-Hinweis mit Link zur Datenschutzerklaerung

## Empfehlung fuer IONOS/FTP-Hosting

Die Website ist statisch gebaut und wird voraussichtlich per FTP auf IONOS ausgeliefert. Fuer diesen Fall ist die einfachste Versandstrategie:

1. Astro baut die statischen Seiten nach `dist/`.
2. `public/contact.php` wird beim Build nach `dist/contact.php` kopiert.
3. Das Kontaktformular sendet per `POST` an `/contact.php`.
4. PHP validiert die Anfrage und leitet zur Kontaktseite zurueck.

Wichtig: PHP-Verfuegbarkeit auf dem IONOS-Webspace wurde in diesem Projekt noch nicht geprueft. Wenn PHP auf dem IONOS-Webspace aktiv ist, kann die PHP-Variante verwendet werden.

## PHP-Variante

Die vorbereitete Datei `public/contact.php` setzt um:

- nur `POST`-Verarbeitung
- Honeypot-Pruefung ueber das versteckte Feld `website`
- Pflichtfeld-Pruefung fuer Name, E-Mail und Nachricht
- E-Mail-Formatpruefung
- Mindestlaenge fuer die Nachricht
- einfache Spam-Bremse ueber Honeypot, Mindestzeit und URL-Anzahl
- Rueckleitung mit `303` zu `/kontakt?status=...#anfrage`
- keine sensiblen Zugangsdaten im Code

Die echte Empfaengeradresse ist absichtlich nicht hart codiert. Vor Livegang muss eine der beiden Varianten gewaehlt werden:

- bevorzugt: Environment-Variable `VREBO_CONTACT_TO` auf dem Hosting setzen
- alternativ: Platzhalter `TODO_RECIPIENT_EMAIL` in `public/contact.php` durch die final freigegebene Empfaengeradresse ersetzen

Optional kann `VREBO_CONTACT_FROM` gesetzt werden, falls der IONOS-Mailversand eine feste Absenderadresse verlangt.

## Mailto-Fallback

Im Formular ist ein sichtbarer Link "Direkt per E-Mail" vorhanden. Er nutzt aktuell `info@vrebo-bau.de`, weil diese Adresse im alten Webflow-Bestand der Website vorkommt.

Vor Livegang muss diese Adresse final bestaetigt werden. Wenn sich die finale Adresse aendert, muss sie in `src/components/sections/ContactForm.astro` und in der PHP-Konfiguration angepasst werden.

## Externe Formularservice-Alternative

Falls PHP auf IONOS nicht aktiv ist oder `mail()` auf dem Hosting nicht verlaesslich sendet, kann das Formular auf einen externen Formularservice umgestellt werden. Geeignete Optionen waeren zum Beispiel:

- Formspree
- Basin
- Getform
- ein eigener kleiner API-Endpunkt auf einem separaten Hosting

Dafuer muesste nur `action="/contact.php"` in `ContactForm.astro` auf den Service-Endpunkt geaendert werden. Felder, Honeypot und Datenschutz-Hinweis koennen weitgehend bleiben.

## Offene Punkte vor Livegang

- PHP auf dem konkreten IONOS-Paket pruefen.
- Testen, ob `contact.php` auf der Testdomain serverseitig ausgefuehrt wird.
- Testen, ob `mail()` auf IONOS zustellt oder ob SMTP/externer Service noetig ist.
- Finale Empfaengeradresse bestaetigen.
- Finale Absenderadresse fuer den Serverversand festlegen.
- Datenschutz und Impressum rechtlich final pruefen.
- Entscheiden, ob Telefonnummer und Adresse wieder sichtbar in die V2-Kontaktseite und in strukturierte Daten aufgenommen werden.
- Testanfrage auf Staging senden und Erfolg/Fehler/Validierung dokumentieren.

## Echte Daten, die noch fehlen oder bestaetigt werden muessen

- finale Empfaengeradresse fuer das Kontaktformular
- finale Absenderadresse fuer PHP-Mailversand
- final freigegebene Telefonnummer
- final freigegebene postalische Adresse
- rechtlich freigegebener Datenschutzhinweis fuer Formularverarbeitung
- Entscheidung, ob die Mailadresse `info@vrebo-bau.de` weiter die oeffentliche Kontaktadresse bleibt
