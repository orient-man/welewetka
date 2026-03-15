# Welewetka. Jak znikają Kaszuby

Strona internetowa spektaklu teatralnego "Welewetka. Jak znikają Kaszuby" — monodramu na podstawie książki reportażowej Stasi Budzisz, realizowanego przez Fundację Wiatrakcje.

**Live:** [welewetka.pl](https://welewetka.pl)

## O projekcie

Statyczna strona generowana przez [Hugo](https://gohugo.io/), hostowana na GitHub Pages. Zawiera informacje o spektaklu, książce, zespole twórczym, fundacji, recenzje prasowe, galerię zdjęć, sekcję aktualności oraz możliwość zamówienia spektaklu.

## Szybki start

```bash
# Wymaganie: Hugo extended edition (v0.144+)
brew install hugo

# Serwer deweloperski
hugo server -D

# Build produkcyjny
hugo --minify
```

Strona dostępna pod `http://localhost:1313/`.

## Struktura treści

| Strona | Plik | Opis |
|--------|------|------|
| Strona główna | `content/_index.md` | Hero, cytaty, terminy, intro |
| Spektakl | `content/spektakl.md` | Opis monodramu, premiera, tematyka |
| Książka | `content/ksiazka.md` | Dane wydawnicze, recenzje, link do zakupu |
| Zespół | `content/zespol.md` | 7 osób w YAML frontmatter |
| Fundacja | `content/fundacja.md` | KRS, misja, kontakt |
| Recenzje | `content/recenzje.md` | Cytaty prasowe w YAML frontmatter |
| Galeria | `content/galeria.md` | Auto-discovery zdjęć z `static/images/galeria/` |
| Zamów spektakl | `content/zamow.md` | Oferta, wymagania techniczne, kontakt |
| Aktualności | `content/aktualnosci/` | Blog z terminami i ogłoszeniami |

## Jak dodać treści

**Nowy wpis na blogu:**
```bash
# Utwórz plik content/aktualnosci/YYYY-MM-DD-slug.md
```
```yaml
---
title: "Tytuł wpisu"
date: 2025-12-01
summary: "Krótki opis."
tags: [terminarz]
venue: "Miejsce wydarzenia"
---
Treść wpisu w Markdown.
```

**Nowe zdjęcia w galerii:** wrzuć pliki `.jpg`/`.png` do `static/images/galeria/` — pojawią się automatycznie.

## Technologia

- **SSG:** Hugo extended edition
- **CSS:** Pure CSS z custom properties, bez frameworka
- **Fonty:** Playfair Display + Source Sans 3 (self-hosted woff2)
- **Lightbox:** GLightbox v3
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (auto-deploy na push do `main`)

## Licencja

Treści strony (teksty, zdjęcia) stanowią własność Fundacji Wiatrakcje.
