const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bhargav Murari',
  tagline: 'Passionate Automation Test Engineer',
  url: 'https://bhargavmurari7.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/AutoInfra.png',
  organizationName: 'bhargavmurari7', // Usually your GitHub org/user name.
  projectName: 'bhargavmurari7.github.io', // Usually your repo name. 
  trailingSlash: false,
  //ok
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.PNG',
      },
      items: [
        {
          type: 'doc',
          docId: 'Articles/2019-05-28-ReportPortal',
          position: 'left',
          label: 'Articles',
        },
        {to: '/blog', label: 'About MySelf', position: 'left'},
        
        {
          href: 'https://github.com/bhargavkumar-65',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/Articles/2019-05-28-SonarQube',
            },
          ],
        },
        {
          title: 'Public Profiles',
          items: [
            {
              label: 'LinkedIN',
              href: 'https://www.linkedin.com/in/bhargavmurari/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bhargavkumar-65',
            },
            {
              label: 'Cloud Certifications',
              href: 'https://www.credly.com/users/bhargav-murarisetty.4929bd2d/badges',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Auto Infra, By Bhargav Murari.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
         // editUrl:'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

//GIT_USER=bhargavkumar.65 CURRENT_BRANCH=master USE_SSH=true yarn deploy
