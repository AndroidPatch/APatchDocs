import { defineConfig } from 'vitepress'
import locales from './locales'

export default defineConfig({
    title: 'APatch Docs',
    locales: locales.locales,
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname: 'https://apatch.dev'
    },
})
