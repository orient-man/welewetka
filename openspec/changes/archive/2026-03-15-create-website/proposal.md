## Why

Spektakl teatralny "Welewetka. Jak znikają Kaszuby" — monodram na podstawie książki Stasi Budzisz — jest aktywnie grany, ale nie ma centralnego miejsca z informacjami o projekcie. Potencjalni widzowie nie wiedzą, gdzie i kiedy odbywają się kolejne spektakle (komentarze pod artykułami prasowymi to potwierdzają). Instytucje kultury nie mają łatwego sposobu, by zamówić przedstawienie. Strona internetowa rozwiąże oba te problemy i stanie się wizytówką projektu realizowanego przez Fundację Wiatrakcje.

## What Changes

- Utworzenie statycznej strony internetowej generowanej przez Hugo z plików Markdown
- Hosting na GitHub Pages pod domeną `welewetka.orientman.com`
- Custom temat Hugo (od zera) z morsko-kaszubską estetyką
- Strona główna z hero, cytatami i terminarzem najbliższych spektakli
- Podstrona "Spektakl" — opis monodramu, forma, tematyka, dekalog milczenia
- Podstrona "Książka" — reportaż Stasi Budzisz, dane wydawnicze, linki do zakupu
- Podstrona "Zespół" — profile twórczyń i twórców (7 osób)
- Podstrona "Fundacja" — Fundacja Wiatrakcje, misja, dofinansowanie, kontakt
- Podstrona "Recenzje" — cytaty z prasy i reakcje publiczności
- Podstrona "Galeria" — zdjęcia ze spektaklu z lightboxem (GLightbox)
- Podstrona "Zamów spektakl" — oferta wystawienia + kontakt mailto:
- Sekcja "Aktualności" — blog z terminami spektakli i ogłoszeniami
- Pure CSS (bez frameworka), self-hosted fonty, responsywny design
- Wszystkie treści w języku polskim

## Capabilities

### New Capabilities

- `hugo-project-setup`: Konfiguracja projektu Hugo, struktura katalogów, GH Actions deploy, domena custom
- `custom-theme`: Custom temat Hugo — layouts, partials, shortcodes, CSS z morsko-kaszubską paletą kolorów, responsywność
- `content-pages`: Treści statycznych podstron (spektakl, książka, zespół, fundacja, recenzje, galeria, zamów spektakl)
- `blog-aktualnosci`: System aktualności/bloga z listą wpisów, tagami i datami
- `photo-gallery`: Galeria zdjęciowa z lightboxem (GLightbox) i responsywnym gridem

### Modified Capabilities

<!-- Brak istniejących specyfikacji — projekt startuje od zera -->

## Impact

- Nowa struktura w istniejącym repo `welewetka`
- Wymagana konfiguracja DNS: `welewetka.orientman.com` → GitHub Pages
- Zależności: Hugo (extended edition), GitHub Actions runner
- Zdjęcia ze spektaklu: obecnie 4, potrzeba 8-12+
- Treści do podstron zostaną napisane na podstawie materiałów zebranych w fazie explore (artykuły prasowe, dane z KRS, filmpolski.pl, recenzja w Pomeranii)
