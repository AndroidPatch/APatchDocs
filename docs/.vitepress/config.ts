import { defineConfig, SiteConfig } from 'vitepress'
import locales from './locales'
import { readdir, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineConfig( {
    title: 'APatch',
    locales: locales.locales,
    ignoreDeadLinks: true,
    sitemap: {
        hostname: 'https://apatch.top'
    },
//        buildEnd: async (config: SiteConfig) => {
//        const templateDir = resolve(config.outDir, 'templates');
//        const templateList = resolve(templateDir, "index.json");
//        let files = [];
//        try {
//            files = await readdir(templateDir);
//            files = files.filter(file => !file.startsWith('.'));
//        } catch(e) {
//            // ignore
//        }
//        await writeFile(templateList, JSON.stringify(files));
//    }
})
