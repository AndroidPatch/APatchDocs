import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'ru-RU',
	description: 'Root-решение на основе ядра для устройств Android',

	themeConfig: {
		nav: nav(),

		lastUpdatedText: 'Последнее обновление',

		sidebar: {
			'/ru/': sidebarGuide(),
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bmax121/APatch' },
		],
	},
})

function nav() {
	return [{ text: 'Руководство', link: '/ru/what-is-apatch' }]
}

function sidebarGuide() {
	return [
		{
			text: 'Guide',
			items: [
				{ text: 'Что такое APatch?', link: '/ru/what-is-apatch' },
				{ text: 'Требования к установке', link: '/ru/requirements' },
				{ text: 'Предупреждение', link: '/ru/warn' },
				{ text: 'Установка', link: '/ru/install' },
				{ text: 'Патч', link: '/ru/patch' },
				{ text: 'Прошивка', link: '/ru/flash' },
				{ text: 'Помощь и поддержка', link: '/ru/support' },
				{ text: 'Частые вопросы', link: '/ru/faq' },
			],
		},
	]
}
