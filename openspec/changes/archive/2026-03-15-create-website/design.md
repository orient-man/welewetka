## Context

Repo `welewetka` jest puste — brak kodu, brak infrastruktury. Tworzymy stronę internetową od zera dla spektaklu teatralnego "Welewetka. Jak znikają Kaszuby". Strona ma pełnić rolę wizytówki projektu: informować o spektaklu i książce, prezentować zespół i fundację, pokazywać recenzje i galerię zdjęć, umożliwiać zamówienie spektaklu, oraz publikować aktualności i terminy.

Materiały treściowe zebrano w fazie explore: 3 artykuły prasowe (expresskaszubski.pl, kartuzy.info, zawszepomorze.pl), dane z Wydawnictwa Poznańskiego, KRS fundacji, filmpolski.pl, recenzja w Pomeranii po kaszubsku. Zdjęcia: 4 własne + potencjalnie więcej od fotografek (Jizabela Szwertfeger, Magda Dzienisz).

Stakeholderzy: Fundacja Wiatrakcje (Weronika Knopik), Aleksandra Engler-Malinowska (pomysłodawczyni spektaklu).

## Goals / Non-Goals

**Goals:**
- Jedno centralne miejsce z informacjami o spektaklu, terminach i kontakcie
- Strona statyczna, szybka, łatwa w utrzymaniu (edycja plików MD + push)
- Estetyka nawiązująca do morza i regionu Kaszub
- Responsywność (mobile-first)
- SEO: dobre meta tagi, Open Graph dla social media
- Galeria zdjęciowa z lightboxem
- Sekcja aktualności/blog do ogłaszania terminów

**Non-Goals:**
- Wielojęzyczność (strona tylko po polsku, nie po kaszubsku)
- CMS / panel administracyjny (treści zarządzane przez pliki MD w repozytorium)
- Formularz kontaktowy z backendem (wystarczy mailto:)
- E-commerce / sprzedaż biletów online
- Wersja kaszubskojęzyczna (może w przyszłości)
- Integracja z social media (poza linkami)

## Decisions

### 1. SSG: Hugo

**Decyzja:** Hugo extended edition.

**Dlaczego:** Markdown-first, szybki build (sekundy), dojrzały ekosystem shortcodes i partials, dobra integracja z GH Pages przez Actions, wbudowany blog, pełne wsparcie i18n (polskie daty).

**Alternatywy rozważone:**
- Jekyll — wolny build, ograniczona customizacja, stary ekosystem. Jedyna przewaga (native GH Pages) nieistotna przy GH Actions.
- Astro — nadmiar złożoności (framework JS) dla strony o 8 podstronach. Wymaga wiedzy React/Vue/Svelte.
- 11ty — dobry, ale mniejszy ekosystem i mniej dokumentacji niż Hugo.

### 2. Hosting: GitHub Pages + GitHub Actions

**Decyzja:** Deploy przez GH Actions workflow na push do `main`.

**Dlaczego:** Darmowe, niezawodne, zintegrowane z repo. Custom domena obsługiwana natywnie.

**Workflow:** `push main` → GH Actions uruchamia `hugo --minify` → deploy do GH Pages.

### 3. CSS: Pure CSS z custom properties

**Decyzja:** Brak frameworka CSS. Własne style z CSS custom properties (zmienne).

**Dlaczego:** 8 podstron nie uzasadnia Tailwinda ani Bootstrapa. Custom properties dają spójność (kolory, fonty w jednym pliku). Pełna kontrola nad estetyką. Zero zależności buildowych.

**Struktura:** Pliki CSS w `assets/css/` — importowane przez Hugo Pipes (minifikacja, fingerprinting).

### 4. Fonty: Self-hosted woff2

**Decyzja:** Playfair Display (nagłówki, serif) + Source Sans 3 (body, sans-serif). Pliki woff2 w `static/fonts/`.

**Dlaczego:** GDPR-safe (brak requestów do Google). Szybsze (brak dodatkowego DNS lookup). Woff2 to najlżejszy format.

### 5. Lightbox: GLightbox

**Decyzja:** GLightbox v3.x (~2KB gzip, zero zależności).

