import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'en-US',
	description: 'A kernel-based root solution for Android devices.',

	themeConfig: {
		nav: nav(),

		lastUpdatedText: 'Last updated',

		sidebar: {
			'/': sidebarGuide(),
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bmax121/APatch' },
		],
	},
})

function nav() {
	return [{ text: 'Guide', link: '/what-is-apatch' }]
}

function sidebarGuide() {
	return [
		{
			text: 'Guide',
			items: [
				{ text: 'What is APatch?', link: '/what-is-apatch' },
				{ text: 'Install Requirements', link: '/requirements' },
				{ text: 'Warning', link: '/warn' },
				{ text: 'Installation', link: '/install' },
				{ text: 'Patch', link: '/patch' },
				{ text: 'Flash', link: '/flash' },
				{ text: 'APModule Guide', link: '/apm-guide' },
				{ text: 'Help and Support', link: '/support' },
				{ text: 'FAQ', link: '/faq' },
			],
		},
	]
}
