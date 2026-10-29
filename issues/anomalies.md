## Scope and report count

**5 unique reports**, already included in the 379 parser-assigned reports in #1. This is an investigation, not a confirmed third root cause or five additional reports. The automatic tenant/channel classifier cannot explain these bodies.

| ID | Evidence |
| --- | --- |
| R-41202 | Tuesday 12 May invite versus Monday 11 May calendar |
| R-41209 | Every June booking one day off |
| R-41236 | Invite arrived before booking was made |
| R-41344 | Same meeting Tuesday in Lisbon and Monday in Toronto |
| R-41620 | Tuesday 6 October showed as Monday; reporter stopped reporting |

These are not demonstrated month/day reversals. `desk-notes.json` lists them; the rendered cause table says they were read as one-day moves but filed under parser by tenant.

## Investigation and acceptance

Obtain original input, stored date/time, event timezone, generated ICS/invite, each client's timezone, and creation/delivery timestamps. Reproduce the Lisbon/Toronto comparison. Check date-only conversion and timezone boundaries as hypotheses, not established causes. Investigate R-41236's creation/delivery ordering separately if its evidence does not share the others' cause. Keep reports open until mechanism is established and split this investigation if multiple causes emerge.

Counts: 374 other parser-assigned + these 5 + 33 hint = 412. See `npm run analyze`, the report export, desk notes, and the signed review. Do not let a queued parser fix close this investigation by default.
