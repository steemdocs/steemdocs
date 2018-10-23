<template>
  <div>

    <section v-for="section in sections">
      <h2>{{ section.name }}</h2>

      <ul v-if="!section.subsections">
        <li v-for="page in section.pages">
          <router-link :to="page.path">
            {{ page.title }}
          </router-link>
        </li>
      </ul>

      <div v-if="section.subsections">
        <article v-for="subsection in section.subsections">
          <h4>{{ subsection.name }}</h4>

          <ul>
            <li v-for="page in subsection.pages">
              <router-link :to="page.path">
                {{ page.title }}
              </router-link>
            </li>
          </ul>
        </article>
      </div>
    </section>

  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>

<script>
const tree = [
  { name: 'Properties' },
  { name: 'Primitives', subsections: [
    { name: 'Types' },
    { name: 'Structs' }
  ] },
  { name: 'Methods' },
  { name: 'Operations' },
  { name: 'Plugins' },
  { name: 'Protocol', subsections: [
    { name: 'Crypto' }
  ]}
]

export default {
  props: {
    pages: Array
  },
  computed: {
    sections () {
      return tree.map(section => ({
        name: section.name,
        subsections: section.subsections ? section.subsections.map(subsection => ({
          name: subsection.name,
          pages: this.pages.filter(this.inDirectory(subsection.name.toLowerCase()))
        })) : null,
        pages: section.subsections 
          ? null 
          : this.pages.filter(this.inDirectory(section.name.toLowerCase()))
      }))
    }
  },
  methods: {
    inDirectory: function (dir) {
      return page => (
        page.path.indexOf('.html') > -1 &&
        page.path.indexOf(dir) > -1 &&
        !page.frontmatter.draft
      )
    }
  }
}

</script>