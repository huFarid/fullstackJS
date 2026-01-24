# Copilot Instructions for UniCafe Project

## Project Overview
**UniCafe** is a React feedback application built with Vite. It allows users to submit feedback (good/neutral/bad) and view aggregated statistics about the feedback received.

### Tech Stack
- **Framework**: React 19.1.1 with Vite 7 (ESM module)
- **Build Tool**: Vite with Fast Refresh support via `@vitejs/plugin-react`
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Development**: React 19 hooks (`useState`) for state management

## Architecture & Key Patterns

### Component Structure
The project uses a single-file component pattern:
- **App.jsx**: Main component managing feedback state (`goodCount`, `neutralCount`, `badCount`) using React hooks
- **Statistics**: Sub-component (currently incomplete) intended to display aggregated feedback metrics
- **CSS**: Component-specific styling in `App.css`, global styles in `index.css`

### State Management
- Uses React's built-in `useState` hook for local state
- State variables are initialized at zero and incremented via button click handlers
- **Pattern**: Simple, functional component style with hooks - no external state management library

### Data Flow
1. User clicks feedback buttons (good/neutral/bad)
2. Button handlers increment respective state counters
3. Calculated statistics in Statistics component: average rating, positive percentage, totals
4. **Note**: Statistics component currently has syntax issues (missing return statement, unused props)

## Development Workflow

### Key Commands
```bash
npm run dev        # Start dev server with HMR (Vite default port 5173)
npm run build      # Production build to ./dist
npm run lint       # ESLint validation
npm run preview    # Preview production build locally
```

### ESLint Configuration Notes
- Custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` - allows unused variables starting with uppercase or underscore (common for component names or convention-based exclusions)
- Enforces React Hooks rules via `eslint-plugin-react-hooks`
- Enforces React Refresh compatibility

## Critical Issues to Address
1. **Statistics component incomplete**: Missing `return` statement, not receiving `props` correctly
2. **Unused variables**: `goodCount`, `neutralCount`, `badCount` referenced inside Statistics but not passed as props
3. **Typo**: "nuetral" should be "neutral"

## Code Conventions
- JSX files use `.jsx` extension
- Component names follow PascalCase
- Inline arrow functions for event handlers (e.g., `onClick={()=>setState(state+1)}`)
- Functional components with React Hooks, no class components
- Minimal component separation (currently all in App.jsx)

## Integration Points
- **HMR**: Vite Fast Refresh via `@vitejs/plugin-react` - automatic browser refresh on save
- **Entry Point**: [main.jsx](src/main.jsx) - renders App to DOM
- **Asset Pipeline**: Static assets in `public/`, imported assets in `src/assets/`

## Next Steps for Improvements
- Split Statistics into a properly connected component receiving state as props
- Implement conditional rendering (show stats only when feedback exists)
- Fix typos and syntax errors detected by ESLint
- Consider adding input validation and feedback reset functionality
