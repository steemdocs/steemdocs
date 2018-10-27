const { writeFile, existsSync } = require('fs')
const { resolve, join } = require('path')
const { createSitemap } = require('sitemap')
const requires = require('esm')(module)

const STEEM_DOCS_URL = 'https://steemdocs.net'
const BUEPRESS_PUBLIC_DIR = join(__dirname, '../docs/.vuepress/public')

// laoding site pages definition
const { siteData: { pages } } = requires(resolve('node_modules/@vuepress/core/.temp/internal/siteData'))

//generation metadata for xml generator
const urls = pages.map(toSitemapUrlEntry)

const sitemap = createSitemap({
  hostname: STEEM_DOCS_URL,
  cacheTime: 600 * 1000,
  urls,
})

if (!existsSync(BUEPRESS_PUBLIC_DIR)) {
  console.error('.vuepress public dir does not exist:', BUEPRESS_PUBLIC_DIR)
  process.exit(1)
}

writeFile(resolve(BUEPRESS_PUBLIC_DIR, 'sitemap.xml'), sitemap.toString(), (err) => {
  if (!err) console.log(`sitemap generated in: "${BUEPRESS_PUBLIC_DIR}"`)
  else console.error(err)
})

// map vuepress page definition to "sitemap" generator
function toSitemapUrlEntry(page) {
  const lastmodISO = page.lastUpdated ? new Date(page.lastUpdated).toISOString() : undefined

  return {
    url: page.path,
    lastmodISO,
    changefreq: 'daily',
  }
}