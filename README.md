# Landscaping demo site

A responsive marketing site for landscaping businesses, built not only as a portfolio project but as a reusable template I can adapt for future clients. This project demonstrates React fundamentals such as component architecture, state management, client-side routing, and real form submission.

**[Live Demo](Coming soon)**

## Why this project

This was built to build upon what I learned from the auto detailing website while getting back into front-end development. I wanted to deepen my React knowledge in a way that's also genuinely reusable, something I could adapt and plug in for potential landscaping clients down the road. 

## Tech Stack

**React** (Vite), component architecture, hooks
**React Router**, client-side routing with nested layout routes
**TailwindCSS v4**, responsive styling with custom theme (colors, fonts defined via `@theme`)
**Framer Motion**, entrance and scroll-triggered animations, with `prefers-reduced-motion` support
**Formspree**, working contact form submission (no back-end required)

## Features

- Fully responsive layout, including a custom mobile navigation menu
- Data-driven `ServiceCard` and `TestimonialCarousel` components, rendered from structured data arrays, with array-based category tagging to support filtering
- A season filter (Spring / Summer / Fall / Winter / All) that filters services by an array-based `season` field
- Stateful testimonial carousel with wraparound navigation and dot indicators
- Contact form with controlled inputs, loading/success/error states, and real email delivery via Formspree
- Environment-variable-based configuration (Formspree endpoint is not hardcoded in source)
- Scroll-triggered and page-load animations built with accessibility in mind, all motion respects the user's OS-level reduced-motion preference
- Optimized for performance: images sized and compressed for web, `fetchpriority` used on the largest contentful element

## Performance

Lighthouse scores (mobile, production build): TBD

## Author

Built by [J Nigh](https://github.com/jnigh-cyber) as part of a front-end development portfolio.