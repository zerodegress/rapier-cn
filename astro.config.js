import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rapier 中文文档',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN'
                }
            },
			social: {
				github: 'https://github.com/zerodegress/rapier-cn',
			},
            customCss: ['./src/styles/custom.css'],
			sidebar: [
                {
                    label: '关于',
                    link: '/about/'
                },
				{
					label: '用户指南',
                    items: [
                        {
                            label: 'Rust',
                            autogenerate: { directory: 'user-guides/rust' }
                        },
                        {
                            label: 'Bevy插件',
                            autogenerate: { directory: 'user-guides/bevy-plugin' }
                        },
                        {
                            label: 'JavaScript',
                            autogenerate: { directory: 'user-guides/javascript' }
                        },
                    ]
				},
			],
		}),
	],
});
