const tape = require('tape')
const convert = require('xml-js')
const fs = require('fs')
const path = require('path')

tape('saves URL to home page', function (assert) {
    const pages = getPagesBySitemap(getSitemap())

    const homePage = pages.find(page => page.url === 'https://steemdocs.net/')

    assert.ok(homePage, 'home page is defined')
    assert.end()
})


tape('saves URL to platform/primitives/structs/authority.html page', function (assert) {
    const pages = getPagesBySitemap(getSitemap())

    const authorityPage = pages.find(page => page.url === 'https://steemdocs.net/platform/primitives/structs/authority.html')

    assert.ok(authorityPage, 'authority page is defined')
    assert.end()
})

function getPagesBySitemap(sitemap) {
    const pages = sitemap.elements[0].elements.map(entry => {
        const [url, lastmod] = entry.elements
        return {
            url: url.elements[0].text,
            lastmod: lastmod.elements[0].text
        }
    })

    return pages
}

function getSitemap() {
    const sitemapXmlContent = fs.readFileSync(path.join(__dirname, '../', '/docs/.vuepress/dist/sitemap.xml'))
    return JSON.parse(convert.xml2json(sitemapXmlContent))
}