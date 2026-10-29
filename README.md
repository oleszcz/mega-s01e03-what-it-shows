# kb — the support knowledge base

## S01E03 review deliverables

- [Signed review source](src/routes/kb/incidents/4471-review/+page.svx)
- [Rendered review HTML](build/kb/incidents/4471-review.html) — download/serve the `build` directory to include its CSS and interactive JavaScript.
- [Replacement decision](src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx)
- [GitHub issues](https://github.com/oleszcz/mega-s01e03-what-it-shows/issues): parser (379 assigned), hint (33), and five overlapping anomalies for investigation.

Run `npm ci`, `npm run analyze`, and `npm run build`. For the complete interactive desk view,
run `npx vite preview --host 127.0.0.1` and open `/kb/incidents/4471-review`.
The exported components are rendered by SvelteKit + mdsvex; numbers are not copied from intake tags.
The signed page displays desk ref **DR-6D50-DNE9**. The unchanged historical accepted
decision 0001 is superseded by 0002, and the active incident/triage pages link to the update.

The dated export covers reports through 4 October 2026. Runtime freshness banners depend on
the rendering date. Counts deduplicate 427 rows to 412 reports: 379 parser-assigned (including
five anomalies) plus 33 hint. No claim is made that the five anomalies have a proven common cause.

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.
