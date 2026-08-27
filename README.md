# Neryxomka

Neryxomka is a real estate platform built around one core idea: **every
property should carry its own digital passport** — a verifiable history of
renovations, repairs, and utility work, not just a listing photo and a price.
Buyers and tenants get real transparency before they commit; owners, agents,
and agencies get a place to show that a property's condition is actually
documented.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet (see [ROADMAP.md](ROADMAP.md) for what's in and
out of scope for this phase).

## The core entities

- **Property** — a physical unit (apartment, house, land, commercial space,
  etc.) with its location, characteristics, and ownership/access info.
- **Record** — a single history entry on a property: a renovation, a repair,
  a utility replacement. This is the "digital passport" itself.
- **Listing** — a sale or rental offer tied to a property.
- **Complex** — a development containing multiple properties.
- **Developer** — the company behind a complex.
- **Agency** / **Agent** — the businesses and individuals who represent
  properties and listings.
- **Request** — a buyer's or tenant's stated need, for matching against
  listings.
- **Comment** — reviews/feedback on a property, listing, agency, agent, or
  developer.

## How people use it

- **Feed** — a swipeable stream of listings; favourite what's interesting,
  ignore what isn't.
- **Explore** — search and filter listings by type, deal, status, price, and
  location.
- **Map** — find properties by location, with a summary panel per pin.
- **Editor** — try out the data-entry forms for any entity.
- Every entity also has its own dedicated page showing its full profile,
  history, and related listings/comments.

## Who's behind a property

Properties and listings are never anonymous: each one can be linked to the
developer who built it, the agency and agent representing it, and the
record history that backs up its condition — so a buyer can see who to trust
and why, not just what's being sold.

## Status

See [ROADMAP.md](ROADMAP.md) for exactly what's built, what's explicitly
out of scope for this phase (no real backend, no persistence, no
verification/moderation/monetization yet), and why.

For contributor/developer setup and coding conventions, see
[AGENTS.md](AGENTS.md).
