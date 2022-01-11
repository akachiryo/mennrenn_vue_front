<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <Header />
      <v-main>
        <router-view />
      </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
  .v-application--wrap {
  min-height: 128px;
}
</style>

