# Innoworq Workspace — Complete Project & File Structure

This document provides a comprehensive overview of the repository directory tree, file mappings, and architectural annotations. It serves as the primary structural guide for AI agents and developers working on this project.

---

## 📁 Repository Overview

```text
innowork/
├── package.json                   # Root workspace manifest (runs client & server concurrently)
├── package-lock.json              # Root dependency lockfile
├── .gitignore                     # Git ignore rules for root workspace
├── PROJECT_STRUCTURE.md           # [THIS FILE] Comprehensive workspace directory blueprint & section guide
│
├── client/                        # Frontend React application (Vite + React 19 + Three.js + Framer Motion)
│   ├── package.json               # Client dependencies & script definitions
│   ├── vite.config.js             # Vite build & server configuration
│   ├── index.html                 # Main HTML entry file
│   ├── .oxlintrc.json             # Linter config (Oxlint)
│   ├── .gitignore                 # Client-specific gitignore
│   ├── public/                    # Static public assets (favicons, icons)
│   └── src/                       # React source directory
│       ├── main.jsx               # React DOM entry point
│       ├── App.jsx                # Core App router, layout wrapper (Navbar/Footer), and scroll handlers
│       ├── index.css              # Global styles, CSS custom variables, typography, animations, dark theme
│       ├── assets/                # Images, graphics, and static media
│       ├── components/            # Reusable UI sections and components
│       │   ├── Navbar.jsx         # Global Navigation header with dropdowns & announcement trigger
│       │   ├── Footer.jsx         # Global site footer with links, locations, and newsletter form
│       │   ├── PageLoader.jsx     # Animated page load transition overlay
│       │   ├── AnimatedPage.jsx   # Framer Motion container wrapper for smooth page transitions
│       │   ├── ScrollReveal.jsx   # Scroll-triggered viewport animation wrapper
│       │   ├── AnnouncementCenter.jsx # Slide-over drawer for latest company news & announcements
│       │   ├── CountryCard.jsx    # Office & country location card details
│       │   ├── GlobalPresence.jsx # Global presence section & interactive map cards
│       │   ├── DigitalWaveBackground.jsx # Canvas interactive wave background animation
│       │   ├── BlogIllustrations.jsx # SVG vector illustrations for blogs & tech categories
│       │   ├── InnoworqIcon.jsx   # Brand SVG logo icon component
│       │   ├── HomeHeroSection.jsx # Home page Hero section with headline, CTAs & 3D WebGL canvas
│       │   ├── HomeServicesSection.jsx # Home page services grid showcase
│       │   ├── HomeSolutionsSection.jsx # Home page tech solutions showcase
│       │   ├── HomeFaqSection.jsx  # Home page FAQ accordion section
│       │   └── WebGLMotherboard/  # 3D WebGL Motherboard Animation Component Group
│       │       ├── MotherboardScene.jsx  # R3F Canvas wrapper, lighting, camera & postprocessing
│       │       ├── Motherboard3D.jsx     # 3D circuit board mesh & geometry logic
│       │       ├── ForgingSystem.jsx     # Particle & light energy flow visual effects
│       │       └── PowerConnector3D.jsx  # 3D power component mesh element
│       ├── pages/                 # Full page views (Routed via App.jsx)
│       │   ├── Home.jsx           # Landing page assembling Hero, Services, Solutions, FAQ, 3D WebGL
│       │   ├── About.jsx          # Company background, vision, leadership & team values page
│       │   ├── Services.jsx       # Detailed enterprise engineering & digital transformation services page
│       │   ├── Industries.jsx     # Industry verticals (FinTech, Healthcare, Retail, etc.) page
│       │   ├── Solutions.jsx      # Enterprise tech solutions & product showcase page
│       │   └── Blogs.jsx          # Engineering blogs, updates, and tech articles page
│       └── data/                  # Static configuration & mock datasets
│           ├── companyConfig.json # Central company information, addresses, menu items, and services metadata
│           ├── blogData.js        # Blog post contents, authors, categories, and tags data
│           └── globalPresenceData.js # International office locations and coordinate data
│
├── server/                        # Backend API Server (Node.js + Express)
│   ├── package.json               # Backend dependencies (Express, Cors, Express-Validator)
│   ├── index.js                   # Main Express server file, endpoints, validation & CORS configuration
│   └── package-lock.json          # Backend lockfile
│
├── docs/                          # Documentation & Architecture breakdown
│   └── frontend-learning/         # Component & feature documentation for developers/agents
│       ├── home-section.md        # Detailed breakdown of Home page components & logic
│       ├── about-section.md       # Detailed breakdown of About page components & logic
│       ├── services-section.md    # Detailed breakdown of Services page components & logic
│       ├── solutions-section.md   # Detailed breakdown of Solutions page components & logic
│       ├── industries-section.md  # Detailed breakdown of Industries page components & logic
│       └── blog-section.md       # Detailed breakdown of Blog page components & logic
│
└── reference_only/                # Design assets and reference materials
    └── Screen Recording...mp4     # UI demo video reference
```

---

## 🔍 Detailed Component & Section Map

### 1. Root Configuration & Scripts
- **[`package.json`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/package.json)**
  - *Purpose*: Root workspace manager. Allows running client and server simultaneously.
  - *Key Commands*:
    - `npm run dev` : Runs client and server in parallel via `concurrently`.
    - `npm run dev:client` : Starts Vite development server for `client/`.
    - `npm run dev:server` : Starts Express API server for `server/`.
    - `npm run build` : Builds production assets for `client/`.

---

### 2. Frontend Core & Architecture (`client/src/`)

#### ⚡ Router & Global Layout (`client/src/App.jsx` & `client/src/main.jsx`)
- **[`client/src/main.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/main.jsx)**: Entry script rendering `App` into root HTML element.
- **[`client/src/App.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/App.jsx)**: Top-level layout container routing between pages using `react-router-dom`. Includes `Navbar`, `Footer`, `PageLoader`, and `ScrollToTop` helper.
- **[`client/src/index.css`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/index.css)**: Global CSS custom properties (`--bg-light`, `--accent-blue`, `--text-primary`), dark mode theme definitions, typography resets, and keyframe animations.

---

#### 🧩 Navigation & Global UI Components (`client/src/components/`)
- **[`Navbar.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/Navbar.jsx)**
  - *Section*: Global Top Navigation Header.
  - *Features*: Dropdown mega-menus for Services, Solutions, Industries, company logo, mobile navigation drawer, and Announcement Center trigger button.
- **[`Footer.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/Footer.jsx)**
  - *Section*: Global Site Footer.
  - *Features*: Sitemap links, newsletter subscription box, company office locations, social handles, and copyright notice.
- **[`PageLoader.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/PageLoader.jsx)**
  - *Section*: Transition UI.
  - *Features*: Smooth loading spinner/screen between view transitions.
- **[`AnimatedPage.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/AnimatedPage.jsx)**
  - *Section*: Page Animation Wrapper.
  - *Features*: Framer Motion fade & slide transitions on page mount/unmount.
- **[`ScrollReveal.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/ScrollReveal.jsx)**
  - *Section*: Intersection Observer Animation Wrapper.
  - *Features*: Triggers entrance animations when elements enter the viewport.
- **[`AnnouncementCenter.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/AnnouncementCenter.jsx)**
  - *Section*: Updates & News Slide-Over Panel.
  - *Features*: Drawer component showcasing latest corporate news, product announcements, and press releases.
- **[`GlobalPresence.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/GlobalPresence.jsx)** & **[`CountryCard.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/CountryCard.jsx)**
  - *Section*: Global Office Locations.
  - *Features*: Interactive map section displaying office locations across countries with contact info cards.
- **[`DigitalWaveBackground.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/DigitalWaveBackground.jsx)**
  - *Section*: Dynamic Background Visual Effect.
  - *Features*: HTML5 Canvas particle wave animation background.
- **[`BlogIllustrations.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/BlogIllustrations.jsx)** & **[`InnoworqIcon.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/InnoworqIcon.jsx)**
  - *Section*: Media & Graphic Icons.
  - *Features*: Modular SVG vector graphics and brand icon components.

---

#### 🎮 WebGL 3D Motherboard Section (`client/src/components/WebGLMotherboard/`)
- **[`MotherboardScene.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/WebGLMotherboard/MotherboardScene.jsx)**
  - *Section*: 3D WebGL Canvas Container.
  - *Features*: Sets up React Three Fiber (`@react-three/fiber`), Three.js camera, lights, ambient glow, and post-processing visual effects.
