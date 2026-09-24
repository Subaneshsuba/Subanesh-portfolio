# My Portfolio

A React + Vite portfolio site with a working contact form (sends real email via EmailJS, no backend needed).

## Setup

```
npm install
npm run dev
```

Open the printed localhost URL in your browser.

## Enabling the contact form

The form in `src/components/Contact.jsx` uses EmailJS to send mail straight from the browser:

1. Create a free account at https://www.emailjs.com
2. Add an Email Service (Gmail, Outlook, etc.) and note its **Service ID**
3. Create an Email Template with variables `{{name}}`, `{{email}}`, `{{message}}` and note its **Template ID**
4. In Account settings, copy your **Public Key**
5. Open `src/components/Contact.jsx` and paste the three values into `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`

The free EmailJS tier covers 200 emails/month, which is plenty for a portfolio.

## Customizing content

Everything is plain JSX, no CMS:

- `src/components/Hero.jsx` — name, tagline, intro
- `src/components/About.jsx` — bio + photo (swap the placeholder box for an `<img>`)
- `src/components/Skills.jsx` — edit the `groups` array
- `src/components/Projects.jsx` — edit the `projects` array
- `src/components/Contact.jsx` — your email address, EmailJS keys
- `src/index.css` — colors and fonts (see the `:root` variables at the top)

## Build for deployment

```
npm run build
```

Outputs a static `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages, or any static host.
