# FE Chat Interface – Code Challenge Solution

## Overview

This project is a front-end coding challenge to implement an interactive chat interface based on a provided Figma design. The goal was to create a polished, responsive, and accessible UI with engaging micro-interactions (such as streaming text and typing indicators) within a limited timeframe. 

**What was accomplished:** I focused on building the **Home screen** and establishing a robust foundation (design system, component architecture, theming, etc.) for the rest of the application. The Home screen UI is fully implemented with attention to design details (spacing, typography, state styles) and responsiveness. Additionally, the underlying structure for the **Text Chat** and **Voice Chat** screens is in place (routes, layout components, and essential UI components), ready to be expanded in future development. All code is written in **TypeScript** and follows modern React best practices.

**Tech Stack:**  
- React 18 (via Vite)  
- TypeScript  
- styled-components (with theming)  
- React Router DOM  
- Vitest + React Testing Library  

---

## Features

- **Atomic Design**: Atoms, Molecules, Organisms, Templates architecture.  
- **Mobile-first design**: All layouts simulate a 393×852 device with rounded corners.  
- **Home screen**: Title, animated orb, CTA buttons (Talk/Text), bottom nav bar.  
- **Animations**: Orb uses keyframe-based looping pulse animation.  
- **Accessibility**: ARIA labels, semantic roles, keyboard navigation, visible focus states.  
- **Testing**: Templates and critical UI tested with Vitest + RTL.  
- **Routing**: React Router set up for `/` (Home), `/text`, `/voice`.  
- **Scalability**: Component structure with isolated folders and clear theming.  

---

## Design System & Structure

### Atomic Design
- **Atoms**: Button, Typography.  
- **Molecules**: HomeTopBar, TalkTextSwitch, EndButton.  
- **Organisms**: AppTopBar, HomeBottomMenuBar.  
- **Templates**: HomeTemplate, TextChatTemplate, VoiceChatTemplate.  

Each component lives in its own folder with:  
`Component.tsx`, `Component.styles.tsx`, `Component.types.ts`, `Component.tests.tsx`, and `index.ts`.

### Styling & Theming
- **styled-components** with a theme for colors, typography, radii, spacing.  
- **Global styles** reset defaults, set base font (`Inter`), and background.  
- **Safe areas**: `env(safe-area-inset-bottom)` for mobile devices.  

### Accessibility
- Semantic HTML (`<main>`, `<nav>`, headings, `<button>`/`<a>`).  
- ARIA labels for icon-only buttons.  
- `aria-selected` and tab roles for toggles.  
- Visible focus rings for keyboard navigation.  
- Color contrast validated against WCAG.  

---

## Animations

- **Orb**: Keyframe pulse loop (scale & blur).  
- **Buttons**: Subtle press feedback with CSS transform.  
- **Loading states**: Buttons support a spinner animation.  
- **Planned**: Streaming text animation, typing indicator, mood/tone orb transitions.  

---

## Testing

- **Unit tests** with Vitest + React Testing Library.  
- Tests confirm rendering of HomeTemplate, TextChatTemplate, and VoiceChatTemplate.  
- Context providers included in tests (`ThemeProvider`, `MemoryRouter`).  
- TODO: Expand to interaction tests (switch, nav bar, message flow).  

---

## Assumptions & Trade-offs

- Strict **2–3h limit**: focused entirely on the **Home screen**.  
- Prepared scaffolding for Text and Voice screens (routes + templates).  
- Prioritized **architecture, design system, and accessibility** over implementing all features.  
- Did not integrate backend or complex state management (assumed out of scope).  
- Some animations (mood/tone, streaming messages) left for future work but architecture supports them.  

---

## Next Steps

With more time, I would:  

- Build full **Text Chat flow**:  
  - Message list with distinct user vs assistant bubbles.  
  - Streaming text effect for assistant responses.  
  - Typing indicator with animated dots.  
  - Composer input with send button.  
  - Auto-scroll to newest message.  
  - Error/retry handling.  

- Build full **Voice Chat flow**:  
  - Microphone controls & live transcript.  
  - Mood/tone visual orbs synced to voice.  
  - End session button with clear reset.  
  - Possible audio feedback integration.  

- Add **dark/light theme toggle** (theme system is ready).  
- Expand **test coverage**: interaction tests, accessibility checks, end-to-end flows.  
- Polish **icons** and visuals to perfectly match Figma.  
- Optimize performance (e.g., virtualized message list for long histories).  

---

## Getting Started

```bash
# Clone and install dependencies
npm install

# Run the dev server
npm run dev

# Visit the app
http://localhost:5173

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview