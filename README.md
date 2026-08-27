# Healthcare

Healthcare is a patient-record platform built around one core idea: **every
patient should carry their own digital medical passport** — a verifiable
history of diagnoses, treatments, medications, and test results, not just a
name on a chart. Patients get real transparency into their own care;
doctors, departments, and facilities get a place to show that a patient's
condition is actually documented over time.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet (see [ROADMAP.md](ROADMAP.md) for what's in and
out of scope for this phase).

## The core entities

- **Patient** — a person receiving care, with demographics, admission
  status, and ward/room info.
- **Record** — a single history entry on a patient: a diagnosis, a
  prescription, a lab result, a procedure, an imaging study, a vaccination.
  This is the "digital passport" itself.
- **Appointment** — a scheduled visit or procedure tied to a patient.
- **Facility** — a hospital or clinic building containing multiple
  departments.
- **Network** — the health system or hospital group behind a facility.
- **Department** / **Doctor** — the clinical units and practitioners who
  treat patients and own appointments.
- **Referral** — a stated need for care (e.g. a GP referring a patient to a
  specialist), for matching against appointments.
- **Comment** — clinical notes from doctors, or feedback from patients, on a
  patient, appointment, department, doctor, or facility.

## How people use it

- **Worklist** — a clinician's stream of assigned patients; flag what needs
  attention, clear what's resolved.
- **Explore** — search and filter patients by ward, condition, status, and
  facility (staff-only; not a public directory).
- **Map** — find facilities by location, with a summary panel per pin.
- **Editor** — try out the data-entry forms for any entity, including adding
  a new record (diagnosis, medication, result) to a patient's history.
- Every entity also has its own dedicated page showing its full profile,
  history, and related appointments/comments.

## Who's behind a patient's care

Patients and their records are never anonymous to the care team: each
patient can be linked to the facility admitting them, the department and
doctor treating them, and the record history that backs up their
condition — so clinicians can see the full picture, not just the current
visit.

Patient data is private by default: a doctor sees their own patients, and a
patient sees only their own record — unlike the public browsing model this
project started from.

## Status

See [ROADMAP.md](ROADMAP.md) for exactly what's built, what's explicitly
out of scope for this phase (no real backend, no persistence, no
verification/moderation/monetization yet), and why.

For contributor/developer setup and coding conventions, see
[AGENTS.md](AGENTS.md).
