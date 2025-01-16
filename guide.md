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

### Day 3: Theme System Implementation

#### Theme Architecture

Implemented a robust theme system combining React's Context API with Zustand for state management. The architecture addresses a common challenge in theme management: balancing global state accessibility with component-level encapsulation.

The theme system uses a three-component architecture, each with distinct responsibilities:

```jsx
// ThemeProvider.jsx - The core orchestrator
export const ThemeProvider = ({ children }) => {
  const { theme, strategy } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
```

This separation of concerns manifests in three key components:

1. ThemeProvider handles the system's core logic and state distribution
2. ThemeToggle offers a simple interface for theme switching
3. ThemeControl provides advanced theme management options

A particularly interesting challenge arose around theme persistence. While our previous localStorage implementation worked, transitioning to Zustand's persist middleware offered a more elegant solution:

```jsx
const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      strategy: "manual",
    }),
    {
      name: "theme-storage",
    }
  )
);
```

This approach not only handles persistence automatically but also prepares our application for future database synchronization needs.

#### Component Organization

Reorganized the theme-related components into a dedicated theme directory, improving code organization and maintainability:

```
components/
  ├── theme/
  │   ├── ThemeProvider.jsx
  │   ├── ThemeToggle.jsx
  │   └── ThemeControl.jsx
  ├── layout/
  └── ui/
```

This structure facilitates better separation of concerns and makes the theme system's architecture immediately apparent to new developers.

An interesting design decision was exposing theme functionality through a Context-based hook rather than direct store access. This abstraction shields components from the underlying state management implementation:

```jsx
// Instead of directly accessing the store
const theme = useThemeStore((state) => state.theme);

// Components use the context hook
const { theme, toggleTheme } = useTheme();
```

This encapsulation proved valuable when implementing the system theme detection feature, as we could add the functionality without modifying any consuming components.

### Day 4: Navigation Architecture Refactoring

While expanding the application, we faced a key architectural decision regarding the navigation system. The challenge was to create a maintainable and responsive navigation structure without overcomplicating the codebase.

#### Navigation Strategy

Initially, we considered implementing the Composite Pattern for our navigation, which would have allowed complex nested menus and highly flexible structures. However, this approach was deemed overly complex for our current needs. Instead, we opted for a simpler yet extensible solution that leverages our existing route configuration:

```javascript
// routes/config.js - Our single source of truth
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

This configuration-driven approach provides several benefits:

- Routes, titles, and icons are centrally managed
- Adding new routes requires minimal boilerplate
- The UI automatically updates when routes change

#### Component Separation

A key insight was separating the navigation logic into three distinct parts:

1. A `useResponsiveMenu` hook handling mobile-specific behavior
2. A standalone `Navigation` component consuming our route configuration
3. The `RootLayout` orchestrating these pieces

This separation follows the principle of single responsibility while maintaining flexibility:

```javascript
// Navigation.jsx - Clean, configuration-driven component
const Navigation = ({ className, onClick }) => {
  const location = useLocation();

  return (
    <nav className={className}>
      {Object.values(routesConfig).map(({ path, meta }) => {
        // Navigation rendering logic
      })}
    </nav>
  );
};
```

#### Responsive Design Pattern

Rather than trying to anticipate every possible layout scenario, we implemented a responsive design pattern that gracefully adapts between mobile and desktop views. The key was using CSS transforms for smooth transitions and Tailwind's mobile-first approach:

```javascript
className={cn(
  "fixed inset-x-0 top-16 z-40 bg-background border-b md:hidden",
  "transform transition-transform duration-300",
  isOpen ? "translate-y-0" : "-translate-y-full"
)}
```

This approach ensures smooth animations while maintaining good performance, as transforms are GPU-accelerated.

The refactoring demonstrates an important principle in our development process: resist the urge to over-engineer solutions before they're needed. By starting with a simple but well-structured approach, we've built a foundation that can be extended when more complex requirements arise.

### Day 5: Home Page Architecture and Data Management

While building the home page, we faced an interesting architectural challenge: finding the right balance between component organization and data management. Our initial instinct was to follow common design patterns (Strategy, Observer, Builder), but this led us to an important realization about React architecture.

#### Component Organization Evolution

The journey started with a monolithic `Home.jsx` containing all sections. While functional, this approach presented clear maintainability issues. We experimented with various architectural patterns before settling on a simpler yet powerful solution:

```javascript
// Initial thought - using design patterns
class HomeSection {
  render() {
    throw new Error("Must implement render");
  }
}

