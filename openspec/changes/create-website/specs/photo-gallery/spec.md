## ADDED Requirements

### Requirement: Gallery shortcode
The system SHALL provide a Hugo shortcode `{{< gallery >}}` that renders a responsive grid of images from `static/images/galeria/`.

#### Scenario: Gallery renders all images
- **WHEN** the galeria page uses `{{< gallery >}}`
- **THEN** all images in `static/images/galeria/` are displayed in a responsive grid

### Requirement: Responsive grid layout
The gallery grid SHALL display 3 columns on desktop (>1024px), 2 columns on tablet (768-1024px), and 1 column on mobile (<768px).

#### Scenario: Desktop gallery grid
- **WHEN** the viewport is wider than 1024px
- **THEN** gallery images display in a 3-column grid

#### Scenario: Mobile gallery grid
- **WHEN** the viewport is narrower than 768px
- **THEN** gallery images stack in a single column

### Requirement: Lightbox with GLightbox
The system SHALL use GLightbox to display full-size images when thumbnails are clicked. Navigation between images SHALL be possible via arrow keys and swipe gestures on mobile.

#### Scenario: Image opens in lightbox
- **WHEN** a user clicks a gallery thumbnail
- **THEN** the full-size image opens in a lightbox overlay with close button

#### Scenario: Lightbox navigation
- **WHEN** a lightbox is open
- **THEN** the user can navigate to the next/previous image via arrows or swipe

### Requirement: Lazy loading
Gallery images SHALL use `loading="lazy"` attribute to defer loading of off-screen images.

#### Scenario: Off-screen images not loaded immediately
- **WHEN** the gallery page is loaded
- **THEN** only visible images are loaded initially; remaining images load as the user scrolls

### Requirement: Alt text
Each gallery image SHALL have an `alt` attribute derived from the image filename (cleaned of dashes and extensions) or from optional metadata.

#### Scenario: Images have alt text
- **WHEN** the gallery is rendered
- **THEN** every `<img>` tag has a non-empty `alt` attribute
