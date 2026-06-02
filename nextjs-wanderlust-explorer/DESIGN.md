---
name: Horizon Ethos
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  section-gap: 5rem
---

## Brand & Style
The design system is engineered for a premium travel-tech experience that balances the precision of high-end logistics with the emotional expansiveness of global exploration. The brand personality is authoritative yet inspiring, leaning into a **Modern Minimalist** aesthetic that prioritizes clarity and high-quality photography over decorative elements. 

The UI should evoke a sense of "calm confidence"—reducing the cognitive load of travel planning through generous whitespace, structured layouts, and a refined color palette. The aesthetic draws from contemporary editorial design, using depth and scale to guide the user through complex itineraries with ease.

## Colors
This design system utilizes a high-contrast palette to ensure accessibility and premium appeal. 

- **Primary (Wanderlust Blue):** A deep navy used for core branding, typography, and primary navigation elements. It provides the "anchor" for the interface.
- **Secondary (Adventure Orange):** Reserved strictly for high-priority Call-to-Actions (CTAs) and interactive highlights. Its vibrancy provides an energetic counterpoint to the sober navy.
- **Tertiary (Azure Accent):** A lighter blue used for supportive iconography, active states, and subtle data visualization.
- **Neutral (Slate):** The foundation of the layout. `bg-slate-50` serves as the global canvas, while `white` is used for elevated surfaces like cards and modals to create clear containment.

## Typography
The system relies on **Inter** for its exceptional legibility and systematic weight distribution. 

Headlines utilize a tighter letter-spacing and heavier weights to create a strong visual hierarchy against the airy layout. The `display-lg` style is intended for hero sections and destination titles, scaling down for mobile to maintain readability. Body text follows a standard 1.6x line height to ensure comfortable reading during long-form itinerary reviews or destination guides. Labels use medium and semi-bold weights to remain distinct even at smaller scales.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop and a fluid model for mobile devices. 

- **Desktop:** A 12-column grid centered within a `max-w-7xl` (1280px) container. Gutters are set at `2rem` to maintain significant separation between content blocks.
- **Mobile:** A 4-column fluid grid with `1rem` side margins.
- **Rhythm:** Vertical spacing relies on a 4px baseline. Section gaps are intentionally large (`5rem`+) to allow photography to "breathe" and prevent the interface from feeling cluttered. All containers use `px-4` on mobile and `px-8` on tablet/desktop.

## Elevation & Depth
Depth is signaled through **Tonal Layering** and **Ambient Shadows**. 

The base layer is the light slate background. Primary content containers (cards, panels) are elevated using pure white surfaces and a "soft-focus" shadow effect. Shadows should be low-opacity (5-10%), using a slight blue-tinted neutral rather than pure black to maintain the premium feel. 

Interaction depth is achieved through "Press & Lift" metaphors: cards may slightly translate upwards on hover with an increased shadow spread, suggesting interactivity without being visually aggressive.

## Shapes
The shape language is defined by **Soft Geometricism**. 

A standard border radius of `0.5rem` (8px) is used for small components like inputs and buttons. However, primary containers and cards utilize `rounded-2xl` (1rem / 16px) to create a modern, approachable feel that mimics high-end hardware design. Image containers should always match the container radius to maintain a unified silhouette.

## Components
- **Buttons:** Primary buttons use 'Adventure Orange' with white text and a `0.2s` ease-in-out transition. Secondary buttons use a 'Wanderlust Blue' outline or ghost style.
- **Cards:** White background, `rounded-2xl` corners, and a subtle 1px border (`slate-200`) or a very soft shadow. Photography within cards must span the full width of the top section.
- **Inputs:** Clean, `slate-100` filled backgrounds that shift to white with a blue border on focus. No heavy borders.
- **Chips/Tags:** Used for destination categories or price tiers. These use a light blue tint (`slate-100`) with 'Wanderlust Blue' text.
- **Interactive States:** All hoverable elements must transition opacity or transform position smoothly. Avoid abrupt color changes.
- **Navigation:** A sticky top-bar with a backdrop-blur (glassmorphism) effect to keep the focus on content while maintaining accessibility to the menu.