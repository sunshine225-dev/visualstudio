# VisualStudio360 - 3D Visualization Studio Website

## Overview

This is a full-stack web application for VisualStudio360, a French 3D visualization and interior design studio. The application is built as a portfolio/business website showcasing architectural visualization services, with a contact form for client inquiries. It features a modern, dark-themed design with bilingual support (French/English) and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React-based SPA with TypeScript and Vite
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Deployment**: Configured for both development and production environments

## Key Components

### Frontend Architecture
- **React with TypeScript**: Component-based UI with type safety
- **Vite**: Fast development build tool with HMR (Hot Module Replacement)
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with Zod validation
- **shadcn/ui**: Pre-built accessible UI components based on Radix UI

### Backend Architecture
- **Express.js**: RESTful API server
- **TypeScript**: Type-safe server-side development
- **Drizzle ORM**: Type-safe database operations with migration support
- **PostgreSQL**: Primary database (via Neon serverless) - **ACTIVE**
- **Database Storage**: Full PostgreSQL integration with contact form submissions and user management

### UI/UX Design System
- **Dark theme**: Professional architectural studio aesthetic
- **Responsive design**: Mobile-first approach
- **Smooth animations**: Scroll-based reveal animations
- **Bilingual support**: French (primary) and English
- **Professional photography**: Architectural and interior design imagery

## Data Flow

1. **Client requests** are handled by the React router (Wouter)
2. **API calls** use TanStack Query for caching and state management
3. **Form submissions** are validated client-side with Zod, then sent to Express API
4. **Server validation** uses the same Zod schemas for consistency
5. **Database operations** are performed through Drizzle ORM with PostgreSQL (Neon serverless)
6. **Contact submissions** are stored persistently in PostgreSQL database
7. **Responses** are cached by TanStack Query for optimal performance

## Database Schema

### Tables
- **users**: User authentication and management
  - id (serial, primary key)
  - username (text, unique, not null)
  - password (text, not null)
  
- **contact_submissions**: Client contact form submissions
  - id (serial, primary key)
  - name (varchar, not null)
  - email (varchar, not null)
  - subject (varchar, not null)
  - message (text, not null)
  - language (varchar, default: 'fr')
  - created_at (timestamp, auto-generated)

## External Dependencies

### Key Libraries
- **@neondatabase/serverless**: PostgreSQL database connection
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Database ORM
- **react-hook-form**: Form state management
- **wouter**: Lightweight routing
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Static type checking
- **ESBuild**: Production bundling
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development
- **Vite dev server** with HMR for client-side development
- **tsx** for running TypeScript server directly
- **Database migrations** via Drizzle Kit push command

### Production
1. **Frontend build**: Vite builds optimized static assets
2. **Backend build**: ESBuild bundles server code to ESM format
3. **Static serving**: Express serves built frontend assets
4. **Database**: PostgreSQL via Neon serverless platform
5. **Environment variables**: DATABASE_URL required for database connection

### Key Features
- **Contact form**: Captures client inquiries with validation
- **Portfolio sections**: Services, projects, and company information
- **Responsive navigation**: Mobile-friendly menu with language toggle
- **SEO optimization**: French metadata and semantic HTML structure
- **Error handling**: Comprehensive error boundaries and validation
- **Loading states**: Proper loading and error states for async operations

The application is designed to be a professional showcase for an architectural visualization studio, emphasizing visual appeal, smooth user experience, and reliable contact form functionality for lead generation.