---
name: Cinematic Creative
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#444650'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#0c6780'
  on-secondary: '#ffffff'
  secondary-container: '#9ae1ff'
  on-secondary-container: '#09657f'
  tertiary: '#330000'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a0001'
  on-tertiary-container: '#f35f4e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#baeaff'
  secondary-fixed-dim: '#89d0ed'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d62'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#8d150e'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
  glass-white: rgba(255, 255, 255, 0.7)
  deep-navy: '#001A4D'
  pure-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-xl: 120px
---

## Brand & Style

This design system is built for a multidisciplinary creative whose work demands a balance of artistic storytelling and high-end professional polish. The aesthetic leans into a **Modern Cinematic** movement—marrying the "Apple-level" cleanliness of minimalist tech with the dramatic flair of a creative agency.

The design should feel:
- **Premium & Curated:** High whitespace and intentional placement of elements.
- **Cinematic:** Large-scale imagery, immersive depth, and smooth, choreographed transitions.
- **Approachable yet Elite:** Soft curves and glassmorphic layers mitigate the coldness of traditional minimalism, making the portfolio feel inviting and tactile.

## Colors

The palette is anchored by **Deep Royal Blue**, providing a sense of authority and depth akin to a night sky. **Sky Blue** acts as a vibrant highlight, used primarily for interactive elements and subtle gradients that evoke airiness.

**Key Implementation Rules:**
- **Backgrounds:** Use `#F5F7FA` for the primary canvas to reduce eye strain compared to pure white. Reserve `#FFFFFF` for elevated cards and glassmorphic containers.
- **Gradients:** Use linear gradients from Sky Blue to transparent for light-leak effects or subtle section transitions.
- **Accents:** Use the extracted warm red (`#EA5948`) sparingly for high-attention call-to-actions or unique artistic labels to provide a striking contrast against the cool-toned palette.

## Typography

The typographic hierarchy relies on the tension between the classic elegance of **Playfair Display** and the systematic clarity of **Inter**.

- **Headlines:** Use Playfair Display for all major titles. Apply wide letter spacing to smaller headings to evoke a "luxury editorial" feel.
- **Body Text:** Inter provides a neutral, highly readable ground for descriptions and technical details.
- **Meta/Labels:** Use Montserrat for UI labels, tags, and small captions. The geometric nature of Montserrat complements the sharp Inter body text while adding a touch of personality.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for content clarity, centered within a fluid canvas. 

- **Desktop:** 12-column grid with a 1440px max-width. Large 80px margins create a "frame" around the content, reinforcing the cinematic feel.
- **Section Spacing:** Use generous vertical stacks (120px+) to allow the portfolio pieces room to breathe.
- **Reflow:** On mobile, margins shrink to 24px and the grid collapses to 4 columns. Imagery should remain full-bleed where possible to maintain impact.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Ambient Shadows**.

- **Base Layer:** The bluish-grey background.
- **Mid Layer:** Pure white cards with ultra-soft, diffused shadows (Blur: 40px, Opacity: 4% Black). 
- **Top Layer:** Glassmorphic navigation bars and modal overlays. Use a backdrop blur of `20px` and a semi-transparent white fill (`rgba(255,255,255,0.7)`).
- **Outlines:** Instead of heavy borders, use 1px solid strokes in a slightly darker shade of the background color to define boundaries subtly.

## Shapes

The shape language is defined by large, generous radii that feel "squishy" and premium. 

- **Primary Radius:** 24px (used for cards, large buttons, and image containers).
- **Pill Shapes:** Reserved for "Tags" and "Status Chips" to provide a distinct visual contrast from the structured cards.
- **Interactive Elements:** Buttons should use a 24px radius to match the card corners, creating a cohesive visual unit.

## Components

### Buttons
- **Primary:** Deep Royal Blue fill with white Inter text (Medium weight). 24px corner radius.
- **Secondary:** Transparent fill with a 1px Royal Blue border.
- **Glass Button:** Semi-transparent white with backdrop blur for use over dark imagery.

### Cards
- Use for project features. Cards must have a 24px corner radius and a subtle ambient shadow. Headlines within cards should use Playfair Display Medium.

### Input Fields
- Soft grey background (`#F5F7FA`) with no border until focused. On focus, use a 1px Sky Blue border and a soft outer glow.

### Chips/Tags
- Small, pill-shaped elements using Montserrat Bold at 10px. Backgrounds should be low-saturation versions of the accent colors.

### Progress Indicators
- Use smooth, eased transitions for any loading states or scroll indicators. The motion should feel "weighted" and intentional, not abrupt.