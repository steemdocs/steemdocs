var path = require('path')

module.exports = {
  ga: 'UA-127946194-1',
  locales: {
    '/': {
      lang: 'en-CA',
      title: 'SDN',
      description: 'Steem Documentation Network'
    }
  },
  themeConfig: {
    palette: path.resolve(__dirname, 'palette.styl'),
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Platform', link: '/platform/' },
      { text: 'Glossary', link: '/glossary/' }
    ],
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated'
      },
      nav: [
        {
          text: 'About',
          link: '/about/'
        },
        {
          text: 'Glossary',
          link: '/glossary/'
        }
      ]
    },
    repo: 'kareniel/steem-docs',
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    }
  },
  plugins: ['@vuepress/google-analytics']
}
