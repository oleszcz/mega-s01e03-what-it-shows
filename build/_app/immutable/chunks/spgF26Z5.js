import{a as i,f as m,t as f}from"./Xzn9zRMf.js";import{R as b}from"./CmYPthY9.js";import{q as e,g as v,a1 as w}from"./BhFtvWva.js";import{l as k,s as y}from"./nP-srWEI.js";import{C as T,Q as R}from"./sTsNa_pf.js";import{D as x}from"./CuV4AsDF.js";import{R as _}from"./CAogOLuT.js";import{C as z}from"./aAuaARWN.js";const t={layout:"runbook",title:"#4471 review · two causes hidden by one known ticket",owner:"oleszcz with OpenCode",status:"closed",reviewed:"2026-10-29",signature:"v1.eyJzdWIiOiI5MjE0IiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTMzMDM1NzMsImV4cCI6MTc5MzM4OTk3M30.Kdp5F67i0g2jdwVQwSBYx2XgC34sZkN0vzS_rySVN80"},{layout:F,title:J,owner:X,status:G,reviewed:H,signature:M}=t;var $=m(`<h2>Decision for the next report</h2> <p><strong>Desk update — #4471 closed 5 October 2026.</strong> Engineering marks the parser <strong>fixed</strong>: <code>fix(dates): parse dd/mm for eu locales</code>. The form-hint issue is <strong>won’t fix</strong> because <strong>booking-v3 was retired</strong>. These are different resolutions: the hint was not repaired.
Ticket #1 closes as completed; ticket #2 closes as not planned. The export and tables below
describe the pre-closure evidence and keep their original counts. New reports need fresh
triage against the current product; the update does not establish a mechanism for the five
anomalous bodies or prove that every historic affected booking was corrected.</p> <p>Do not treat every date complaint as the known parser bug. Keep one ticket per demonstrated
cause, reading the body and checking the tenant’s locale, booking form, and channel.
Subject matches and intake tags are clues, not a duplicate decision. If the cause is unknown,
keep the report open for investigation rather than merging it automatically.</p> <p>This review replaces the operational advice in the <a href="/kb/incidents/4471">original incident</a> and <a href="/kb/triage/dedupe">subject-only triage</a>. The historical accepted <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a> is preserved; the replacement is <a href="/kb/decisions/0002-dedupe-by-cause">decision 0002</a>.</p> <h2>What the desk’s components actually show</h2> <!> <p>The export has <strong>427 rows but 412 unique report IDs</strong>. Overlapping export pages repeat 15
rows; a repeated ID is one report, not another affected person. The computed table assigns <strong>379 to parser and 33 to hint</strong>. These sum to 412, with no unplaced reports. Browser-based
intake tags instead suggest 371 parser and 41 hint: 23 parser reports were tagged hint and
15 hint reports were tagged parser. Use the tenant directory, not browser locale, for this
classification. Run <code>npm run analyze</code> for all IDs and reproducible checks.</p> <h3>Parser issue — 379 assigned reports</h3> <p><a href="https://github.com/oleszcz/mega-s01e03-what-it-shows/issues/1" rel="nofollow">GitHub ticket #1</a> covers the shared month-first parser used for day-first tenants. For example, Harbour Dental
uses <code>en-GB</code> and booking-v2; R-41200 says 7 April became 4 July. Morrow Tax uses <code>fr-FR</code>,
despite R-41205’s browser reporting <code>en-US</code>. Its app report belongs to parser, not hint.
App and email reports can share this cause; booking-v2 form reports also belong here.
The recommended repair was tenant-aware parsing; the desk now reports the parser fixed.</p> <h3>Form-hint issue — 33 reports, with no independent ticket before this review</h3> <p><a href="https://github.com/oleszcz/mega-s01e03-what-it-shows/issues/2" rel="nofollow">GitHub ticket #2</a> covers booking-v3 form reports from Alder Physio (<code>de-DE</code>), Copper Studio (<code>es-ES</code>), and Pale
Harbour (<code>pt-PT</code>). The hint prints <code>MM/DD/YYYY</code>, but the form reads dates the tenant’s day-first
way. Someone following the hint gets a different date. R-41230 is Copper Studio, channel <code>form</code>, and is incorrectly intake-tagged parser. The recommended repair was agreement between
hint and parser. Engineering instead retired booking-v3 and marked this won’t fix; do not
describe that as a repaired hint or as part of the parser fix.</p> <h3>Five anomalous reports — investigation, not a proven third root cause</h3> <p>The investigation within <a href="https://github.com/oleszcz/mega-s01e03-what-it-shows/issues/1" rel="nofollow">parser ticket #1</a> covers R-41202, R-41209, R-41236, R-41344, and R-41620. The separate investigation ticket #3
was closed as overlapping scope. The table footnote says they were
read as one-day moves but filed under parser by tenant. Their bodies are different evidence:</p> <ul><li>R-41202: Tuesday 12 May versus Monday 11 May.</li> <li>R-41209: every June booking is one day off.</li> <li>R-41236: an invite arrived before its booking was made.</li> <li>R-41344: Lisbon Tuesday versus Toronto Monday for the same meeting.</li> <li>R-41620: Tuesday 6 October showed as Monday; the reporter says they stopped reporting.</li></ul> <p>Do not invent a confirmed timezone or scheduling root cause from these sentences. Ask for
original input, stored date/time, event timezone, generated invite, client timezone, and
creation/delivery timestamps; compare the two clients for R-41344. Investigate ordering for
R-41236 separately if it cannot share the same cause. These <strong>five are already inside the
379</strong>, not five additional reports: 374 other parser-assigned + 5 anomalous + 33 hint = 412.</p> <h2>When it happened, and what “known” concealed</h2> <!> <p>Received and merged are different clocks. Reports began on 1 April; the 2 July merge spike
is a batch of 184 older reports, not the start of the problem or a sudden influx that day.
Reports continued to 4 October, including R-41620. “Known” and “fix queued” are desk labels,
not evidence that the underlying causes stopped harming people. Some people moved dates
themselves, held a meeting twice, or stopped reporting. Report counts measure incoming
reports, not every failure or every affected user.</p> <h2>Replace the merging rule while the desk keeps working</h2> <!> <p>The explorer already contradicts subject-only advice. Different subjects can share a cause;
the same subject can hide different causes when the channel or tenant/form changes. Two
unknown tenants do not establish a shared cause. A number or chart can be fresh while the
surrounding prose is old; the reviewed date and stale banner on the older triage page matter.</p> <p>Effective immediately: look up the tenant, read the body, compare the affected path and
mechanism, and merge only after confirming the same cause. Use the two engineering tickets
above as closed historical records; keep the five anomalies visible as unresolved evidence. Link this review from the
incident and triage pages so the next support shift finds the replacement rule.</p> <!> <!>`,1);function D(d,p){const c=k(p,["children","$$slots","$$events","$$legacy"]);b(d,y(()=>c,()=>t,{children:(h,S)=>{var o=$(),r=e(v(o),10);T(r,{ticket:4471});var a=e(r,22);R(a,{ticket:4471});var s=e(a,6);x(s,{});var n=e(s,6);z(n,{children:(u,j)=>{w();var g=f(`The source and rendered page are both deliverables. The tables, timeline, interactive examples,
and signature below come from running the exported components, not copying their source tags.`);i(u,g)},$$slots:{default:!0}});var l=e(n,2);_(l,{get signature(){return M}}),i(h,o)},$$slots:{default:!0}}))}const N=Object.freeze(Object.defineProperty({__proto__:null,default:D,metadata:t},Symbol.toStringTag,{value:"Module"}));export{N as _,D as a};
