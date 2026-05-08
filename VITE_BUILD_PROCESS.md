# How Vite Handles the Build Process

## Dev Mode vs Production Build

Vite behaves very differently depending on whether you run `vite` (dev) or `vite build` (production).

---

## Dev Mode (`npm start` → `vite`)

In dev mode, Vite does **not bundle** your code. It starts a dev server and lets the browser request each file individually using native ES Modules. Files are transformed on demand.

```mermaid
sequenceDiagram
    participant B as Browser
    participant V as Vite Dev Server
    participant P as Plugins
    participant FS as Your Source Files

    B->>V: GET /
    V->>FS: Read index.html (project root)
    V-->>B: Serve index.html

    B->>V: GET /src/index.js (from script tag)
    V->>FS: Read src/index.js
    V->>P: @vitejs/plugin-react → transform JSX
    V-->>B: Return plain JS (ES Module)

    B->>V: GET /src/App.jsx (imported by index.js)
    V->>FS: Read src/App.jsx
    V->>P: @vitejs/plugin-react → transform JSX
    V-->>B: Return plain JS (ES Module)

    B->>V: GET /src/styles.css (if imported)
    V->>P: @tailwindcss/vite → process Tailwind
    V-->>B: Return CSS as JS module (injected into DOM)
```

> **Key insight**: Vite never bundles files in dev mode. Each `import` becomes a real HTTP request. This is why it starts instantly regardless of project size.

---

## Production Build (`npm run build` → `vite build`)

In production, Vite uses **Rollup** under the hood to bundle everything into optimized static files.

```mermaid
flowchart TD
    A[index.html at project root] --> B[Vite reads entry point]
    B --> C{Plugins run}
    C --> D["@vitejs/plugin-react\nTransforms JSX → JS"]
    C --> E["@tailwindcss/vite\nGenerates only used CSS classes"]
    D --> F[Rollup Bundler]
    E --> F
    F --> G[Tree-shaking\nRemove unused code]
    G --> H[Code splitting\nSplit into chunks]
    H --> I[Minification\nCompress JS + CSS]
    I --> J["dist/ folder\n─ index.html\n─ assets/index-[hash].js\n─ assets/index-[hash].css"]
```

---

## How Plugins Fit In

```mermaid
flowchart LR
    subgraph vite.config.js
        direction TB
        P1["@vitejs/plugin-react"] 
        P2["@tailwindcss/vite"]
    end

    JSX["*.jsx files"] -->|"transform JSX syntax\nto React.createElement()"| P1
    CSS["Tailwind classes\nin your components"] -->|"scan + generate\nonly used CSS"| P2

    P1 --> OUT["Browser-readable JS"]
    P2 --> OUT2["Minimal CSS bundle"]
```

---

## Comparison: Webpack (before) vs Vite (after)

```mermaid
flowchart TD
    subgraph Webpack["Webpack — Old Setup"]
        W1[All source files] --> W2[Babel transforms ALL files upfront]
        W2 --> W3[Bundle everything into bundle.js]
        W3 --> W4[Dev server serves bundle.js]
    end

    subgraph Vite["Vite — New Setup"]
        V1[Browser requests a file] --> V2[Vite transforms THAT file on demand]
        V2 --> V3[Serve as native ES Module]
        V3 --> V1
    end
```

> **Why Vite is faster in dev**: Webpack builds the entire bundle before serving anything. Vite only transforms what the browser actually asks for, so startup is near-instant.
