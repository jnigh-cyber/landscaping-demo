# Landscaping Demo Site

A responsive marketing site for landscaping businesses, built as a portfolio project and as a reusable template I can adapt for real clients. Built on the same core stack as my [auto detailing demo](https://github.com/jnigh-cyber/auto-detail-demo), with a new season-based filtering feature and a fully distinct visual identity, so it demonstrates I can vary design direction, not just reskin the same template.

**[Live Demo](Coming soon)**

## Why this project

Built to build on what I learned from my auto detailing site while getting back into front-end development. This one adds a new piece of state logic (a season-based service filter with lifted state), a service-to-contact-form handoff using React Router's location state, and was built with testing, environment variables, and documentation planned in from the start rather than added afterward.

## Tech stack

- **React** (Vite), component architecture, hooks (`useState`, `useEffect`)
- **React Router**, client-side routing with nested layout routes and location state for cross-page data handoff
- **Tailwind CSS v4**, custom theme via `@theme`, contemporary charcoal and green palette
- **Lucide React**, category-mapped icons for services and value pillars
- **Formspree**, working contact form submission (no backend required)
- **Prettier**, enforced formatting consistency across the codebase

## Features

- Fully responsive layout, including a custom mobile navigation menu
- **Season filter** (Spring / Summer / Fall / Winter / All): filters the service list by an array-based `season` field, using lifted state shared between the filter buttons and the service grid, and array-based `.includes()` matching so a single service can belong to multiple seasons
- **Click-to-quote**: clicking any service card navigates to the contact form with the message field pre-filled with that service's name, using React Router's `state` on `Link` and `useLocation` to read it back out
- Data-driven `ServiceCard` and `TestimonialCarousel` components, each service and category mapped to a distinct icon rather than a single repeated graphic
- Contact form with controlled inputs, loading/success/error states, phone-required validation via a regex `pattern`, and real email delivery via Formspree
- Environment-variable-based configuration (Formspree endpoint is not hardcoded in source)
- A stat bar overlapping the hero image, using negative margin to create a layered, contemporary feel
- Full accessibility pass, including `aria-pressed` on the season filter toggles and `aria-label`s on icon-only buttons

## Performance

Lighthouse scores (mobile, production build): TBD

## Getting started locally

```bash
git clone [repo URL]
cd landscaping-site
npm install
```

Create a `.env` file in the project root:
```
VITE_FORMSPREE_URL=your_formspree_endpoint_here
```

Then run:
```bash
npm run dev
```

Format the codebase:
```bash
npm run format
```

## Project structure

```
src/
  components/   # Navbar, Footer, Hero, ServiceCard, SeasonFilter, TestimonialCarousel, ContactForm
  pages/        # Home, Services, About, Contact
  data/         # services.js, testimonials.js, serviceIcons.js, pillars.js
  Layout.jsx
  App.jsx
  main.jsx
```

## What's next

- [ ] Automated tests for the season filter and service-to-contact prefill flow
- [ ] Logo mark (currently a text wordmark by design)
- [ ] Optional CSS-only animation pass (Framer Motion intentionally skipped on this project in favor of understanding the underlying `IntersectionObserver` / CSS approach)

## Author

Built by [J Nigh](https://github.com/jnigh-cyber) as part of a front-end development portfolio.
