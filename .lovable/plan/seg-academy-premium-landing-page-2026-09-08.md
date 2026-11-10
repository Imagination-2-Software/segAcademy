# SEG Academy — Premium Landing Page

A single, long-form homepage for SEG Academy (stock market training institute, Varanasi), built to the structure, rhythm and polish described in your brief.

Note: no reference screenshot or logo/photos came through with the message. I'll build to the structural brief (which is very detailed) and use generated, realistic educational/market imagery. If you send the screenshot, logo or real academy photos afterwards, I'll swap them in and tune the palette to the logo.

## Look and feel

- Mostly white / warm off-white surface, one deep ink-navy premium section, a single restrained brand accent (deep emerald-teal, a mature "finance + education" tone rather than neon green or purple).
- Editorial type: a confident display sans for headlines with tight line-height, neutral highly readable body text.
- Cards: 20px radius, hairline border, very soft shadow, image on top, consistent heights, gentle hover lift.
- Generous whitespace throughout; subtle scroll reveals, animated stat counters, smooth FAQ accordion, navbar that gains blur/shadow on scroll. No parallax, no floating loops.

## Page structure (in order)

1. Sticky navbar — logo wordmark, Home / Courses / About / Why SEG / Reviews / Contact, "Explore Courses" CTA, mobile hamburger sheet.
2. Hero — "Master the Stock Market." headline, supporting line, two CTAs, "4.9/5 • 508+ Google Reviews" trust line, layered rounded image composition (classroom + market interface card).
3. Trust bar — 2000+ Students, 4 Courses, 98% Satisfaction, 4.9★ Google Rating.
4. Featured courses — APFM, MMP, PTS, Option Hedging as premium cards (image, name, short description, level, mode, "View Course"). 4-up desktop, single column mobile.
5. Dark value-proposition section — "Learn the Market. Understand the Move." with market/classroom visual and four points: Practical Market Learning, Expert Mentorship, Structured Curriculum, Risk Management.
6. Why SEG Academy — split layout, numbered 01–06 benefits from your copy.
7. Learning experience — "From Market Basics to Advanced Strategies" with a vertical learning-path stepper beside an image.
8. Areas of learning — "Understand More Than Just the Charts": Equity, Derivatives, Options, Forex, Crypto, Institutional Trading, SMC, Risk Management as an editorial chip/card grid.
9. Testimonials — 4.9★ / 508 Google Reviews header plus your three real review texts, initials avatars only (no invented names, photos or titles), swipeable on mobile.
10. Stats section — large numbers, small labels, counters on scroll.
11. Course discovery — "Find the Right Path for Your Trading Journey": filter chips (Beginner, Technical Analysis, Derivatives, Options, Advanced Strategies, Risk Management) filtering horizontal course cards.
12. Varanasi academy — full address, phone, exterior/interior imagery, embedded Google Map, "Get Directions" and "Call SEG Academy" CTAs.
13. About — "Built to Make Market Education Practical".
14. FAQ — accordion with your 10 questions; answers kept factual and clearly editable where exact policy is unknown.
15. Final CTA — "Your Journey in the Stock Market Starts Here." with both CTAs on a premium dark/accent panel.
16. Footer — wordmark, tagline, nav, phone, address, segacademy.com, Privacy Policy, Terms. No social icons (no verified links).

## Content rules honoured

Only your verified numbers (4.9/5, 508 reviews, 2000+ students, 4 courses, 98% satisfaction), real address and phone. No invented curricula, names, credentials, awards or profit claims.

## Technical notes

- TanStack Start + React + TypeScript, Tailwind v4 tokens defined in `src/styles.css` (semantic colors, radii, fonts via a `<link>` in `__root.tsx`).
- Homepage at `/` (replaces the placeholder), composed of reusable components in `src/components/`: Navbar, Hero, TrustStats, CourseCard, CourseGrid, FeatureSection, LearningPath, TopicGrid, TestimonialCard, StatsSection, CourseDiscovery, LocationSection, About, FAQ, FinalCTA, Footer.
- All copy, courses, reviews, stats, FAQ and contact details live in `src/data/seg.ts` so they can be edited in one place.
- Imagery generated into `src/assets/` (classroom, mentor, academy exterior/interior, market interface), sized and lazy-loaded with descriptive alt text.
- SEO: single H1, semantic sections, route `head()` with the suggested title/description, og/twitter tags, LocalBusiness/EducationalOrganization + FAQPage JSON-LD.
- Responsive check at 1920/1440/tablet/375 with no horizontal overflow.
