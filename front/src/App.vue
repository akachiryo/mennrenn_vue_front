<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <Header />
    <Loading v-show="loading"></Loading>
    <v-main v-show="!loading">
      <router-view 
      @loadingTrue="loadingTrue" 
      @loadingFalse="loadingFalse" 
      />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Footer,
    Header,
    Loading,
  },
  methods: {
    loadingTrue: function () {
      this.loading = true;
    },
    loadingFalse: function () {
      setTimeout(() => {
        this.loading = false;
      }, 250);
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 128px;
}
</style>
