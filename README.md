# Club Rafiki — Youth Empowerment Center

A multi-page React + Tailwind CSS website for Club Rafiki, Nyamirambo, Kigali.

## Tech Stack
- **React 18** (with hooks)
- **Tailwind CSS 3**
- **Vite 5** (dev server & bundler)
- Node.js required: v16+

## Pages
- Home (hero slider, stats, programs preview, CTA cards, testimonials, news)
- About (story, core principles, partners)
- Programs (activity cards grid)
- News & Events
- Impact (stats, stories, timeline)
- Gallery (grid with lightbox)
- Contact (form + info)
- Donate (form with amount selector)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Then open: **http://localhost:5173**

### 3. Build for production
```bash
npm run build
npm run preview   # preview the production build
```

## Project Structure
```
src/
  App.jsx              # Main router + shell
  main.jsx             # Entry point
  index.css            # Tailwind + global styles
  components/
    Header.jsx
    Footer.jsx
    PageBanner.jsx
    NewsCard.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    ProgramsPage.jsx
    NewsPage.jsx
    ImpactPage.jsx
    GalleryPage.jsx
    ContactPage.jsx
    DonatePage.jsx
  data/
    siteData.js        # All content (slides, programs, news, stats...)
  context/
    ToastContext.jsx   # Toast notification system
```
