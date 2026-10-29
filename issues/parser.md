## Resolution — completed

The course's engineering update says #4471 closed 5 October 2026: parser FIXED,
`fix(dates): parse dd/mm for eu locales`. Close as completed based on that desk update.
The five anomalous bodies below remain historical evidence without an independently proven mechanism.

## Scope and report count

**379 unique reports** are assigned to `parser` in #4471 by the exported `causeOf` function after deduplicating IDs. This includes five anomalies investigated within this ticket; 374 other parser-assigned + 5 anomalous + 33 form-hint = 412. The overlapping investigation #3 is closed. Do not claim every assigned report proves the same mechanism.

## Problem

The shared parser reads month first for day-first tenant input. Harbour Dental (`en-GB`, booking-v2) report R-41200 says 7 April became 4 July. App and email reports can share this cause; booking-v2 form reports also land here. The tenant directory, not the browser locale or intake tag, determines expected date order: R-41205 is Morrow Tax (`fr-FR`), app, despite browser `en-US` and hint intake tag.

## Reproduce / expected / actual

Enter `07/04/2026` through the affected shared path for a day-first tenant. Expected: 7 April. Actual shared-parser interpretation: 4 July. Verify against the original input and resulting invite when reproducing in production.

## Fix and acceptance

Use the tenant's date contract consistently rather than unconditional month-first parsing. Check app, email, and booking-v2 form paths with ambiguous and unambiguous days and a month-first control. This fix does not alone fix booking-v3 hint mismatch (#2).

### Anomalous evidence within this scope

R-41202 describes Tuesday 12 May versus Monday 11 May; R-41209 says June bookings are one day off; R-41236 says an invite preceded its booking; R-41344 describes Lisbon Tuesday versus Toronto Monday; R-41620 says Tuesday 6 October showed as Monday. These five remain in this ticket's count. Obtain original input, stored date/time, event and client timezones, ICS/invite, and creation/delivery timestamps before claiming a demonstrated mechanism. No separate root cause is established by the export.

Evidence: `src/lib/kb/causes.ts`, `src/lib/kb/locales.ts`, tenant directory, report export, computed `CauseTable`. Run `npm run analyze` for all assigned IDs. Reports seen 2026-04-01 through 2026-10-04 across 11 tenants. Intake tags: parser 356, hint 23.
