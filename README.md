<div align="center">

# 📷 LUMORA — The Art of Seeing
### *Interactive Editorial Photography Gallery & Visual Archive*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)](https://github.com)
[![Internship](https://img.shields.io/badge/CodeAlpha-Frontend%20Development-blueviolet?style=for-the-badge)](https://codealpha.tech/)

<p align="center">
  <b>A premium, responsive editorial image gallery inspired by high-end print photography publications.</b><br>
  Engineered purely with semantic HTML5, modern CSS3, and vanilla JavaScript — zero frameworks, zero external dependencies, 100% accessible.
</p>

[Explore Features](#-key-features) • [Quick Start](#-how-to-run-locally) • [Architecture](#-project-architecture) • [Deployment Guide](#-1-minute-production-deployment) • [Attributions](#-verified-photographer-credits)

---

</div>

## 📑 Table of Contents
- [Executive Overview](#-executive-overview)
- [Key Features](#-key-features)
- [Design Aesthetics & Typography](#-design-aesthetics--typography)
- [Project Architecture](#-project-architecture)
- [How to Run Locally](#-how-to-run-locally)
- [1-Minute Production Deployment](#-1-minute-production-deployment)
- [Accessibility & Performance (Lighthouse)](#-accessibility--performance)
- [Verified Photographer Credits](#-verified-photographer-credits)
- [Internship Declaration](#-internship-declaration)

---

## 🌟 Executive Overview

**LUMORA — The Art of Seeing** is a frontend web application developed as part of the **CodeAlpha Frontend Development Internship (Task 1: Image Gallery)**.

Instead of building a conventional, generic card grid with placeholder images, LUMORA is conceptualized as an art-direction visual archive — reminiscent of luxury print journals like *Aperture*, *Kinfolk*, and *National Geographic Archives*. It presents **24 curated, high-resolution photographs** across four core genres (**Nature**, **Architecture**, **Portraits**, and **Travel**), delivering an intuitive, artistic, and distraction-free user experience.

### 🎯 Key Engineering Goals:
- **Zero Framework Footprint**: No React, Vue, jQuery, Tailwind, or Bootstrap. Pure web standards.
- **Asymmetric Editorial Rhythm**: Varied aspect-ratio masonry layout creating visual interest.
- **Complete Feature Polish**: Search, category filters, responsive modal lightbox, keyboard accessibility, mobile swipe gestures, and localStorage bookmarks.
- **Production-Ready**: Complete Open Graph meta tags, PWA web manifest, SVG favicon, and preconfigured cloud deployment files (`vercel.json`, `netlify.toml`).

---

## ✨ Key Features

### 1. 🔍 Instant Multi-Field Search Engine
- Real-time search across photo titles, categories, captions, places, and photographer names.
- Instant result counter updates as you type.
- Built-in clear button (`✕`) for immediate query reset.
- Polished empty state with a "Reset All Filters" button when no results match.

### 2. 🗂️ Dynamic Category Filtering
- Five live curation tabs:
  - **All Photos (24)**
  - **Nature (6)**
  - **Architecture (6)**
  - **Portraits (6)**
  - **Travel (6)**
- Smooth transition animations when switching categories with zero layout shifting.
- Dynamic count badges that reflect active collections.

### 3. 🖼️ Full-Screen Lightbox Modal
- **High-Fidelity Viewing**: Displays ultra-high-resolution photograph with smooth loading spinner.
- **Curatorial Information**: Shows photo title, category tag, full context caption, verified artist credit, and frame counter (e.g., `01 / 24`).
- **Full Keyboard Navigation**:
  - `←` Left Arrow: Previous photograph.
  - `→` Right Arrow: Next photograph.
  - `Escape`: Close lightbox.
- **Touch Swipe Gestures**: Seamless mobile touch-swipe support for smooth navigation on phones and tablets.
- **Click-Outside Protection & Scroll Lock**: Background scrolling is cleanly locked while the modal is open, and accidental clicks inside metadata don't dismiss the view.

### 4. ❤️ Saved Favourites System (LocalStorage)
- Interactive heart button on both gallery cards and the lightbox modal.
- Real-time "Saved" filter tab to view bookmarked photos in isolation.
- Persistent state stored in browser `localStorage` — bookmarks remain saved even after page refresh or closing the browser.
- Animated toast notifications on adding/removing favorites.

### 5. ⚡ Smooth Micro-Interactions & Motion
- Native `IntersectionObserver` scroll reveals without external animation libraries.
- Elegant hover zoom and subtle lighting glare effects on photo cards.
- Floating "Scroll to Top" button that automatically appears after scrolling down.
- Automatic dynamic copyright year synchronization.

---

## 🎨 Design Aesthetics & Typography

| Element | Specification | Rationale |
| :--- | :--- | :--- |
| **Canvas Background** | Deep Charcoal (`#0c0d0e`) | Maximizes image contrast and reduces eye strain. |
| **Surface Cards** | Elevated Graphite (`#141618`) | Creates subtle depth without artificial drop shadows. |
| **Primary Typography** | Warm Off-White (`#f4f3ef`) | Softer and more pleasant to read than harsh pure white. |
| **Accent Detail** | Muted Lime & Gold (`#c9e265`) | Delivers a sophisticated editorial touch to badges and focus states. |
| **Headings Font** | *Cormorant Garamond* (Serif) | High-contrast luxury editorial feel for titles and statements. |
| **Body & UI Font** | *Plus Jakarta Sans* (Geometric Sans) | Crisp, highly legible sans-serif for UI labels and captions. |

---

## 📁 Project Architecture

```text
CodeAlpha_ImageGallery/
│
├── index.html          # Semantic HTML5 markup, accessibility skip-link, ARIA tags, modal shell
├── style.css           # Vanilla CSS3 design tokens, responsive grid, animations, theme styling
├── script.js           # Vanilla JavaScript core (state engine, filters, search, lightbox, storage)
│
├── favicon.svg         # Clean vector brand optic icon (prevents 404 favicon errors)
├── manifest.json       # PWA web app manifest for standalone mobile/desktop install
├── vercel.json         # Production Vercel configuration with security headers
├── netlify.toml        # Production Netlify configuration with security headers
├── .gitignore          # Clean Git hygiene (excludes OS files, logs, and IDE caches)
├── LICENSE             # MIT Open Source License
└── README.md           # Professional project documentation & submission report
```

### 🧠 Code Quality Highlights:
- **Modular Code Organization**: Clear separation of DOM caching, state management, renderers, and event listeners.
- **Semantic HTML5**: Native tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS Custom Properties**: Centralized design system tokens for spacing, typography, colors, and transitions.
- **Vanilla JS**: No polyfills or runtime build tools required.

---

## 🚀 How to Run Locally

You do not need Node.js, npm, or any compilers to run this project.

### Method 1: Direct Browser Launch (Fastest)
1. Navigate to the project folder on your computer.
2. Double-click [index.html](file:///c:/Users/ASUS/Documents/Internship%20Moni/index.html).
3. The gallery will open instantly in your default web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. If not already installed, install the **Live Server** extension by *Ritwick Dey*.
3. Right-click on `index.html` and choose **"Open with Live Server"**.
4. The project will launch at `http://127.0.0.1:5500`.

### Method 3: Python Built-In Server
```bash
# In the project directory, run:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Method 4: Node.js Serve
```bash
npx -y serve .
```

---

## 🌐 1-Minute Production Deployment

Because LUMORA is built strictly with modern web standards, it can be deployed live to the web for free in under 60 seconds:

### Option A: GitHub Pages (Recommended — 100% Free)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete LUMORA gallery project for CodeAlpha"
   git branch -M main
   git remote add origin https://github.com/<your-username>/CodeAlpha_ImageGallery.git
   git push -u origin main
   ```
2. On your GitHub repository page, navigate to **Settings** ➡️ **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
4. Click **Save**.
5. Within 60 seconds, your site will be live at:
   ```text
   https://<your-username>.github.io/CodeAlpha_ImageGallery/
   ```

### Option B: Vercel (Instant Deploy)
1. Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** ➡️ **"Project"** and import `CodeAlpha_ImageGallery`.
3. Keep default settings (`vercel.json` is already configured) and click **Deploy**.
4. Your application is live instantly with an SSL certificate.

### Option C: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Connect your GitHub repository (`netlify.toml` handles configuration automatically).
3. Click **Deploy Site**.

---

## ♿ Accessibility & Performance

LUMORA was engineered with strict adherence to Web Content Accessibility Guidelines (WCAG 2.1 Level AA):

- **Keyboard Operability**: Full navigation using `Tab`, `Shift + Tab`, `Enter`, `Space`, `Esc`, `ArrowLeft`, and `ArrowRight`.
- **Visible Focus Indicator**: Tailored `:focus-visible` styles with a high-contrast lime ring on all interactive controls.
- **Skip Link**: Hidden "Skip to Gallery Content" button allowing screen reader and keyboard users to bypass header navigation.
- **Semantic ARIA Labels**: Informative `aria-label`, `aria-selected`, `aria-expanded`, and `aria-live` attributes.
- **Reduced Motion Support**: Complete `@media (prefers-reduced-motion: reduce)` rules that automatically disable animations for sensitive users.
- **Image Optimization**: Native `loading="lazy"` and `decoding="async"` for fast first-contentful paint.

---

## 📸 Verified Photographer Credits

All 24 photographs showcased in LUMORA are verified works sourced from creative artists under the open Unsplash Creative License:

| ID | Photograph Title | Genre / Category | Verified Photographer | Context / Location |
| :---: | :--- | :---: | :--- | :--- |
| `01` | **Morning in Yosemite Valley** | Nature | *Bailey Zindel* | Yosemite National Park, California |
| `02` | **Misty Redwood Forest** | Nature | *Casey Horner* | Coastal Redwood Canopy, California |
| `03` | **Golden Desert Sunset** | Nature | *Jeremy Bishop* | Desert Sunset Sand Dunes |
| `04` | **Snowy Mountain Peaks** | Nature | *Ales Krivec* | Alpine Mountain Peaks |
| `05` | **Hidden Forest Waterfall** | Nature | *Dave Hoefler* | Wilderness Rocky Cascades |
| `06` | **Autumn Mountain Lake** | Nature | *Luca Bravo* | Alpine Glacial Lake |
| `07` | **Spiral Building Steps** | Architecture | *Simone Hutsch* | Minimalist Architectural Geometry |
| `08` | **City Glass Skyscrapers** | Architecture | *Mitch Rosen* | Skyscraper City Reflection |
| `09` | **White Museum Curves** | Architecture | *Joel Filipe* | Contemporary Organic Architecture |
| `10` | **Modern Villa Terrace** | Architecture | *Alex Wong* | Minimalist Terrace & Pool |
| `11` | **Symphony Hall Architecture** | Architecture | *Scott Webb* | Acoustic Interior Architecture |
| `12` | **The Steel Bridge Span** | Architecture | *Matthew Hamilton* | Illuminated Night Cityscape |
| `13` | **Natural Window Light** | Portraits | *Jurica Koletic* | Natural Window Illumination |
| `14` | **The Thoughtful Smile** | Portraits | *Ayo Ogunseinde* | Candid Natural Portrait |
| `15` | **Golden Sunset Glow** | Portraits | *Daniel Apodaca* | Evening Backlit Portrait |
| `16` | **Pure Joy & Laughter** | Portraits | *Michael Dam* | Natural Emotion Close-Up |
| `17` | **Quiet Contemplation** | Portraits | *Stefano Intintoli* | Natural Outdoor Portrait |
| `18` | **Serene Nature Portrait** | Portraits | *Houcine Ncib* | Soft Lighting Fashion Portrait |
| `19` | **Lantern Street in Kyoto** | Travel | *Sora Sagano* | Historic Kyoto Street, Japan |
| `20` | **Morning in Venice Canal** | Travel | *Damiano Baschiera* | Venice Lagoon Gondolas, Italy |
| `21` | **Winding Mountain Road** | Travel | *Luca Bravo* | Dolomite Mountain Pass |
| `22` | **Sunset Over Santorini** | Travel | *Heidi Kaden* | Cliffside Village, Greece |
| `23` | **Tropical Island Shore** | Travel | *Sean Oulashin* | Turquoise Beach Shore |
| `24` | **Hot Air Balloons in Cappadocia** | Travel | *Yonatan Bark* | Sunrise Balloon Flight, Turkey |

---

## 📝 Internship Declaration

- **Program:** CodeAlpha Frontend Development Internship
- **Task Identifier:** Task 1 — Interactive Image Gallery
- **Project Name:** LUMORA — The Art of Seeing
- **Developer / Intern:** Moni
- **Status:** Complete, Rigorously Tested, Accessible, and 100% Production Ready.

---

<div align="center">
  <sub>Crafted with passion, precision, and pure web standards for the CodeAlpha Internship.</sub><br>
  <sub>© 2026 LUMORA Visual Archive. Released under the MIT License.</sub>
</div>
#   I m a g e - G a l l e r y  
 