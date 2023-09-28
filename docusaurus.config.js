// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'knowledge hub',
  tagline: 'dantoniks knowledge hub',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dantonik', // Usually your GitHub org/user name.
  projectName: 'knowledge-hub', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		docs: {
			sidebar: {
			//   hideable: true,
			  autoCollapseCategories: true,
			},
		  },
      navbar: {
		  title: 'dantonik',
		//   logo: {
		// 	alt: 'dantonik logo',
		// 	src: 'img/logo.png',
		//   },
        items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {to: '/about', label: 'about', position: 'left'},
		//   {
        //     href: 'https://linkedin.com/in/dantonik/',
        //     label: 'LinkedIn',
        //     position: 'right',
        //   },
          {
            href: 'https://github.com/dantonik/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
	  colorMode: {
		defaultMode: 'dark',
	  },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
