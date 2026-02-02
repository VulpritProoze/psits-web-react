# 🏗️ Portal-Based Project Structure Guide (Student vs. Admin)

> **💡 Evolution**: This guide adapts our core architecture to a **Portal-First** model. It divides the workspace into three distinct zones: `student-web`, `admin-web`, and `shared`.

> **Note:** This is an alternative to the feature-based file structure.
---

## 1. Decision Tree: Where Does My File Go?

Use this flowchart when creating ANY new file to maintain portal isolation and shared reusability:

```text
START: I need to create a new file
│
├─► Is it shared by BOTH Admin and Student portals?
│   │
│   YES ─► Go to src/shared/
│   │       ├─► Feature-Based Logic? ─► shared/features/{domain}/
│   │       ├─► Reusable UI UI? ─► shared/components/
│   │       └─► Global Library (api, lib, hooks)? ─► shared/[api|lib|hooks]/
│   │
│   NO ▼ (Portal-Specific)
│
├─► Is it specific to a Portal (Student or Admin)?
│   │
│   YES ─► Go to src/[student-web|admin-web]/
│   │       │
│   │       ├─► Does it part of a specific domain (Shop, User)? ─► [portal]/features/{domain}/
│   │       │   └─► Feature folder contains its own api, components, hooks, types.
│   │       │
│   │       ├─► Is it a ROUTE page? ─► [portal]/pages/
│   │       │   └─► (Thin composition of features).
│   │       │
│   │       ├─► Cross-feature UI (Layout)? ─► [portal]/components/
│   │       └─► Asset/Config? ─► [portal]/[assets|constants]/
│   │
│   NO ▼
│
└─► None of the above? ─► Ask in the team chat.
│
└─► None of the above? ─► Ask in the team chat.
```

### Quick Reference Table

| If you are creating a... | Local (Portal-Specific) | Global (Shared) |
| :--- | :--- | :--- |
| **Feature Module** | `[portal]/features/{domain}/` | `shared/features/{domain}/` |
| **Page / Route** | `[portal]/pages/` | *N/A (Portals own routes)* |
| **UI Component** | `[portal]/components/` | `shared/components/` |
| **Hook** | `[portal]/hooks/` | `shared/hooks/` |
| **Utility / Lib** | `[portal]/utils/` | `shared/lib/` (Critical) or `shared/utils/` (General) |
| **Type / Interface** | `[portal]/types/` | `shared/types/` |
| **Context Provider** | `[portal]/contexts/` | `shared/contexts/` |
| **Constant / Enum** | `[portal]/constants/` | `shared/constants/` |
| **Static Asset** | `[portal]/assets/` | `shared/assets/` |
| **API Config** | *Rarely portal-specific* | `shared/api/` |

---

## 2. Project Structure Overview

```text
src/
├── shared/                  # 🌎 THE LIBRARY & SHARED LOGIC
│   ├── api/                 # Global Axios instance (The root connection)
│   ├── components/          # Reusable UI Primitives (shadcn/ui, Layouts)
│   ├── features/            # Shared domains (e.g., Profile, Settings)
│   │   └── {domain}/        # Contains: api, components, hooks, types
│   ├── hooks/               # useAuth, useTheme, useMobile
│   ├── lib/                 # cn() and critical UI helpers
│   └── types/               # Global Interface & Response definitions
│
├── student-web/             # 🎓 STUDENT PORTAL
│   ├── assets/              # Student-specific images
│   ├── components/          # Portal-specific UI (Shared across student features)
│   ├── features/            # THE CORE: Domain-based modules
│   │   ├── auth/            # Login/Signup logic
│   │   ├── shop/            # Catalog, Items
│   │   └── orders/          # Cart/Transaction logic
│   ├── pages/               # Route endpoints (Thin wrappers)
│   └── constants/           # Student route paths
│
├── admin-web/               # ⚡ ADMIN PORTAL
│   ├── assets/              # Admin icons/charts
│   ├── components/          # Dashboard specific layouts
│   ├── features/            # THE CORE: Domain-based modules
│   │   ├── inventory/       # Stock management
│   │   └── management/      # User/Event oversight
│   ├── pages/               # Admin route endpoints
│   └── constants/           # Admin permission keys
│
├── App.tsx                  # Providers & Global Context Wrapper
├── main.tsx                 # Entry Point
└── router.ts                # Master router
```

---

## 3. The Anatomy of a Feature

Whether a feature is in `@shared` or a `@portal`, it should follow this standardized internal structure:

```text
feature-name/
├── api/                     # TanStack Query / Axios calls
├── components/              # Sub-components unique to the feature
├── hooks/                   # Business logic extracted into hooks
├── types/                   # Interfaces/Schemas for the feature
├── utils/                   # Data formatters for this feature
└── index.ts                 # Public API (Strict Barrel Export)
```

---

## 4. Path Aliases (Using `@`)

To keep imports clean, use the following aliases defined in `tsconfig.json`:

| Alias | Path | Usage Example |
| :--- | :--- | :--- |
| **`@shared`** | `src/shared/*` | `import { Button } from "@shared/components/ui/button"` |
| **`@student-web`** | `src/student-web/*` | `import { Home } from "@student-web/pages/Home"` |
| **`@admin-web`** | `src/admin-web/*` | `import { Dashboard } from "@admin-web/pages/Dashboard"` |

---

## 5. Summary of Rules

1.  **Strict Isolation**: A file in `student-web` should **NEVER** import from `admin-web` (and vice-versa).
2.  **shared is the Source of Truth**: If you find yourself copy-pasting code between portals, move it to `@shared`.
3.  **Portal Specificity**: Keep the `student-web` folder clean and light. High-intensity management logic belongs strictly in `admin-web`.

---

_Created: February 2026_
_Based on the Portal-First Architecture Evolution._
