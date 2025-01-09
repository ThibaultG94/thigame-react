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
- **Zustand**: Way more simpler than Redux, which is far too wordy according to me
- **TailwindCSS**: I can't do without it anymore
- **Radix UI**: Selected for robust accessibility support

## Project Architecture

### Folder Structure

We follow a modular and scalable organization:

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

- Created project using Vite
- Configured TailwindCSS
- Setup ESLint with modern config

### Day 2: Basic Structure

- Router configuration
- Created base components
- Implemented theming system
