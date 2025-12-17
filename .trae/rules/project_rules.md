# Project Rules

## 1. Project Overview
- **Type**: Nuxt 3 Web Application
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 2. Tech Stack
- **Framework**: [Nuxt 3](https://nuxt.com)
- **UI Library**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: `@heroicons/vue`, `lucide-vue-next`
- **State Management**: `useState` (Native Nuxt 3 state management)

## 3. Directory Structure
- `assets/`: Global assets (CSS, images, fonts).
  - `assets/css/main.css`: Main entry for global styles.
- `components/`: Vue components.
  - Group components by feature or domain (e.g., `components/landing/`).
  - Use PascalCase for component filenames (e.g., `HeroSection.vue`).
- `layouts/`: Application layouts (e.g., `default.vue`).
- `pages/`: Application routes/pages.
- `public/`: Static files (images, favicon, etc.).
- `types/`: (Optional) Shared TypeScript type definitions.

## 4. Coding Standards

### 4.1. Vue Components
- Use **Composition API** with `<script setup lang="ts">`.
- **Filename**: PascalCase (e.g., `FeatureCard.vue`).
- **Props**: Define props using `defineProps<PropsType>()` for better type inference.
- **Emits**: Define emits using `defineEmits<{ ... }>()`.

### 4.2. Icons
- **Standard**: Prefer using `@heroicons/vue/24/outline`.
- **Usage**: MUST import icons as components (e.g., `import { RocketLaunchIcon } from '@heroicons/vue/24/outline'`) rather than using raw SVG strings.

### 4.3. SEO
- **Standard**: Use `useSeoMeta` for all SEO-related meta tags (title, description, og:*, etc.) instead of `useHead`.
- **Reasoning**: `useSeoMeta` provides better type safety and a flatter structure.

### 4.4. Styling (Tailwind CSS)
- Use Utility classes primarily.
- **Layout Consistency**: Use `container mx-auto px-4` for the main content width of each page section to ensure consistent alignment across the application.
- Use the configured theme colors in `tailwind.config.js`:
  - `primary`: Main brand colors.
  - `accent`: Accent/Highlight colors.
  - `secondary`: Neutral/Background colors.
- Avoid `<style scoped>` unless necessary for complex animations or pseudo-elements not easily handled by Tailwind.
- Dark mode is configured via `class` strategy (`darkMode: 'class'`).

### 4.5. Comments & Documentation
- **Language**: All comments (including code comments and HTML comments) MUST be in **Chinese**.
- **Function-Level Comments**: Every function MUST have a comment block explaining:
  - Functionality description.
  - Parameters (name, type, description).
  - Return value (type, description).
```typescript
/**
 * 计算包含税费的总价。
 *
 * @param price - 商品基础价格。
 * @param taxRate - 适用的税率（例如 0.1 表示 10%）。
 * @returns 包含税费的最终价格。
 */
const calculateTotal = (price: number, taxRate: number): number => { ... }
```

## 5. Best Practices
- **Auto-imports**: Leverage Nuxt's auto-import feature for Vue composables (`ref`, `computed`, etc.) and Nuxt utils (`useRouter`, `useState`).
- **Performance**: Use `<NuxtLink>` for internal navigation. Use `<img>` or `<NuxtImg>` (if configured) for images.
- **Responsiveness**: Design Mobile-First using Tailwind's breakpoints (`sm`, `md`, `lg`, `xl`).

## 7. Restrictions
- **Testing**: Do NOT generate unit tests or test directories (e.g., `tests/`) unless explicitly requested.