- **[`Motherboard3D.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/WebGLMotherboard/Motherboard3D.jsx)**
  - *Section*: 3D Circuit Board Model.
  - *Features*: Renders 3D motherboard model with CPU sockets, RAM slots, and copper trace geometry.
- **[`ForgingSystem.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/WebGLMotherboard/ForgingSystem.jsx)**
  - *Section*: Data Flow Visual Particles.
  - *Features*: Animated particle systems representing data transmission through circuit pathways.
- **[`PowerConnector3D.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/components/WebGLMotherboard/PowerConnector3D.jsx)**
  - *Section*: Power Subsystem 3D Component.
  - *Features*: 3D mesh rendering power supply pins and connectors on the motherboard.

---

#### 🖥️ Main Web Pages (`client/src/pages/`)
- **[`Home.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/Home.jsx)**
  - *Section*: Primary Landing Page.
  - *Components Used*: `HomeHeroSection`, `HomeServicesSection`, `HomeSolutionsSection`, `GlobalPresence`, `HomeFaqSection`.
- **[`About.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/About.jsx)**
  - *Section*: Company Profile & Vision Page.
  - *Content*: Enterprise story, mission, core values, culture, leadership team, and milestones.
- **[`Services.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/Services.jsx)**
  - *Section*: Offerings & Tech Services Page.
  - *Content*: Cloud Services, AI Engineering, DevOps, Web & Mobile App Development, Cyber Security.
- **[`Industries.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/Industries.jsx)**
  - *Section*: Vertical Industry Solutions Page.
  - *Content*: Tailored tech solutions for Healthcare, Financial Services, E-Commerce, Manufacturing, etc.
- **[`Solutions.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/Solutions.jsx)**
  - *Section*: Custom Products & Enterprise Platforms Page.
  - *Content*: SaaS architectures, automation frameworks, data analytics pipelines.
- **[`Blogs.jsx`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/pages/Blogs.jsx)**
  - *Section*: Media, Articles & Knowledge Hub Page.
  - *Content*: Searchable blog listing with categories, featured articles, and reading view.

---

#### 📊 Configuration & Data Models (`client/src/data/`)
- **[`companyConfig.json`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/data/companyConfig.json)**: Central JSON source of truth for company metadata, navigation routes, contact details, service summaries, and footer links.
- **[`blogData.js`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/data/blogData.js)**: Structured dataset containing blog posts, authors, tags, cover images, and article text.
- **[`globalPresenceData.js`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/client/src/data/globalPresenceData.js)**: Location data array for international offices, addresses, map coordinates, and contact details.

---

### 3. Backend Server (`server/`)
- **[`server/index.js`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/server/index.js)**
  - *Purpose*: Express.js backend server.
  - *Features*:
    - Configures CORS middleware for client origin requests.
    - Input validation via `express-validator`.
    - API endpoints for contact form submissions, newsletter subscriptions, and inquiries.
    - Server health check & error response handling.

---

### 4. Technical Documentation (`docs/frontend-learning/`)
- **[`home-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/home-section.md)**: Deep-dive architecture and component guide for the Home Page.
- **[`about-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/about-section.md)**: Component & section guide for the About Page.
- **[`services-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/services-section.md)**: Component & section guide for the Services Page.
- **[`solutions-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/solutions-section.md)**: Component & section guide for the Solutions Page.
- **[`industries-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/industries-section.md)**: Component & section guide for the Industries Page.
- **[`blog-section.md`](file:///c:/Users/harsh/OneDrive/Desktop/innowork/docs/frontend-learning/blog-section.md)**: Component & section guide for the Blogs Page.

---

## 💡 Guidelines for AI Agents & Developers

1. **Adding a New Component**:
   - Place general UI components in `client/src/components/`.
   - Place 3D / WebGL specific elements in `client/src/components/WebGLMotherboard/`.
   - Ensure exported components are wrapped in appropriate animation layers (e.g., `ScrollReveal` or `AnimatedPage`).

2. **Adding a New Page**:
   - Create the page file inside `client/src/pages/`.
   - Register the route in `client/src/App.jsx` inside the `<Routes>` block wrapped with `<AnimatedPage>`.
   - Update navigation links in `client/src/data/companyConfig.json` and `client/src/components/Navbar.jsx`.

3. **Modifying Content & Metadata**:
   - Prefer updating `client/src/data/companyConfig.json` or `client/src/data/blogData.js` rather than hardcoding static content inside components.
