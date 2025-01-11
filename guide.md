# ThiGame Project Guide

## Introduction

ThiGame is a games platform built with React and modern web technologies. This guide documents development process, technical choices, and lessons learned along the way.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Project Architecture](#project-architecture)
3. [Technical Decisions](#technical-decisions)
4. [Development Journal](#development-journal)

## Initial Setup

### Step 1: Environment Setup (Jan 03, 2025)

#### Project Installation

```bash
npm create vite@latest thigame-react -- --template react
```

#### Core Dependencies

- **Framework**: React 18.3
- **Router**: react-router-dom 7.1
- **UI/UX**:
  - @radix-ui/react-slot for accessible components
  - class-variance-authority for component variants
  - lucide-react for icons
- **State**: Zustand for global state management
- **Styling**: TailwindCSS with custom design system

#### Development Dependencies

- ESLint with modern configuration
- TailwindCSS and its plugins
- Vitest for testing

### Technical Choices Rationale

- **Vite + React**: Chosen for its speed and minimal configuration
- **Zustand**: Way more simpler than Redux
- **TailwindCSS**: Can't do without it anymore
- **Radix UI**: Selected for robust accessibility support

## Project Architecture

### Folder Structure

Follow a modular and scalable organization:

```
src/
├── components/         # Reusable components
│   ├── layout/        # Page layouts and structures
│   └── ui/            # Base UI components
├── games/             # Game-specific logic
├── pages/             # Page components
└── utils/             # Utilities and helpers
```

### Code Standards

#### Component Organization

```jsx
// Example of a component structure
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

const ComponentName = ({ prop1, prop2 }) => {
  // State and effects
  // Component logic
  return (
    // JSX
  );
};

export default ComponentName;
```

#### Naming Conventions

- Components: PascalCase (GameCard.jsx)
- Utilities: camelCase (formatScore.js)
- Hooks: use prefix (useGameState.js)

## Development Journal

### Day 1: Initial Setup

#### Project Configuration with Vite

Opted for Vite over Create React App - a decision driven by the need for faster iteration during game development. The instant dev server startup and module-level HMR proved crucial for rapid prototyping:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

The path aliasing setup significantly simplified our import structure, particularly valuable for the planned modular game system.

#### Design System Foundation

Implemented a design system using HSL colors and CSS variables. This approach solved several common theming challenges we faced in previous projects:

```css
/* The core of our design system */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}
```

The HSL color model particularly shines in our dark mode implementation - a simple class toggle handles theme switching with zero flash of unstyled content. Coupled with Tailwind's color configuration:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        dark: "hsl(var(--primary-foreground))",
      },
    },
  },
}
```

#### ESLint Configuration

Adopted ESLint's new flat config system with its default React settings. The out-of-the-box rules aligned perfectly with our needs, requiring minimal customization while maintaining robust code quality standards.

### Day 2: Building the Foundation

#### Router Configuration

Set up React Router with a configuration-based approach, moving away from traditional switch/route patterns. The new structure uses a centralized route configuration object:

```js
// routes/config.js
export const routesConfig = {
  home: {
    path: "",
    component: HomePage,
    meta: {
      title: "Accueil",
      icon: Home,
    },
  },
  // ... other routes
};
```

This choice turned out particularly valuable for maintainability - adding new game routes will be as simple as extending the config object.

#### Component Architecture

Established a three-tier component hierarchy that proved essential for scaling:

- `ui/`: Core building blocks (Button, Card, Badge)
- `layout/`: Structural components (RootLayout, GridContainer)
- `game/`: Game-specific components (coming soon)

The initial Button implementation highlighted an interesting challenge with Tailwind class conflicts:

```jsx
// Button.jsx - Solved className conflicts with cn utility
const Button = React.forwardRef(({ className, variant = "default" }) => (
  <Comp
    className={cn(
      "inline-flex rounded-md text-sm font-medium",
      variant === "default" && "bg-primary text-primary-foreground",
      className
    )}
  />
));
```

Created a `cn` utility combining `clsx` and `tailwind-merge` to handle these class merging edge cases elegantly - a small solution with significant impact on component development workflow.
