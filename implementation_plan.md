# Global Agro — Certificate-Style Redesign

This plan outlines the implementation of the "Layout, Visual & Motion Specification" on the `demo-design` branch. This is a radical departure from the current dark-mode template, transforming the site into a precise, high-contrast, paper-like technical document.

## User Review Required

> [!WARNING]
> **Total Teardown Required:** This design requires completely gutting the existing CSS, removing almost all of the `framer-motion` animations we just added, stripping out all cards, borders, and shadows, and shifting the entire layout paradigm to a 2-column "sticky rail" architecture. 
> 
> Because we are on the isolated `demo-design` branch, your live site is 100% safe. 

## Open Questions

1. **Hero Video**: The spec requests a 6–10s silent loop of bitumen pouring. We currently only have static images. I will use a static macro image for now unless you can provide a video file (mp4/webm).
2. **Font Loading**: `Archivo` and `IBM Plex Sans Arabic` will be loaded via `next/font/google` for optimal performance and subsetting, which fulfills the self-hosting requirement automatically. Is this acceptable?

## Proposed Changes

We will execute this in the 4 phases dictated by your specification.

### Phase A — Foundation
- **`src/app/globals.css`**: Define the new strict root variables (`--paper`, `--graphite`, `--bitumen`, `--heat`, `--zinc`, `--rule`). Implement the reduced-motion media query.
- **`tailwind.config.ts`**: Map the custom CSS variables to Tailwind theme extensions so we can use classes like `bg-paper`, `text-graphite`, `text-heat`, etc.
- **`src/app/layout.tsx`**: Swap fonts to Archivo and IBM Plex Sans Arabic using `next/font/google`. Apply base text colors and tabular-nums.
- **Logical Properties**: Audit the codebase and convert all physical Tailwind classes (e.g., `pl-4`, `mr-2`, `border-l`) to logical ones (`ps-4`, `me-2`, `border-s`).

### Phase B — Structural Moves
- **`src/app/[lang]/page.tsx`**: 
  - Remove all dark mode backgrounds. Implement the `--paper` and `--paper-alt` section banding.
  - Delete all `rounded-*`, `shadow-*`, and decorative borders.
  - Flatten the Features, Applications, and Stats sections from "cards" into semantic, ruled lists/bands.
- **`src/components/Header.tsx` & Footer**: Rebuild as flat, stark borders. Footer becomes the only other `--bitumen` (dark) element.

### Phase C — The Set Pieces
- **Hero Section**: Rebuild as full-bleed `--bitumen` with a text block anchored to the bottom-left grid. Add the one-time `clip-path` wipe animation.
- **Sticky Rail Component**: Create a new client component `StickyRail.tsx` that uses `IntersectionObserver` to track which row of the spec table is visible and updates its values dynamically.
- **Spec Table**: Rebuild the currently flex-based/card-based specs into a strict semantic HTML `<table>` with proper `<thead>`, `<th>`, and hover states. Add the `--heat` 2px left border to the primary spec row.

### Phase D — Interaction & Polish
- **Forms**: Rebuild inputs as flat, 1px bottom-ruled fields.
- **`MotionWrappers.tsx`**: Delete `FadeIn`, `ScaleIn`, `ContinuousPulseBg`, etc. Replace with only the specific functional animations requested (clip-path wipe, crossfades).

## Verification Plan

### Automated & Manual Verification
- **Lighthouse/Performance**: Verify no layout shifts and fast LCP on the new static hero.
- **RTL Testing**: Switch to Arabic (`/ar`) and verify that the layout naturally mirrors using logical properties, the sticky rail docks on the right, and numbers remain LTR.
- **Scroll Tracking**: Verify that scrolling through the spec table cleanly updates the sticky rail figures without flickering.
