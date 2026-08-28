// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
// Plugins
import starlightMarkdownBlocks from 'starlight-markdown-blocks';
import starlightThemeBlack from 'starlight-theme-black';
import starlightGlossary from 'starlight-glossary';
import starlightAnnouncement from 'starlight-announcement';

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
  site: 'https://xivtldr.com/',
  markdown: {
    processor: unified(),
  },

  integrations: [
    starlight({
      title: 'XIV TLDR',
      description: 'Quick guides for FFXIV duties.',

      logo: {
        src: './src/assets/logo.png',
        alt: 'XIVTLDR.com homepage',
      },
      favicon: '/favicon.png',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/xivtldr/xivtldr.github.io',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/xivtldr/xivtldr.github.io/edit/main/',
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
        starlightAnnouncement({
          announcements: [
            {
              id: 'work-in-progress-aug2026',
              content:
                "WIP: Some links may not work and past duties are actively added every day. Check back later if something's missing and keep an eye on the changelog at the bottom of this page.",
              variant: 'note',
              showOn: ['/'],
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Alliance Raids',
          items: [
            // { label: 'Evercold', link: 'a/ec/' },
            // { label: 'Dawntrail', link: 'a/dt/' },
            // { label: 'Endwalker', link: 'a/ew/' },
            { label: 'Shadowbringers', link: 'a/shb/' },
            { label: 'Stormblood', link: 'a/sb/' },
            { label: 'Heavensward', link: 'a/hw/' },
            // { label: 'A Realm Reborn', link: 'a/arr/landing' },
          ],
        },
        {
          label: 'Raids',
          items: [
            // { label: 'Evercold', link: 'r/ec/' },
            { label: 'Dawntrail', link: 'r/dt/' },
            // { label: 'Endwalker', link: 'r/ew/' },
            // { label: 'Shadowbringers', link: 'r/shb/' },
            // { label: 'Stormblood', link: 'r/sb/' },
            { label: 'Heavensward', link: 'r/hw/' },
          ],
        },
        {
          label: 'Trials',
          items: [
            // { label: 'Evercold', link: 't/ec/' },
            { label: 'Dawntrail', link: 't/dt/' },
            { label: 'Endwalker', link: 't/ew/' },
            { label: 'Shadowbringers', link: 't/shb/' },
            { label: 'Stormblood', link: 't/sb/' },
            { label: 'Heavensward', link: 't/hw/' },
            { label: 'A Realm Reborn', link: 't/arr/' },
          ],
        },
        {
          label: 'Dungeons',
          items: [
            // { label: 'Evercold', link: 'd/ec/' },
            { label: 'Dawntrail', link: 'd/dt/' },
            // { label: 'Endwalker', link: 'd/ew/' },
            // { label: 'Shadowbringers', link: 'd/shb/' },
            // { label: 'Stormblood', link: 'd/sb/' },
            // { label: 'Heavensward', link: 'd/hw/' },
            // { label: 'A Realm Reborn', link: 'd/arr/' },
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
