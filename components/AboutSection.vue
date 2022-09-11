<template>
  <section id="about" class="gray-box">
    <v-container fluid class="mx-0 px-0 lego-yellow">
      <div class="py-12" />
      <v-container class="text-center">
        <div class="text-md-h4 text-h5 font-weight-bold mb-3 ">
          Read and Code!
        </div>

        <v-responsive class="mx-auto mb-md-12 mb-5 mt-md-12 mt-5" width="70vw">
          <v-divider class="mb-1" />
        </v-responsive>

        <v-card class="mx-0 px-0" height="450px" flat>
          <v-parallax fluid class="mx-0 px-0" :src="bgHeroUrl" height="450px" />
        </v-card>

        <v-responsive class="mx-auto mb-md-12 mb-5 mt-md-12 mt-5" width="70vw">
          <v-divider class="mb-1" />
        </v-responsive>

        <v-responsive
          class="mx-auto font-weight-light mb-8"
          max-width="820"
        />

        <v-container>
          <v-row align="center" justify="center">
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" :height="height" style="background-color: #D3D3D3; overflow: visible;" flat>
                <v-card-title
                  class="justify-center  mb-12"
                  style="overflow: visible"
                >
                  <v-icon dark color="#131316" x-large>
                    mdi-code-json
                  </v-icon> <span class="mx-auto font-weight-bold">Read the article here.</span>
                </v-card-title>

                <v-card-text class="text-left text-body-1">
                  <div class="ml-md-12 ml-3">
                    Read the article here and buy us some coffee.
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" :height="height" style="background-color: #D3D3D3" flat>
                <v-card-title
                  class="justify-center mb-12"
                  style="overflow: visible; overflow-wrap: break-word"
                >
                  <v-icon dark color="#131316" x-large>
                    mdi-code-greater-than
                  </v-icon> <span class="mx-auto font-weight-bold">Fork and Develop</span>
                </v-card-title>

                <v-card-text class="text-left text-body-1">
                  <div class="ml-md-12 ml-3">
                    Fork this github here and do your own thing.
                    <br>
                    Make sure to give credit!
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-responsive>
          <div class="py-12" />
          <a href="#home" style="text-decoration: none; color: inherit;">
            <v-btn
              color="#D3D3D3"
              fab
              outlined
              class="rounded-circle"
              height="70px"
              width="70px"
            >
              <v-icon dark>mdi-chevron-double-up</v-icon>
            </v-btn>
          </a>
          <div class="py-12" />
        </v-responsive>

        <v-responsive
          class="mx-auto font-weight-light mb-8"
          max-width="820"
        >
          <div class="svg-border-waves mx-0 px-0">
            <img src="~/assets/img/wave2.svg">
          </div>
        </v-responsive>
      </v-container>
    </v-container>
  </section>
</template>

<script>
import bgHeroImage from '~/assets/img/bgHero2.png'

export default {
  data: () => ({
    bgHeroUrl: bgHeroImage
  }),

  computed: {
    height () {
      switch (this.$vuetify.display.name) {
        case 'xs': return 800
        case 'sm': return 800
        default: return 650
      }
    }
  }
}
</script>

<style scoped>

</style>
