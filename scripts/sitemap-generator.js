const { writeFile, existsSync } = require('fs')
const { resolve, join } = require('path')
const { createSitemap } = require('sitemap')
const esm = require('esm')

const STEEM_DOCS_URL = 'https://steemdocs.net'

const requires = esm(module)

const { siteData: { pages } } = requires(resolve('node_modules/@vuepress/core/.temp/internal/siteData'))

console.log(pages)

const urls = pages.map(toSitemapUrlEntry)

const sitemap = createSitemap({
  hostname: STEEM_DOCS_URL,
  cacheTime: 600 * 1000,
  urls,
})

const dest = join(__dirname, '../docs/.vuepress/public')

if (!existsSync(dest)) {
  console.error('.vuepress public dir does not exist:', dest)
  process.exit(1)
}

writeFile(resolve(dest, 'sitemap.xml'), sitemap.toString(), (err) => {
  if (!err) console.log(`sitemap generated in: "${dest}"`)
  else console.error(err)
})

function toSitemapUrlEntry(page) {
  const lastmodISO = page.lastUpdated ? new Date(page.lastUpdated).toISOString() : undefined

  return {
    url: page.path,
    lastmodISO,
    changefreq: 'daily',
  }
}