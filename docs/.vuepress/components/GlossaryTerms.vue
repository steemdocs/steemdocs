<template>
  <article>
    <section v-for="group in groups">
      <h2>{{ group.name }}</h2>

      <ul>
        <li v-for="entry in group.entries">
          <router-link :to="entry.path">
            {{ entry.title }}
          </router-link>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>

<script>
export default {
  props: {
    pages: Array
  },
  computed: {
    groups () {
      var pages = this.pages.filter(this.isGlossaryPage)
      var letters = {}

      pages.forEach(page => {
        var letter = page.title[0]
        if (!letters[letter]) letters[letter] = { pages: [] }
        letters[letter].pages.push(page)
      })

      return Object.keys(letters).map(letter => ({
        name: letter,
        entries: letters[letter].pages.map(page => ({
          title: page.title,
          path: page.path
        }))
      }))
    }
  },
  methods: {
    isGlossaryPage: function (page) {
      if (page.title === 'Glossary') return false

      var components = page.path.split('/')

      return components.length > 2 && components[1] === 'glossary'
    }
  }
}

</script>