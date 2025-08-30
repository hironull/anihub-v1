# AniHub - Anime Streaming Web Application

## Overview

AniHub is a modern anime streaming web application built with React and Vite. The platform provides users with free anime streaming capabilities, featuring a responsive design with video player integration, infinite scrolling for content discovery, and a sleek user interface optimized for anime consumption. The application includes advanced features like multiple video player options, search functionality, genre filtering, and responsive carousel displays for showcasing featured content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite as the build tool for fast development and optimized production builds
- **Styling**: TailwindCSS for utility-first styling with custom color variables for theming
- **State Management**: Zustand for lightweight client-side state management across multiple stores (sidebar, genres, top ten content, big poster display)
- **Routing**: React Router DOM v6 for client-side navigation and route management
- **Data Fetching**: TanStack React Query (v5) for server state management, caching, and both standard and infinite query patterns

### Component Architecture
- **UI Components**: Modular React components with separation of concerns
- **Video Players**: Multiple video player integrations including ArtPlayer, Plyr, Video.js, and HLS.js for diverse streaming format support
- **Interactive Elements**: React Icons for consistent iconography, Swiper for carousel functionality, and React Circular Progressbar for loading states
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints and flexible layouts

### Data Layer
- **API Integration**: Axios-based HTTP client with custom hooks for data fetching
- **Environment Configuration**: Multi-environment support with development and production API endpoints
- **Caching Strategy**: React Query handles intelligent caching, background updates, and stale-while-revalidate patterns
- **Infinite Scrolling**: Implemented using React Infinite Scroll Component with pagination support

### Development Tools
- **Code Quality**: ESLint configuration with React-specific rules and hooks validation
- **Build System**: Vite with React plugin for fast HMR and optimized builds
- **Styling Pipeline**: PostCSS with Autoprefixer for cross-browser compatibility
- **Type Safety**: Basic TypeScript types for React components

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18.3, React DOM, React Router DOM for core application functionality
- **Build Tools**: Vite 5.4 for development server and production builds with React plugin support

### Video Streaming Services
- **Video Players**: ArtPlayer, Plyr, Video.js for diverse video playback capabilities
- **Streaming Protocols**: HLS.js for HTTP Live Streaming support

### UI and UX Libraries
- **Component Libraries**: Swiper for touch-enabled carousels, React Circular Progressbar for loading indicators
- **Icon System**: React Icons for comprehensive icon coverage
- **Toast Notifications**: React Toastify for user feedback and notifications
- **SEO**: React Helmet for dynamic meta tag management

### API and Data Management
- **HTTP Client**: Axios for API requests with interceptors and error handling
- **State Management**: Zustand for lightweight global state, TanStack React Query for server state
- **Infinite Loading**: React Infinite Scroll Component for pagination and content loading

### Styling and Design
- **CSS Framework**: TailwindCSS 3.4 with custom color scheme and utilities
- **Typography**: Google Fonts (Nunito, Roboto) for consistent typography
- **Responsive Design**: Custom TailwindCSS configuration with theme extensions

### Monetization and Analytics
- **Advertising**: Google AdSense integration for revenue generation
- **SEO Optimization**: Comprehensive meta tags, Open Graph protocol, and structured data

### Deployment and Hosting
- **Vercel Integration**: Custom routing configuration for SPA deployment with API proxy
- **Environment Management**: Multi-environment configuration for development and production deployments