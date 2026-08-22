// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
// Plugins
import starlightMarkdownBlocks from 'starlight-markdown-blocks';
import starlightThemeBlack from 'starlight-theme-black';
import starlightGlossary from 'starlight-glossary';

// Role shoutouts
function roleBlock(role) {
  return {
    label: role, // not rendered, just plugin metadata
    css: ['./src/styles/role-blocks.css'],
    render: ({ h, children }) =>
      h('div', { class: `role-block role-block--${role}` }, children),
  };
}

// https://astro.build/config

export default defineConfig({
  site: 'https://xivtldr.github.io/',
  markdown: {
    processor: unified(),
  },

  integrations: [
    starlight({
      title: 'XIV TLDR',
      description: 'Quick guides for FFXIV duties.',

      logo: {
        src: './src/assets/logo.png',
      },
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/xivtldr/xivtldr.github.io',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/xivtldr/xivtldr.github.io/edit/main/docs/',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        /* 
		de: {
          label: 'Deutsch',
          lang: 'de',
        },
        fr: {
          label: 'Français ',
          lang: 'fr',
        },
		es: {
          label: 'Español ',
          lang: 'es',
        },
		jp: {
          label: '日本語 ',
          lang: 'jp',
        },
		// */
      },
      components: {
        ThemeProvider: './src/components/ForceDarkTheme.astro',
        ThemeSelect: './src/components/EmptyComponent.astro',
      },
      plugins: [
        starlightThemeBlack({
          docs: {
            showMarkdownActions: false,
          },
        }),
        starlightMarkdownBlocks({
          blocks: {
            tank: roleBlock('tank'),
            healer: roleBlock('healer'),
            all: roleBlock('all'),
            deadly: roleBlock('deadly'),
          },
        }),
        starlightGlossary({
          autoTag: {
            mode: 'all',
          },
          discovery: {
            enabled: false,
          },
        }),
      ],
      sidebar: [
        {
          label: 'Alliance Raids',
          items: [
            // { label: 'A Realm Reborn', link: 'a/arr/landing' },
            { label: 'Heavensward', link: 'a/hw/' },
            { label: 'Stormblood', link: 'a/sb/' },
            { label: 'Shadowbringers', link: 'a/shb/' },
            // { label: 'Endwalker', link: 'a/ew/' },
            // { label: 'Dawntrail', link: 'a/dt/' },
            // { label: 'Evercold', link: 'a/ec/' },
          ],
        },
        {
          label: 'Raids',
          items: [
            // { label: 'A Realm Reborn', link: 'r/arr/' },
            // { label: 'Heavensward', link: 'r/hw/' },
            // { label: 'Stormblood', link: 'r/sb/' },
            // { label: 'Shadowbringers', link: 'r/shb/' },
            // { label: 'Endwalker', link: 'r/ew/' },
            // { label: 'Dawntrail', link: 'r/dt/' },
            // { label: 'Evercold', link: 'r/ec/' },
          ],
        },
        {
          label: 'Trials',
          items: [
            // { label: 'A Realm Reborn', link: 't/arr/' },
            // { label: 'Heavensward', link: 't/hw/' },
            // { label: 'Stormblood', link: 't/sb/' },
            // { label: 'Shadowbringers', link: 't/shb/' },
            { label: 'Endwalker', link: 't/ew/' },
            { label: 'Dawntrail', link: 't/dt/' },
            // { label: 'Evercold', link: 't/ec/' },
          ],
        },
        {
          label: 'XIV TLDR',
          items: [{ label: 'Glossary', link: './glossary' }],
        },
      ],
    }),
  ],
});
