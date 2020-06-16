module.exports = {
  title: 'Nirvana',
  tagline: 'Clinical-grade variant annotation',
  url: 'https://illumina.github.io',
  baseUrl: '/NirvanaDocumentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'illumina', // Usually your GitHub org/user name.
  projectName: 'NirvanaDocumentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nirvana',
      logo: {
        alt: 'Nirvana',
        src: 'img/NirvanaIcon.svg',
      },
      links: [
        {
          href: 'https://github.com/Illumina/Nirvana',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Illumina, Inc. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Illumina/NirvanaDocumentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
