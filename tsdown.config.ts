import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './webview-src/index.ts',
  noExternal: () => true,
  outDir: './webview-dist'
})