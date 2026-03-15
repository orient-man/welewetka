## ADDED Requirements

### Requirement: Spektakl page
The system SHALL provide a page at `/spektakl/` describing the monodrama: form (monodram, ~1.5h), premiere date (12.11.2025, Kartuskie Centrum Kultury), thematic layers (kompleks kaszubski, tożsamość, pamięć, dekalog milczenia), information about the film "Ojcowizna" (1985) by Ireneusz Engler, and the key quote: "Jesteś tym, co pamiętasz, ale także tym, co chcesz ocalić".

#### Scenario: Spektakl page content
- **WHEN** a user visits `/spektakl/`
- **THEN** they see the monodrama description, premiere details, thematic description, film reference, and the key quote

### Requirement: Książka page
The system SHALL provide a page at `/ksiazka/` describing the book: title "Welewetka. Jak znikają Kaszuby", author Stasia Budzisz, publisher Wydawnictwo Poznańskie, year 2023, 304 pages, ISBN 9788367891387. The page SHALL include book reviews (Grzegorz Wysocki / Gazeta.pl, Agata Kasprolewicz / Raport o książkach) and a link to the publisher's store.

#### Scenario: Książka page content
- **WHEN** a user visits `/ksiazka/`
- **THEN** they see the book description, publication details, reviews, and a purchase link

### Requirement: Zespół page with YAML data
The system SHALL provide a page at `/zespol/` with data of 7 team members defined in YAML frontmatter: Aleksandra Engler-Malinowska (pomysłodawczyni, współautorka scenariusza), Ewelina Kaufmann (reżyserka), Aleksandra Długosz (aktorka), Stasia Budzisz (autorka książki), Weronika Korthals (muzyka), Paweł A. Nowak (akordeon), Milena Michalik-Sosulska (kostiumy). Each member SHALL be rendered as a card with name, role, and bio.

#### Scenario: Zespół page displays all members
- **WHEN** a user visits `/zespol/`
- **THEN** they see 7 team member cards, each with name, role, and biographical description

### Requirement: Fundacja page
The system SHALL provide a page at `/fundacja/` with information about Fundacja Wiatrakcje: KRS 0000749430, address (Lipy 4, 83-430 Stara Kiszewa), president (Weronika Knopik), mission, funding source (Instytut Różnorodności Językowej RP / Ministerstwo Kultury), and contact email (mailto link).

#### Scenario: Fundacja page content
- **WHEN** a user visits `/fundacja/`
- **THEN** they see the foundation's name, mission, leadership, funding information, and contact details

### Requirement: Recenzje page with YAML data
The system SHALL provide a page at `/recenzje/` with press reviews and audience reactions defined in YAML frontmatter. Each review SHALL include a quote, author name, and source. Reviews SHALL include: Grzegorz Wysocki (Gazeta.pl), Agata Kasprolewicz (Raport o książkach), Lucyna Puzdrowska (Zawsze Pomorze), Gracjana Potrękus (Pomerania), and reaction of Kartuzy mayor Mieczysław Gołuński.

#### Scenario: Recenzje page displays quotes
- **WHEN** a user visits `/recenzje/`
- **THEN** they see styled blockquote cards for each review with attribution

### Requirement: Galeria page
The system SHALL provide a page at `/galeria/` displaying photos from the performance in a responsive grid with lightbox functionality.

#### Scenario: Galeria page shows photo grid
- **WHEN** a user visits `/galeria/`
- **THEN** they see a responsive grid of performance photos that open in a lightbox on click

### Requirement: Zamów spektakl page
The system SHALL provide a page at `/zamow/` with an offer to book the performance: description (mobile monodrama, 1 actress + 1 musician, ~1.5h), technical requirements, and contact via mailto link with a prominent CTA button.

#### Scenario: Zamów page shows booking info
- **WHEN** a user visits `/zamow/`
- **THEN** they see the performance offer description, technical requirements, and a clearly visible contact button

### Requirement: Polish language content
All page content, navigation labels, date formatting, and UI text SHALL be in Polish.

#### Scenario: Polish dates
- **WHEN** a blog post date is rendered
- **THEN** the date is formatted in Polish (e.g., "12 listopada 2025")
