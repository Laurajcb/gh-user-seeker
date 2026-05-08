# Migration Guide: Custom Webpack → Vite

## Context

This project uses a custom Webpack 5 + Babel config (not standard CRA). The migration principles are the same, but you won't need to run `react-scripts eject` or deal with CRA abstractions — which actually makes this simpler.

**Good news**: `@tailwindcss/vite` is already in `package.json`. You just need to wire it all up.

---

## What Changes Between Webpack and Vite

| Concern | Webpack (current) | Vite (target) |
|---|---|---|
| Config file | `webpack.config.js` | `vite.config.js` |
| Entry point | set in webpack config | `index.html` at root (script tag) |
| HTML template | `public/index.html` via plugin | `index.html` at project root |
| JSX transform | Babel via `babel-loader` | `@vitejs/plugin-react` (esbuild) |
| CSS | `MiniCssExtractPlugin` | native, no config needed |
| Static images | `file-loader` | put in `public/` or `import` directly |
| Dev server | `webpack serve` | `vite` |
| Build | `webpack --mode production` | `vite build` |
| Env vars | `process.env.X` | `import.meta.env.VITE_X` |

---

## Step-by-Step Migration

### Step 1 — Install Vite dependencies

```bash
npm install --save-dev vite @vitejs/plugin-react
```

Leave webpack packages in place for now — remove them only after everything works.

---

### Step 2 — Create `vite.config.js` at the project root

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3007,
    open: true,
  },
})
```

---

### Step 3 — Move `index.html` to the project root

Vite requires `index.html` at the root, not inside `public/`.

```bash
mv public/index.html ./index.html
```

Then add a script tag pointing to your entry file **inside `<body>`**:

```html
<body>
  <div id="app"></div>
  <script type="module" src="/src/index.js"></script>
</body>
```

> Your root element is `id="app"` (not `id="root"`). Keep it — `src/index.js` already targets it.

---

### Step 4 — Update `package.json` scripts

```json
"scripts": {
  "start": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

### Step 5 — Test that it runs

```bash
npm start
```

Fix errors before moving on. Common ones:
- `Cannot find module` → missing import or wrong path
- JSX transform error → check `@vitejs/plugin-react` is in plugins array

---

### Step 6 — Handle static assets

- **Images imported in JS** (`import logo from './assets/logo.png'`) → work as-is
- **Images referenced in CSS** → work as-is
- **Files referenced by URL string** → move them to `public/` folder

Your `src/assets/` images imported via JS will work without changes. Test visually.

---

### Step 7 — Verify Tailwind CSS works

`@tailwindcss/vite` is already installed and wired in `vite.config.js`. Tailwind v4 should work automatically. If you have a `tailwind.config.js` from v3, check the [v4 migration guide](https://tailwindcss.com/docs/upgrade-guide) — v4 no longer uses that file.

---

### Step 8 — Clean up Webpack

Once everything works, remove old build tools:

```bash
npm uninstall webpack webpack-cli webpack-dev-server babel-loader html-loader html-webpack-plugin mini-css-extract-plugin file-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime babel-eslint @babel/eslint-parser
```

Then delete `webpack.config.js` and `.babelrc`.

---

## Project-Specific Gotchas

1. **No env vars** — you don't use `process.env.*` anywhere, so nothing to change. If you add env vars later, prefix them `VITE_` and reference via `import.meta.env.VITE_X`.

2. **React 17 API** — `src/index.js` uses `ReactDOM.render()`. Vite doesn't care — it works fine. You can upgrade to React 18 (`createRoot`) separately later.

3. **MUI v4 + v5 mixed** — `@material-ui/core` (v4) and `@mui/material` (v5) coexist. This is a pre-existing issue unrelated to Vite, but if you see style conflicts after migration, that's likely the cause.

4. **SCSS** — your webpack config handled `.scss` files. If any component imports `.scss`, install: `npm install --save-dev sass`.

5. **No client-side routing** — you don't use React Router, so `historyApiFallback` from webpack dev server isn't needed.

---

## How to Ask for Help

When you get stuck, give me:

1. **The exact error** — paste the full terminal output or browser console error, not a paraphrase
2. **Which step you're on** — e.g. "Step 5, running npm start"
3. **The relevant file** — paste `vite.config.js`, the component, or `package.json`

Example:
> "I'm on Step 5. Running `npm start` gives this error: [paste]. Here's my vite.config.js: [paste]"

---

## Verification Checklist

- [ ] `npm start` opens the app in the browser on port 3007
- [ ] Searching for a GitHub user works (API call + display)
- [ ] Images render correctly
- [ ] Tailwind utility classes apply
- [ ] MUI components render with correct styles
- [ ] `npm run build` produces `dist/` with no errors
- [ ] `webpack.config.js` and `.babelrc` deleted
- [ ] Webpack devDependencies removed from `package.json`
