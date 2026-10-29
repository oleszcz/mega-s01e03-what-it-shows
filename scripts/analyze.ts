import fs from 'node:fs';
import assert from 'node:assert/strict';
import { uniqueById, groupByCause, type Report, type Tenant } from '../src/lib/kb/causes.ts';

const raw: Report[] = JSON.parse(fs.readFileSync('src/lib/data/reports-4471.json', 'utf8'));
const tenants: Tenant[] = fs.readdirSync('src/lib/data/tenants').map(f => JSON.parse(fs.readFileSync(`src/lib/data/tenants/${f}`, 'utf8')));
const reports = uniqueById(raw).filter(r => r.mergedInto === 4471);
const groups = groupByCause(reports, r => tenants.find(t => t.handle === r.tenant));
const notes = JSON.parse(fs.readFileSync('src/lib/data/desk-notes.json', 'utf8'));
assert.equal(raw.length, 427);
assert.equal(reports.length, 412);
assert.equal(groups.find(g => g.cause === 'parser')?.reports.length, 379);
assert.equal(groups.find(g => g.cause === 'hint')?.reports.length, 33);
assert.equal(reports.filter(r => notes.oneDayMove.includes(r.id)).length, 5);
console.log(JSON.stringify({
  rawRows: raw.length, uniqueReports: reports.length, duplicateRows: raw.length - reports.length,
  groups: groups.map(({ reports, ...g }) => ({ ...g, count: reports.length, reportIds: reports.map(r => r.id) })),
  anomalies: reports.filter(r => notes.oneDayMove.includes(r.id)),
  reconciliation: '379 parser-assigned (374 other + 5 anomalous) + 33 hint = 412. Anomalies overlap parser; they are not five additional reports.'
}, null, 2));
