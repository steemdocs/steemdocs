const test = require('tape')
const convert = require('xml-js')
const fs = require('fs')
const path = require('path')

test('saves URL to home page', function (assert) {
  const pages = getPagesBySitemap(getSitemap())

  const homePage = pages.find(page => page.url === 'https://steemdocs.net/')

  assert.ok(homePage, 'home page is defined')
  assert.end()
})

test('saves URL to `authority` page', function (assert) {
  const url = 'https://steemdocs.net/platform/primitives/structs/authority.html'
  const pages = getPagesBySitemap(getSitemap())

  const authorityPage = pages.find(page => page.url === url)

  assert.ok(authorityPage, 'authority page is defined')
  assert.end()
})

test('does not save pages located out of "/docs" directory', function (assert) {
  const url = 'https://steemdocs.net/GLOSSARY_CONTRIBUTING.html'
  const pages = getPagesBySitemap(getSitemap())

  const glossaryContributingPage = pages.find(page => page.url === url)

  assert.notOk(glossaryContributingPage, 'Glossary Contributing page is NOT defined')
  assert.end()
})

function getPagesBySitemap (sitemap) {
  const pages = sitemap.elements[0].elements.map(entry => {
    const [url, lastmod] = entry.elements
    return {
      url: url.elements[0].text,
      lastmod: lastmod.elements[0].text
    }
  })

  return pages
}

function getSitemap () {
  const src = path.join(__dirname, '../', '/docs/.vuepress/dist/sitemap.xml')
  const sitemapXmlContent = fs.readFileSync(src)
  return JSON.parse(convert.xml2json(sitemapXmlContent))
}
