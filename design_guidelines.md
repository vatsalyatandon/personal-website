# Design Guidelines: Modern Minimalistic Blog

## Design Approach
**System-Based Approach**: This blog prioritizes readability, typography excellence, and content-first design. Drawing from Apple HIG's minimalism and Medium's content focus, with custom refinements for exceptional typography.

## Typography System

**Font Pairing**: Inter (sans-serif) + Playfair Display (serif)
- **Headlines**: Playfair Display, 600-700 weight
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 2rem (mobile)
  - H3: 1.75rem (desktop), 1.5rem (mobile)
- **Body Text**: Inter, 400 weight, 1.125rem, 1.7 line-height
- **Navigation/UI**: Inter, 500 weight, 1rem
- **Metadata** (dates, author): Inter, 400 weight, 0.875rem, uppercase tracking

## Layout & Spacing System

**Spacing Units**: Use multiples of 8px (Tailwind: 2, 4, 6, 8, 12, 16, 20, 24, 32)

**Container Strategy**:
- Content width: max-w-4xl (768px) for optimal reading
- Blog post content: max-w-prose (65-75 characters per line)
- Full-width sections: w-full with inner max-w-6xl

**Vertical Rhythm**:
- Section spacing: py-16 (mobile), py-24 (desktop)
- Component spacing: mb-8 to mb-12
- Paragraph spacing: mb-6

## Component Library

### Navigation
- Clean horizontal bar with logo/title on left, links on right
- Sticky positioning with subtle shadow on scroll
- Hamburger menu for mobile (slide-in drawer)
- Active page indicator with accent underline

### Home Page
- Hero section with large, elegant typographic statement (no image)
- Introductory paragraph in centered layout, max-w-2xl
- Recent posts preview grid (2 columns on desktop, 1 on mobile)

### Blog Posts Grid
- Card-based layout with featured images
- Each card: Full-width image (16:9 ratio), title, date, author, excerpt
- 2-column grid (desktop), single column (mobile/tablet)
- Hover effect: subtle lift and shadow increase

### Individual Blog Post
- Large title with date/author metadata below
- Featured image at full content width
- Body text with generous line-height and margins
- In-content images: full content width with captions
- Inter-paragraph spacing: mb-6

### Footer
- Two-section layout: Left (copyright/tagline), Right (social links)
- Social links as icon + text combinations
- Minimal border-top separator
- py-8 spacing

## Images

**Hero Images**: Not used on Home page (typography-first approach)

**Required Images**:
1. **Blog Featured Images** (3-4): Modern, high-quality stock photos related to content themes (16:9 ratio, ~1200x675px)
   - Technology/workspace scenes
   - Nature/landscapes
   - Abstract/minimalist compositions
2. **In-Content Images**: 2-3 per blog post, supporting article content (varying ratios acceptable)

All images should have subtle loading fade-in animation.

## Interactions

**Animations** (subtle only):
- Smooth scroll behavior (scroll-behavior: smooth)
- Link hover: subtle color shift to accent (200ms ease)
- Card hover: translateY(-4px) + shadow increase (300ms ease)
- Page transitions: 200ms fade-in on load
- Image loading: fade-in effect

**No complex animations** - maintain minimalist aesthetic.

## Accessibility
- Semantic HTML throughout
- ARIA labels on navigation and social links
- Focus states with visible outline
- Color contrast ratio 4.5:1 minimum
- Alt text on all images

This design emphasizes whitespace, typography hierarchy, and content readability over decorative elements, creating a premium, distraction-free reading experience.