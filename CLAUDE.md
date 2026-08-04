## Core Engineering Principles

- Always write production-ready code.
- Prefer readability over cleverness.
- Follow existing project patterns before introducing new ones.
- Avoid unnecessary abstractions.
- Do not over-engineer simple features.
- Make changes that are easy to maintain by another engineer.
- Explain architectural decisions when introducing new patterns.

---

# Next.js Best Practices

## App Router

- Use Next.js App Router.
- Prefer Server Components by default.
- Add `"use client"` only when required.

Client Components are allowed for:

- useState/useEffect
- browser APIs
- event listeners
- interactive UI
- client-only libraries

Avoid:

```tsx
"use client";

export default function Page() {
  return <StaticContent />;
}
```
