<div align="center">

# Dental Clinic — Web Platform

A production-grade website template for dental clinics, built as a real
product rather than a static template: a conversion-focused landing page
backed by a real database, ready to take appointment requests from day one.

[Live Demo](#https://vercel.com/lucasmaiccol-orgs/clinica-odontologica/HjxB3b9Z8MA1n77vXqHRCaxkTZ9H) · [Report an issue](#) · [Contact](#contact)

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?logo=supabase&logoColor=white)

</div>

---

## Overview

Most "dental clinic website" templates are static brochures: a homepage, a
contact form that emails nobody, and no way for the clinic to actually manage
what comes in. This project is built differently — it's a real full-stack
application with its own database, ready to be handed to a client and used
on day one.

It was designed to solve the actual problem a clinic has: turning visitors
into booked consultations, with zero friction and zero back-and-forth over
email.

## Key Features

- **Conversion-first design** — a custom visual identity (not a recolored
  template), built around clarity, trust, and a clear path to booking a
  consultation.
- **Working appointment requests** — every submission is validated,
  protected against spam, and persisted to a real Postgres database, not
  just logged to an inbox.
- **Fully responsive** — designed mobile-first and verified across desktop,
  tablet, and mobile breakpoints.
- **SEO-ready out of the box** — structured metadata, Open Graph tags,
  `sitemap.xml`, `robots.txt`, and JSON-LD schema for local business/dentist
  search results.
- **Accessible by default** — semantic HTML, visible focus states, and
  full support for `prefers-reduced-motion`.
- **Client-editable content** — every piece of clinic-specific information
  (name, contact details, hours, treatments, staff) lives in a single
  configuration file, so updates don't require touching the codebase.
- **Built to grow** — the data model is designed to extend into a full
  scheduling system (staff, time slots, calendar) without breaking what's
  already in production.

## Tech Stack

| Layer            | Technology                                      |
| ----------------- | ------------------------------------------------ |
| Framework          | Next.js 14 (App Router), React 18, TypeScript     |
| Styling / Motion   | Tailwind CSS, Framer Motion                        |
| Database           | PostgreSQL via Supabase                            |
| ORM                | Prisma                                             |
| Validation         | Zod                                                |
| Hosting            | Vercel                                             |

## Architecture Notes

- **Server-first rendering.** Sections that don't need interactivity are
  React Server Components; the appointment form is the only client-side
  boundary, keeping the shipped JavaScript minimal.
- **Defense in depth on the API route.** Every submission passes through
  schema validation, a honeypot field, and basic rate limiting before it
  ever touches the database — no unvalidated input reaches Prisma.
- **Secrets never reach the browser.** Only the public Supabase URL and
  anon key are exposed client-side; the service role key and direct
  database credentials are used exclusively in server-side code.
- **One source of truth for content.** Clinic-specific data (contact info,
  treatments, staff, hours) is isolated from UI code, so a non-technical
  handoff to a client doesn't require a developer for routine updates.

## Project Structure

```
app/                  Routes, layouts, metadata, API endpoints
components/           UI sections and shared components
lib/                  Configuration, validation, Prisma client, utilities
prisma/               Database schema
types/                Shared TypeScript types
```

## Roadmap

- [ ] Admin dashboard to manage incoming appointment requests
- [ ] Real-time availability calendar per professional
- [ ] Automated confirmation emails (Resend / SMTP)
- [ ] Multi-location support

## About This Project

This project was built to demonstrate how a small business website should
be delivered: with real functionality, a maintainable codebase, and a
production-ready deployment path — not a disposable template.

I build custom web applications for small and medium businesses:
marketing sites with real backends, internal tools, booking systems, and
dashboards. If you're looking for something similar for your business,
let's talk.

## Contact

**Lucas Maiccol**
GitHub: [@lucasmaiccol](https://github.com/lucasmaiccol)
Email: lucaspeluffo295@gmail.com

---

<sub>This repository is a portfolio piece. Clinic name, staff, and contact
details shown in the demo are placeholder content used for demonstration
purposes only.</sub>
