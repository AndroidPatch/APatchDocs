import { defineConfig, SiteConfig } from 'vitepress'
import locales from './locales'
import { readdir, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineConfig({
  title: 'APatch Docs',
  locales: locales.locales,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://apatch.top'
  },
  buildEnd: async (config: SiteConfig) => {
    let files = [];
    try {
      files = files.filter(file => !file.startsWith('.'));
    } catch (e) {
      // ignore
    }
    await writeFile(JSON.stringify(files));
  }
})
