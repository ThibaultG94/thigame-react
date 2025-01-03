# Roadmap ThiGame

## Phase 1 : Configuration de Base ✅

### Réalisé

- Installation initiale avec Vite et React
- Configuration de l'environnement de développement
  - ESLint avec configuration moderne (flat config)
  - Tailwind CSS avec système de design
  - Vitest pour les tests
- Structure de base du projet établie
  - Organisation des dossiers
  - Configuration des alias (@/\*)
  - Tests unitaires configurés

### Documentation et Fichiers Clés

- eslint.config.js : Règles de linting
- vitest.config.js : Configuration des tests
- postcss.config.js et tailwind.config.js : Configuration du styling
- vite.config.js : Configuration de build

## Phase 2 : Routing et Pages de Base 🚧

### À Faire

1. Configuration de React Router

   - Définition de la structure de routage
   - Mise en place des layouts de base
   - Gestion des routes protégées

2. Création des pages principales

   - Page d'accueil
   - Liste des jeux
   - Page de jeu individuelle
   - Page de classement
   - Page À propos

3. Tests de navigation
   - Tests des routes
   - Tests des redirections
   - Tests des layouts

## Phase 3 : Architecture et Patterns 📋

### À Faire

1. Pattern Factory pour les jeux

   - Interface de base des jeux (GameInterface)
   - Factory pour la création des jeux
   - Tests des patterns

2. Pattern Strategy

   - Stratégies de scoring
   - Stratégies de layout
   - Tests des stratégies

3. Pattern Command
   - Gestion de l'historique des actions
   - Système undo/redo
   - Tests des commandes

## Phase 4 : Composants de Base 📋

### À Faire

1. Système de thème

   - Provider de thème
   - Hook useTheme
   - Tests du système de thème

2. Composants UI

   - Button
   - Card
   - Input
   - Modal
   - Tests pour chaque composant

3. Composants de jeu
   - Timer
   - Score Display
   - Game Grid
   - Tests des composants de jeu

## Phase 5 : Premier Jeu (Memory Plus) 📋

### À Faire

1. Logique de base

   - État du jeu
   - Mécanique de matching
   - Système de score

2. Interface utilisateur

   - Grille de jeu
   - Animations des cartes
   - Feedback visuel

3. Tests et optimisation
   - Tests d'intégration
   - Tests de performance
   - Tests d'accessibilité

## Notes Importantes

### Conventions de Code

- Tests pour chaque nouvelle fonctionnalité
- Documentation des composants et fonctions
- Respect des principes SOLID

### Bonnes Pratiques

- Commits atomiques et bien documentés
- Review de code avant merge
- Mise à jour de la documentation
- Tests avant chaque PR

## Prochaines Étapes Immédiates

1. Configurer React Router
2. Créer le layout de base
3. Implémenter la page d'accueil

Cette roadmap sera mise à jour régulièrement pour refléter notre progression et les nouvelles priorités qui émergent.