// Final approach - React-centric component composition
const Section = ({ children, className, centered }) => (
  <section className={cn("py-8", centered && "text-center", className)}>
    {children}
  </section>
);
```

The shift from class-based patterns to component composition better aligned with React's philosophy. Instead of forcing object-oriented patterns, we embraced React's component model, resulting in cleaner, more maintainable code.

#### Data Management Strategy

A key insight emerged when handling game data. Rather than embedding it within components, we established a dedicated data layer:

```javascript
src/
  └── data/
      └── games/
          └── featured.js
```

This separation provides several benefits:

- Clear separation between data and presentation
- Centralized data management
- Easier future integration with backend services
- Improved testability

The decision to pass data as props rather than importing directly into components reflects a conscious choice for component reusability and explicit dependencies.

This refactoring demonstrates an important principle in our development process: while design patterns offer valuable insights, the best solution often lies in embracing the framework's inherent patterns and strengths rather than forcing traditional OOP patterns where they don't naturally fit.

### Day 6: Games Page and Component Architecture

Our work on the Games page presented an interesting challenge in balancing reusable UI components with page-specific functionality. This development process highlighted several key architectural insights.

#### Component Hierarchy Evolution

The Games page architecture emerged from careful consideration of both user needs and maintainability concerns. We started with a clear component hierarchy:

```javascript
const GamesPage = () => {
  return (
    <div>
      <GamesHero />
      <GamesFilters />
      <GamesGrid />
    </div>
  );
};
```

This simple structure masks a sophisticated interplay of components, each with distinct responsibilities. Rather than creating a monolithic page component, we opted for a modular approach that separates concerns while maintaining cohesive user experience.

#### Filter System Architecture

One of the most interesting architectural decisions involved the filter system. Initially, we considered embedding filter functionality directly within the Games page component. However, this approach would have limited reusability and complicated state management. Instead, we developed a reusable FilterSection component:

```javascript
// components/ui/filter-section/FilterSection.jsx
const FilterSection = ({ title, options, value, onChange }) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-sm font-medium min-w-24">{title}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(value === option ? "" : option)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm border transition-all",
              value === option
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
```

This component exemplifies several key principles:

1. **Single Responsibility**: Each component handles one specific aspect of the UI
2. **Reusability**: The FilterSection component is generic enough to be used across different contexts
3. **Composability**: Components can be combined in various ways to create more complex interfaces

#### State Management Strategy

The Games page required careful consideration of state management. We implemented a dedicated store using Zustand:

```javascript
export const useGamesStore = create((set) => ({
  games: [],
  filters: {
    category: "",
    difficulty: "",
    playerMode: "",
  },
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
}));
```

This state management approach offers several advantages:

- Centralized filter state accessible throughout the application
- Clean separation between UI components and data management
- Simplified testing and debugging capabilities

#### Layout System Enhancement

Our work on the Games page led to significant improvements in our layout system. The GridContainer component, in particular, evolved to handle various display requirements:

```javascript
<GridContainer columns={{ xs: 1, md: 2, lg: 3 }} gap="lg" contained>
  {/* Grid content */}
</GridContainer>
```

This responsive grid system demonstrates how we've abstracted layout concerns into reusable components while maintaining flexibility for different use cases.

#### Key Learnings

1. **Component Placement**: The decision to place FilterSection in the UI components directory rather than within the Games page hierarchy proved beneficial for reusability and maintainability.

2. **State Management**: Using Zustand for filter state management showed how lightweight state management can be both powerful and simple to implement.

3. **Responsive Design**: Our approach to responsive layout components demonstrated how we can maintain consistency while adapting to different screen sizes.

4. **Component Communication**: The interaction between filters and the game grid highlighted the importance of well-structured state management in React applications.

This development process reinforced our commitment to component-based architecture while introducing new patterns for state management and UI composition. The resulting system provides a solid foundation for future feature development while maintaining clarity and maintainability.

The Games page implementation represents a significant step forward in our architectural thinking, combining practical solutions with forward-looking patterns that will serve us well as the application grows.
