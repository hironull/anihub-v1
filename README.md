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

## Live Deployment

### Vercel

Host your own instance of <a href="https://anihub-seven.vercel.app/">AniHub</a> on Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hironull/anihub-v1)

### Render

Host your own instance of <a href="https://anihub-seven.vercel.app/">Anihub</a> on Render.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/hironull/anihub-v1)

You can also deploy your own backend API if you prefer to self-host the API instead of using the public one. A popular, compatible option is the "anime-api" project: https://github.com/itzzzme/anime-api. Follow that repository's README to deploy a backend API (it supports several deployment methods) and then point AniHub's API base URL to your self-hosted endpoint via environment variables.

Keep secret keys out of your repository and use environment variables for production environments (Vercel, Netlify, etc.).

## Contact

Join our discord server :
https://discord.gg/meet

This was developed by hironull16 on Discord. Portfolio: https://www.hironull.lol/
