// plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {

          }
        },
        dark: {
          dark: true,
          colors: {

          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
