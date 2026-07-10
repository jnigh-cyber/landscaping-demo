# Landscaping demo site

A responsive marketing site for Landscaping businesses, built not only for my portfolio project but for future clients. This project demonstrates React fundamentals such as: component architecture, state management, client-side routing, and real form submission.

**[Live Demo](Coming soon)**

## Why this project

This was built to build upon what I've learned from the auto detailing website to get back into front-end development. I wanted to further my current knownledge with react. Wanting to be able to plug-in-play with potential clients. 

## Tech Stack

**React** (Vite), component architecture, hooks
**React Router**, client-side routing with nested layout routes
**TailwindCSS v4**, responsive stylting with custom theme (colors, fonts defined via `@theme`)
**Framer Motion**, entrance and scrool-triggered animations, with `prefers-reduced-motion` support
**Formspree**, working contact form submission (no back-end required)

## Features

- Fully responsive layout, including a custom mobile navigation menu
- Data-driven `ServiceCard` & `TestimonialCarousel` components render from a structed data array, with array-based category taggin to support filtering.
- Stateful testimonial carousel with wraparound navigation and do indicators
- Contact for with controlled inputsm loading/success/error states, and real email delivery via Formspree
- Enviroment-variable-based configuration (Formspree endpoint is not hardcoded in source)
- Scroll-triggered and page-load animations built with accessibility in mind, all motion respects the user's OS-level reduced-motion preference
- Optimized for performance: images sized and compressed for web,
`fetchpriority` used on the largest contentful element

## Performance

Lighthouse scores (Mobile, Production build)

TBD

## Author

Built by [J Nigh](https://github.com/jnigh-cyber) as part of a front-end development portfolio & furture client base.