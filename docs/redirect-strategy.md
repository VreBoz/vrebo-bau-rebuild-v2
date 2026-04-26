# Redirect Strategy: Legacy Service Routes

## Ziel

Alte Webflow-Service-Routen sollen nach dem Launch nicht ins Leere laufen. Da die Website voraussichtlich statisch per IONOS/FTP ausgeliefert wird, ist eine einfache Apache-`.htaccess`-Strategie die Hauptlösung.

## Umgesetzt

Die Datei `public/.htaccess` wird beim Build nach `dist/.htaccess` kopiert und enthält minimale `Redirect 301`-Regeln:

| Alte Route | Neue Route |
| --- | --- |
| `/service/innenausbau` | `/leistungen/trockenbau-innenausbau` |
| `/service/tueren-und-fenster` | `/leistungen/fenster-tueren` |
| `/service/entruempelung` | `/leistungen/entruempelung-rueckbau` |
| `/service/hausmeisterservice` | `/leistungen/hausmeisterservice-objektpflege` |
| `/service/boden-verlegen` | `/leistungen/bodenverlegung` |
| `/service/badsanierung` | `/leistungen/badsanierung` |

## Hinweise

- Die Regeln sind bewusst host-neutral und enthalten keine testdomain- oder production-spezifischen Bedingungen.
- Vor Launch auf IONOS prüfen, ob `.htaccess` im gewählten Hosting-Paket aktiv ist.
- Falls Objektpflege nicht sichtbar bleiben soll, `/service/hausmeisterservice` vor Launch auf `/leistungen` ändern.
- Weitere alte Routen aus Webflow wie Blog, Search oder Template-Seiten sollten separat entschieden werden, statt blind weitergeleitet zu werden.
