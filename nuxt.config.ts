import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  generate: {
    nojekyll: true
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap' },
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ],
    titleTemplate: 'Vue +Nuxt3 with GH pages and Actions',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'CVue +Nuxt3 with GH pages and Actions.', content: 'Meta description' }
    ]
  },

  mode: 'universal',
  target: 'static',
  ssr: false,
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  plugins: ['~/plugins/vuetify.ts'],
  typescript: {
    typeCheck: true
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  router: {
    base: '/vue-nuxt-gh-staticlanding'
  },
  app: {
    baseURL: '/vue-nuxt-gh-staticlanding'
  }

})
