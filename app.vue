<template>
  <v-app>
    <v-main class="pt-0">
      <home />
      <about />
      <contact />
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import footerBar from './components/FooterBar'
import home from './components/HomeSection'
import about from './components/AboutSection'
import contact from './components/ContactSection'

export default {
  name: 'App',

  components: {
    footerBar,
    home,
    about,
    contact
  },

  data: () => ({
    fab: null,
    color: '',
    flat: null
  }),

  watch: {
    fab (value) {
      if (value) {
        this.color = 'secondary'
        this.flat = false
      } else {
        this.color = 'transparent'
        this.flat = true
      }
    }
  },

  created () {
    const top = window.pageYOffset || 0
    if (top <= 60) {
      this.color = 'transparent'
      this.flat = true
    }
  },

  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    }
  }
}
</script>

<style scoped>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
