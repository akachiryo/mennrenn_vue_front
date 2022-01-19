<template>
  <v-app>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>MennRenn</v-app-bar-title>
      <!-- ログイン中 -->
      <v-tabs v-if="logging" right>
        <v-tab
          v-for="(loginList, index) in loginLists"
          :key="index"
          :to="`/users/${$store.getters['auth/currentUser'].id}`"
        >
          <div v-if="loginList.name === 'ログアウト'" @click="logout">
            {{ loginList.name }}
          </div>
          <div v-else>
            {{ loginList.name }}
          </div>
        </v-tab>
      </v-tabs>
      <!-- ログアウト中 -->
      <v-tabs v-else>
        <v-tab
          v-for="(logoutList, index) in logoutLists"
          :key="index"
          :to="`${logoutList.url}`"
        >
          {{ logoutList.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <!-- ログイン中 -->
        <v-list-item-group v-if="logging">
          <v-list-item
            v-for="(loginList, index) in loginLists"
            :key="index"
            :to="`${loginList.url}`"
          >
            <v-list-item-title
              v-if="loginList.name === `ログアウト`"
              @click="logout"
            >
              {{ loginList.name }}
            </v-list-item-title>
            <v-list-item-title v-else>
              {{ loginList.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <!-- ログアウト中 -->
        <v-list-item-group v-else>
          <v-list-item
            v-for="(logoutList, index) in logoutLists"
            :key="index"
            :to="`${logoutList.url}`"
          >
            <v-list-item-title>{{ logoutList.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import constants from '../common/constants';

export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
      loginLists: constants.loginLists,
      logoutLists: constants.logoutLists,
    };
  },
  computed: {
    logging() {
      return this.$store.getters['auth/currentUser'];
    },
  },
  methods: {
    logout() {
      if (confirm('ログアウトしますか？')) {
        this.$store.dispatch('auth/logout');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
</style>
