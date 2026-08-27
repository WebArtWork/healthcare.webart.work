### Development setup

**Prerequisites:** Node `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm 8+
(Angular CLI 22 is provided locally via devDependencies).

```sh
npm install   # install dependencies
npm start     # serve on http://localhost:4200, talking directly to it.webart.work
```

Environments live in `src/environments/`:

- `environment.ts` for local development (extends `environment.prod.ts`)
- `environment.prod.ts` for production builds (API URL, meta tags, languages, defaults)

**Scripts:**

- `npm start` — dev server, talking directly to the API URL configured in `src/environments/environment.ts`
- `npm run build` — production app build to `dist/`
- `npm run build:ngx-bos` — build the `@wawjs/ngx-bos` package with ng-packagr
- `npm run start:uikit` / `npm run build:uikit` — serve/build `projects/uikit`
- `npm run start:showcase` / `npm run build:showcase` — serve/build `projects/showcase`
- `npm run start:translator` / `npm run build:translator` — serve/build `projects/translator`

Each of `uikit`, `showcase`, and `translator` is also directly reachable via the
Angular CLI itself if you'd rather not go through the npm script aliases, e.g.
`ng serve uikit` or `ng build translator`.

**Project structure (key paths):**

- `src/app/app.config.ts` — root providers (zoneless change detection, `ngxBosProvide`, WAW services, TinyMCE, router)
- `src/app/app.routes.ts` — route map for guest, user, and admin areas
- `src/app/app.formcomponents.ts` — project-specific dynamic form components
- `src/app/layouts/` — layout shells for guest/user routes
- `src/app/pages/` — routed pages per role (e.g. `guest/sign`, `user/profile`)
- `src/environments/` — API / meta / language configuration
- `src/i18n/en.json` / `src/i18n/ua.json` — interface translations (served at `/i18n`), read by `@wawjs/ngx-translate`. Each file is an array of strings, one per language, positionally aligned — `en.json[i]` is both the English source text and the lookup key used everywhere in `src/app` (e.g. `translateService.translate('Settings')`), and `ua.json[i]` is its translation. `projects/translator` is the tool for browsing/editing these.
- `projects/ngx-bos/` — the reusable `@wawjs/ngx-bos` package (users/auth, file upload, form adapters, guards, selectors, pages, and routes). See [projects/ngx-bos/README.md](projects/ngx-bos/README.md).
- `projects/uikit/` — ngx-prime component reference (a demo page per component, across Form/Data/Button/Overlay/Navigation/Feedback/Layout/Media/Misc) plus composite "in-context" pages showing several components assembled together. Its `/design-lab` route is a live theme configurator. See [projects/uikit/ROADMAP.md](projects/uikit/ROADMAP.md).
- `projects/showcase/` — a fuller example app built from real ngx-prime components with concrete demo data.
- `projects/translator/` — browses `src/i18n/en.json`/`ua.json` in a table and downloads an updated JSON per language to drop back over the real file.
- `projects/ROADMAP.md` / `projects/uikit/ROADMAP.md` — status and design notes for the three supporting apps above.

**Component class member order:**

1. Injections (via `inject()`)
2. Inputs / outputs / view queries
3. Variables (readonly/public first, then private)
4. Constructor (only when needed)
5. Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
6. Functions (public, then private)

Private variables and functions start with an underscore (`_`).

### Contributing rules

- Use **Conventional Commits**: `type(scope): subject`
- Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `style`, `chore`, `build`, `ci`, `revert`
- Subject: **imperative**, present tense, **no period**, keep it short
- One commit = **one logical change** (split big work into smaller commits)
- Prefix private class variables with an underscore (e.g. \_cache, \_token, \_state) to clearly mark internal usage and avoid accidental external access.
- In Angular templates, if the same expression (signal read, computed, or method call) is used more than once, assign it with `@let` and reuse the variable instead of calling it repeatedly. Use inline expression only when it appears once.
- Use Tailwind via BEM + @apply in component scss; keep templates readable (no long utility strings in HTML).
- Avoid hover effects that change layout (border/size/padding). Prefer non-layout effects (background tint, shadow) and always add matching :focus-visible styles.
- Keep spacing and colors consistent (use Tailwind scale + existing design tokens; avoid ad-hoc pixel values unless unavoidable).
- Document only public functions and variables with short, clear comments directly above their declarations (purpose + expected behavior).
- Angular forms: use the `signals-based forms API only`. Import from `@angular/forms/signals` (e.g. `import { form, submit } from '@angular/forms/signals';`) and avoid non-signal forms patterns in new code.
- Angular v20+ signal-first APIs: use function-based APIs instead of decorators wherever possible: input() (not @Input()), output() (not @Output()), viewChild()/viewChildren() (not @ViewChild()/@ViewChildren()), contentChild()/contentChildren() (not @ContentChild()/@ContentChildren()), and model() for two-way binding when appropriate; in templates use the new control flow (@if, @for, @switch) instead of *ngIf/*ngFor/\*ngSwitch, and prefer signals with computed()/effect() for local state over manual subscription patterns unless RxJS interop is clearly needed.
- CSS variables (design tokens) first: use the tokens defined in src/styles.scss for colors, spacing, radius, shadows, motion, typography, and layout (e.g. var(--c-_), var(--sp-_), var(--radius-_), var(--shadow-_), var(--motion-\*), var(--ff-base), var(--container), var(--gutter)). Do not hard-code hex colors or random pixel values in templates or SCSS; if a value is missing, extend :root instead of bypassing the system. In Tailwind, prefer mapping utilities to tokens (e.g. via config or custom classes using var(--token)) rather than scattering arbitrary values like bg-[#123456] or p-[13px]. Ensure all components remain compatible with data-mode, data-density, and data-radius, and keep Tailwind usage aligned with the global design tokens rather than overriding them ad hoc.
