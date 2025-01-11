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

#### Created project using Vite

We chose Vite over Create React App (CRA) for several compelling reasons:

- **Build Performance**: Vite's dev server starts instantly regardless of app size, thanks to its ES modules-based approach. This is crucial for our project as we'll be adding multiple game modules.
- **Hot Module Replacement (HMR)**: Vite's HMR implementation is significantly faster than CRA's, updating only the changed modules instead of rebuilding the entire bundle. This is especially valuable for game development where we frequently tweak game logic and UI.

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Enables clean imports
    },
  },
});
```

#### Configured TailwindCSS

Our TailwindCSS setup is built around a sophisticated design system using HSL colors and CSS variables:

- **HSL Color System**: We use HSL for better color manipulation and theme transitions:

```css
/* index.css */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... other color tokens */
}
```

- **Dark Mode Implementation**: Our dark mode leverages CSS variables for seamless transitions:

```css
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode colors */
}
```

This setup enables:

- **Theme Consistency**: All components use the same color tokens
- **Easy Dark Mode**: Simple class toggle switches the entire theme
- **Runtime Theme Changes**: Colors can be modified without rebuilding

The implementation uses Tailwind's `theme` configuration:

```js
// tailwind.config.js
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-foreground))",
        },
        // ... other color configurations
      },
    },
  },
};
```

#### Setup ESLint with modern config

We implemented ESLint with its modern flat configuration, keeping the default settings as they align well with our needs for React development. The configuration focuses on React-specific rules and modern JavaScript practices.

### Day 2: Basic Structure

- Router configuration
- Created base components
- Implemented theming system