**Dlaczego:** Lekki, natywny lazy loading, swipe na mobile, łatwa inicjalizacja. Nie wymaga jQuery ani żadnych zależności.

**Alternatywy:** Fancybox (wymaga jQuery, cięższy), Lightbox2 (stary, mniej mobile-friendly).

### 6. Dane zespołu i recenzji: YAML frontmatter

**Decyzja:** Dane osób (7) i cytatów recenzji w frontmatter YAML odpowiednich plików MD, nie osobne pliki per osoba.

**Dlaczego:** Przy 7 osobach i kilkunastu cytatach osobne pliki to nadmiar struktury. Frontmatter + partial template jest prostsze w zarządzaniu.

### 7. Nawigacja: Płaska, 8 pozycji

**Decyzja:** Wszystkie 8 pozycji widoczne na desktop. Hamburger menu na mobile.

**Kolejność:** Spektakl | Książka | Zespół | Fundacja | Recenzje | Galeria | Zamów spektakl | Aktualności

**Dlaczego:** Strona jest mała, hierarchia (dropdown) byłaby sztuczna. 8 pozycji mieści się w jednym wierszu nawigacji na desktop.

### 8. Paleta kolorów: Morsko-kaszubska

**Decyzja:** Ciepła, morska paleta.

| Rola | Hex | Opis |
|------|-----|------|
| Tło główne | `#FAFAF7` | Kremowa biel |
| Tło alternate | `#F0E9DD` | Ciepły piasek |
| Primary | `#1B3A5C` | Ciemny granat morski |
| Secondary | `#4A7C9B` | Bałtyk |
| Accent/CTA | `#C17B3A` | Bursztyn |
| Tekst | `#2C2C2C` | Ciemny grafitowy |

### 9. Architektura katalogów

```
welewetka/
├── config/_default/           # Hugo config (toml)
├── content/                   # Treści MD
│   ├── _index.md              # Strona główna
│   ├── spektakl.md
│   ├── ksiazka.md
│   ├── zespol.md
│   ├── fundacja.md
│   ├── recenzje.md
│   ├── galeria.md
│   ├── zamow.md
│   └── aktualnosci/           # Blog
├── assets/css/                # Style (Hugo Pipes)
├── assets/js/                 # JS (nav + GLightbox)
├── layouts/                   # Szablony Hugo
│   ├── _default/              # baseof, single, list
│   ├── index.html             # Strona główna
│   ├── partials/              # head, nav, footer, cards
│   └── shortcodes/            # gallery, cta-button
├── static/                    # Pliki statyczne
│   ├── images/                # Zdjęcia
│   ├── fonts/                 # Woff2
│   └── CNAME                  # Domena custom
└── .github/workflows/         # CI/CD
```

## Risks / Trade-offs

**[Mało zdjęć (4 szt.)] → Galeria startuje z ograniczonym materiałem.** Mitigation: strona działa z 4 zdjęciami. Galeria zaprojektowana na dynamiczną liczbę — dodanie zdjęć to wrzucenie plików do katalogu.

**[Brak CMS] → Aktualizacja wymaga edycji plików MD i push do git.** Mitigation: to świadomy trade-off. Alternatywa (Netlify CMS, Forestry) dodaje złożoność. Pliki MD są proste do edycji. W przyszłości można dodać headless CMS.

**[Custom temat = więcej pracy] → Dłuższy czas implementacji niż z gotowym motywem.** Mitigation: design jest jasno zdefiniowany, paleta i typografia ustalone. Zakres HTML/CSS jest ograniczony (8 podstron, kilka partials).

**[Brak formularza kontaktowego] → Mailto: może być mniej wygodne.** Mitigation: akceptowalne dla tej skali projektu. Formularz można dodać później (Formspree, Google Forms).

**[Hugo wymaga instalacji lokalnej do podglądu] → Próg wejścia dla nie-programistów.** Mitigation: treści można edytować bezpośrednio na GitHub (web editor). Podgląd przez GH Actions deploy. Lokalny Hugo potrzebny tylko do dewelopmentu szablonów.
