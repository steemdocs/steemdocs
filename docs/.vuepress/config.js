var path = require('path')

module.exports = {
  palette: path.resolve(__dirname, 'palette.styl'),
  dest: '../../dist',
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
  plugins: {
    '@vuepress/i18n-ui': true,
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/plugin-medium-zoom': true
  }
}
