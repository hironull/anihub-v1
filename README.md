# AniHub

AniHub is a modern, mobile-first anime streaming web application built with React and Vite. It aims to provide a fast, responsive, and easy-to-use experience for browsing and watching anime.

## Key Features

- Responsive UI with TailwindCSS (mobile-first)
- Multiple video player integrations (ArtPlayer, Plyr, Video.js) and HLS support via HLS.js
- Infinite scrolling and paginated lists for browsing content
- Lightweight global state with Zustand and server-state with TanStack React Query
- Carousels, progress indicators, and toast notifications for a polished UI
- SEO-friendly meta handling using React Helmet
- Simple dev setup with Vite for fast HMR and optimized production builds

## Tech Stack

- Frontend: React 18, Vite
- Styling: TailwindCSS 3.4, PostCSS, Autoprefixer
- State & Data: Zustand, TanStack React Query (v5)
- Networking: Axios
- Players & Streaming: ArtPlayer, Plyr, Video.js, HLS.js
- UI Helpers: Swiper, React Icons, React Circular Progressbar, React Toastify
- Routing: React Router DOM v6
- Build & Lint: Vite, ESLint
- Type Safety: TypeScript (basic types)

## Architecture Summary

- Frontend-first architecture using modular React components.
- Client-side routing with React Router DOM.
- Server state and caching handled by React Query for fast, offline-friendly UX.
- Multiple video players to support different stream types and fallbacks.
- Mobile-first responsive design using TailwindCSS with custom theme colors.

## Getting Started

Prerequisites:
- Node.js (LTS) and npm or yarn installed
- Optional: pnpm if you use it for package management

Quick start (npm):
1. Clone the repo
   git clone https://github.com/hironull/anihub2.O.git
2. Install dependencies
   cd anihub2.O
   npm install
3. Start the dev server
   npm run dev
4. Build for production
   npm run build
5. Preview the production build locally
   npm run dev

Replace npm with yarn or pnpm commands if you prefer.

## Environment Variables

Create a .env file in the project root (or use .env.example) and set environment-specific values, for example:

VITE_API_BASE_URL=https://api.example.com
# Add other keys required for players, analytics, or 3rd-party services

Keep secret keys out of your repository and use environment variables for production environments (Vercel, Netlify, etc.).

## Deployment

- The project is optimized for deployment to static hosts (Vercel, Netlify, Cloudflare Pages).
- For Vercel, use the Vite build output and set proper environment variables and rewrites if you proxy API requests.

## Contact

Join our discord server :
https://discord.gg/meet
