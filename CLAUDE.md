# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React-based landing page website built with modern tooling:

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM (currently single page)
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Project Structure
```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui base components
│   └── [Section].tsx    # Landing page sections
├── pages/               # Route-based page components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── assets/              # Static assets
```

### Key Architecture Patterns

**Component Organization**: 
- Main page (`src/pages/Index.tsx`) composes landing page sections
- Each section is a self-contained component in `src/components/`
- UI primitives are in `src/components/ui/` following shadcn/ui patterns

**Styling System**:
- Custom Tailwind configuration with design tokens in `tailwind.config.ts`
- CSS variables defined in `src/index.css` for consistent theming
- Custom color palette including sage-green theme colors
- Responsive design with mobile-first approach

**Path Aliases**:
- `@/` maps to `src/` directory
- `@/components` for component imports
- `@/lib/utils` for utility functions

**Development Integration**:
- ESLint configuration with React and TypeScript rules
- Hot module replacement for fast development
- TypeScript strict mode for type safety

### Component Conventions
- Use TypeScript for all components
- Follow shadcn/ui patterns for consistent styling
- Leverage the `cn()` utility from `@/lib/utils` for conditional classes
- Components export as named exports by default

### Styling Guidelines
- Use Tailwind utility classes with the custom design system
- Leverage CSS variables for consistent theming
- Custom gradient and shadow utilities available
- Dark mode support configured via class-based strategy