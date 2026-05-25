/**
 * Mirror Blockly media so relative URLs
 * node_modules/@vexcode/blockly/media/* resolve when served from /webapp/.
 * (Folder is gitignored; run before dev/build or on CI.)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBAPP = path.join(__dirname, '..', 'public', 'webapp');
const SRC = path.join(WEBAPP, 'lib', '@vexcode', 'blockly', 'media');
const DEST = path.join(WEBAPP, 'node_modules', '@vexcode', 'blockly', 'media');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    if (fs.statSync(from).isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

if (!fs.existsSync(SRC)) {
  console.error('sync-blockly-media: missing source', SRC);
  process.exit(1);
}

copyDir(SRC, DEST);
console.log('sync-blockly-media: copied to', DEST);
