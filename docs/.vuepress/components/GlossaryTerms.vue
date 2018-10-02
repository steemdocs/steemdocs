<template>
  <ul>
    <li v-for="page in entries">
      <router-link :to="getRoute(page.path)">
        {{ page.title }}
        </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: Array
  },
  computed: {
    entries () {
      return this.pages.filter(this.isGlossaryPage)
    }
  },
  methods: {
    getRoute (path) {
      return path
    },
    isGlossaryPage: function (page) {
      if (page.title === 'Glossary') return false

      var components = page.path.split('/')

      return components.length > 2 && components[1] === 'glossary'
    }  
  }
}

</script>