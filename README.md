# Ascent Yoga Centre — Frontend v2
A responsive multi-page React/Vite landing website.

## Pages
- `/` — Home
- `/about` — About Us
- `/explore` — Explore Ascent: Yoga Programs, Instructors, Schedule, Pricing
- `/gallery` — Gallery
- `/contact` — Contact, Enquiry, WhatsApp, Testimonials

## Run
npm install
npm run dev

## Build
npm run build

## Vercel refresh handling
`vercel.json` includes a catch-all rewrite to `/`, and React Router includes a final `*` route that renders Home. This prevents direct-route refreshes from producing Vercel's SPA 404.

## Replace images
All current images are intentionally SVG placeholders so there are no broken image links. Replace files under `public/images/` with your realistic images and keep the same filenames, or update the paths in the components/data.

## Before final delivery
Replace placeholder:
- logo
- centre address
- phone number
- email
- WhatsApp number
- class data/pricing
- Google Maps area
- social links
