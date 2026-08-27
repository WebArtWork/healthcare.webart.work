# Neryxomka Roadmap

Status: APPROVED. Scope: static investor-facing demo only. Nothing beyond
this is planned yet.

Current repo state: fresh `ngx-prime-default` Angular template. Auth /
dashboard / profile / settings pages from the template are used as-is —
no changes there.

Goal: make the product vision navigable and demoable for investors. No
backend, no persistence beyond local/static state — but content must be
real and realistic, not dummy/lorem-ipsum. All static content lives as JSON
files under `src/data/` (following the existing `src/data/company` pattern),
one dataset per entity type, loaded by services/components — not hardcoded
in components.

## Decide: which of these go in the demo?

### Entities (static JSON data, realistic content)

- [x] `property` — a few properties across different types (apartment,
      house, land, etc.)
- [x] `listing` — sale + rental listings tied to those properties
- [x] `record` — property history entries (renovation, repair, utility) —
      this is the "digital passport" differentiator
- [x] `complex` — a few developments
- [x] `developer` — a few developer profiles
- [x] `agency` — a few agencies
- [x] `agent` — a few agents, linked to agencies
- [x] `request` — a few buyer/tenant requests
- [x] `user` — public profile view
- [x] `comment` — comments/reviews on a few entities

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [x] property: view, short, icon, form
- [x] listing: view, short, icon, form
- [x] record: view, short, form (no icon per README)
- [x] complex: view, short, icon, form
- [x] developer: view, short, icon, form
- [x] agency: view, short, icon, form
- [x] agent: view, short, icon, form
- [x] request: view, short, icon, form
- [x] user: view, short, icon, form
- [x] comment: comments-view, comment-short, comment-form

### Pages

- [x] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [x] Explore — search/filter UI against the static dataset
- [x] Map — pins for entities, static coordinates in fixtures
- [x] Editor — forms render and validate, no persistence
- [x] property — dedicated detail page (replaces generic Entity page)
- [x] listing — dedicated detail page
- [x] records — dedicated detail page
- [x] complex — dedicated detail page
- [x] developer — dedicated detail page
- [x] agency — dedicated detail page
- [x] agent — dedicated detail page
- [x] client — dedicated detail page (replaces generic user-facing Entity view)

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
