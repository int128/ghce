import * as esbuild from 'esbuild'
import * as fs from 'fs/promises'

await fs.rm('dist', { recursive: true, force: true })
await fs.cp('public', 'dist', { recursive: true })

await esbuild.build({
  entryPoints: ['src/pull_request.ts'],
  bundle: true,
  target: ['chrome130'],
  outfile: 'dist/pull_request.js',
})
