/**
 * Lightweight dev server — one Node process, no Turbopack/HMR.
 * Serves public/ with the same path rewrites as next.config.mjs.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const REWRITES = [
  ['/webapp/node_modules/@vexcode/', '/webapp/lib/@vexcode/'],
  ['/node_modules/@vexcode/', '/webapp/lib/@vexcode/'],
  ['/static/', '/webapp/static/'],
  ['/dist/', '/webapp/dist/'],
  ['/lib/', '/webapp/lib/'],
  ['/resources/', '/webapp/resources/'],
  ['/style/', '/webapp/style/'],
  ['/fonts/', '/webapp/fonts/'],
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.map': 'application/json',
};

function applyRewrites(urlPath) {
  for (const [from, to] of REWRITES) {
    if (urlPath.startsWith(from)) {
      return to + urlPath.slice(from.length);
    }
  }
  return urlPath;
}

function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (p === '/') p = '/index.html';
  p = applyRewrites(p);
  const filePath = path.normalize(path.join(PUBLIC, p));
  if (!filePath.startsWith(PUBLIC)) return null;
  return filePath;
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cache-Control', 'no-cache');

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    if (!res.headersSent) res.writeHead(500);
    res.end('Internal Server Error');
  });
  stream.pipe(res);
}

function tryFile(res, filePath, onMiss) {
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      sendFile(res, filePath);
      return;
    }
    onMiss();
  });
}

const server = http.createServer((req, res) => {
  const filePath = resolveFile(req.url || '/');
  if (!filePath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  tryFile(res, filePath, () => {
    if (!filePath.endsWith('.html')) {
      tryFile(res, `${filePath}.html`, () => {
        res.writeHead(404);
        res.end('Not Found');
      });
      return;
    }
    res.writeHead(404);
    res.end('Not Found');
  });
});

server.listen(PORT, HOST, () => {
  const hostShown = HOST === '0.0.0.0' ? 'localhost' : HOST;
  console.log('');
  console.log('  VEX GO — static dev (lightweight, 1 process)');
  console.log(`  Workspace : http://${hostShown}:${PORT}/webapp/index.html`);
  console.log(`  Portal    : http://${hostShown}:${PORT}/`);
  console.log('');
  console.log('  Edit React landing page → npm run dev:next');
  console.log('');
});
