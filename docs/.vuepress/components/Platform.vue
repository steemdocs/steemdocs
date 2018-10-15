<template>
  <section>
    <article v-for="section in sections">
      <h2>{{ section.dir }}</h2>
      <ul>
        <li v-for="page in section.pages">
          <router-link :to="page.path">
            {{ page.title }}
          </router-link>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>

<script>
const subdirectories = [
  'operations',
  'plugins',
  'primitives',
  'properties'
]

export default {
  props: {
    pages: Array
  },
  computed: {
    sections () {
      return subdirectories.map(dir => ({
        dir: dir,
        pages: this.pages.filter(this.inDirectory(dir))
      }))
    }
  },
  methods: {
    inDirectory: function (dir) {
      return page => (
        page.path.indexOf(dir) > -1 &&
        page.frontmatter.published
      )
    }
  }
}

</script>