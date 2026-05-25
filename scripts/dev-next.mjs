/**
 * Next.js dev with Turbopack tuned for lower RAM / fewer child processes.
 * Use only when editing app/ (React portal). For VEXcode use: npm run dev
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NODE_OPTIONS = [
  process.env.NODE_OPTIONS,
  '--max-old-space-size=768',
].filter(Boolean).join(' ');

const port = process.env.PORT || '3000';
const host = process.env.HOST || '127.0.0.1';

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['next', 'dev', '--port', port, '--hostname', host],
  { cwd: root, stdio: 'inherit', env: process.env, shell: process.platform === 'win32' },
);

child.on('exit', (code) => process.exit(code ?? 0));
