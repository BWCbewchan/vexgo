/**
 * Extract VEX Class (Classroom) XAPK into public/webapp/classroom for web UI + download.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const XAPK_SRC = path.join(ROOT, 'VEX Classroom_1.5.1.1-9cf4103_APKPure.xapk');
const OUT = path.join(ROOT, 'public', 'webapp', 'classroom');
const SCRATCH = path.join(ROOT, 'scratch', 'vex-classroom-xapk');

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

if (!fs.existsSync(XAPK_SRC)) {
  console.error('Missing XAPK:', XAPK_SRC);
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });

if (!fs.existsSync(path.join(SCRATCH, 'manifest.json'))) {
  fs.mkdirSync(SCRATCH, { recursive: true });
  const zipCopy = path.join(SCRATCH, 'bundle.zip');
  fs.copyFileSync(XAPK_SRC, zipCopy);
}

const manifestPath = path.join(SCRATCH, 'manifest.json');
let manifest = {};
if (fs.existsSync(manifestPath)) {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

copyFile(path.join(SCRATCH, 'icon.png'), path.join(OUT, 'icon.png'));
copyFile(XAPK_SRC, path.join(OUT, 'VEX-Classroom.xapk'));

const meta = {
  packageName: manifest.package_name || 'com.vex.teacherapp',
  name: manifest.name || 'VEX Class',
  version: manifest.version_name || '1.5.1.1',
  versionCode: manifest.version_code,
  permissions: manifest.permissions || [],
  description:
    'VEX Class teacher app (Android). BLE classroom control for VEX GO / 123. Web panel provides shortcuts; full broadcast requires the native app or connected Brain in VEXcode.',
  extractedAt: new Date().toISOString(),
};

fs.writeFileSync(path.join(OUT, 'metadata.json'), JSON.stringify(meta, null, 2));
console.log('extract-vex-classroom: wrote', OUT);
