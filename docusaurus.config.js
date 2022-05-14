// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'for 🤖',
  tagline: '🤖 are cool',
  url: 'https://kiyan-a.github.io',
  baseUrl: '/sev/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Kiyan-a', // Usually your GitHub org/user name.
  projectName: 'sev', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ki',
        logo: {
          alt: 'Ki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '📖 文档',
            position: 'right',
            label: '📖文档',
          },
          { to: '/blog', label: '✏️经验', position: 'right' },
          { to: '/tool', label: '🛠️工具', position: 'right' },
          { to: '/about', label: '💻关于', position: 'right' },
          {
            href: 'https://github.com/Kiyan-a',
            label: '🤖GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '文档',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Vue',
                href: 'https://cn.vuejs.org/',
              },
              {
                label: 'Element UI',
                href: 'https://element.eleme.cn/#/zh-CN',
              },
              {
                label: 'Vite',
                href: 'https://vitejs.cn/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Kiyan-a',
              },
              {
                label: '稀土掘金',
                href: 'https://juejin.cn/user/897675666396296',
              },
            ],
          },
        ],
        copyright: `Ki 版权所有 © ${new Date().getFullYear()}😁 积跬步以至千里，致敬每个爱学习的你！`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
