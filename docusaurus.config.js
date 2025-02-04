// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubTheme = require('prism-react-renderer/themes/github');
const nightOwlTheme = require('prism-react-renderer/themes/nightOwl');
const nightOwlLightTheme = require('prism-react-renderer/themes/nightOwlLight');
const palenightTheme = require('prism-react-renderer/themes/palenight');
const vsDarkTheme = require('prism-react-renderer/themes/vsDark');
const vsLightTheme = require('prism-react-renderer/themes/vsLight');

const remarkDisableTokenizers = require('remark-disable-tokenizers');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LHTP',
  tagline: 'Learn How to Program',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fidgetech.learnhowtoprogram.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fidgetech', // Usually your GitHub org/user name.
  projectName: 'lhtp', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {
      src: '/usersnap-loader.js',
      defer: true,
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [
              remarkDisableTokenizers,
              { block: ['indentedCode'] },
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-frontmatter'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Fidgetech',
        logo: {
          alt: '',
          src: 'img/favicon-32x32.png',
          href: 'https://fidgetech.org',
          // target: '_self'
        },
        items: [
          {
            type: 'doc',
            docId: 'courses',
            position: 'left',
            label: 'Fidgetech Code',
          },
          {
            type: 'doc',
            docId: 'student-handbook',
            position: 'left',
            label: 'Handbook',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Fidgetech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
      algolia: {
        appId: 'YA74J3518R',
        apiKey: '38674fb1fbdfbc0d1d6610e0107c4c6a',
        indexName: 'new-learnhowtoprogram-fidgetech',
      },
    }),
};

module.exports = config;
