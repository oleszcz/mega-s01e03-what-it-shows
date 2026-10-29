## Resolution — won't fix / not planned

The course's engineering update says #4471 closed 5 October 2026: hint WON'T FIX,
booking-v3 form retired. Close as not planned, not completed: the affected form was removed,
not repaired. Preserve the 33-report evidence below.

## Scope and report count

**33 unique reports** in #4471 have a separate `hint` cause after deduplicating IDs. They come from booking-v3 forms for Alder Physio (`de-DE`), Copper Studio (`es-ES`), and Pale Harbour (`pt-PT`), 2026-04-17 through 2026-09-22. Intake incorrectly tags 15 parser and 18 hint.

## Problem

Booking-v3 prints `MM/DD/YYYY`, while the form reads input using the day-first tenant convention. Following the displayed instruction swaps the intended month/day. These reports were merged under the known parser ticket with no independent ticket. A shared parser fix does not establish this mismatch is resolved.

## Reproduce / expected / actual

For Copper Studio's booking-v3 form, enter `06/01/2026` to request June 1 following its month-first hint. Expected: June 1, or a hint matching the actual accepted format. Actual day-first interpretation: January 6. R-41230 (Copper Studio, form) reports a January 6 / June 1 swap, although intake calls it parser.

## Fix and acceptance

Make the visible hint and form's accepted date order agree with the tenant locale. Verify all three affected tenants, browser locale differing from tenant locale, ambiguous inputs, and booking-v2 / app / email controls. Do not merge reports solely by subject or browser-derived tags.

Evidence: `DATE_HINT`, `causeOf`, tenant directory, `CauseTable`, `DedupeExplorer`. Run `npm run analyze` for all IDs. Counts reconcile: 379 parser-assigned + 33 hint = 412 unique reports.
