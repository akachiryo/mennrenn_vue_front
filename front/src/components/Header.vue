<template>
  <v-app>
    <v-app-bar absolute color="#6A76AB" dark prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title @click="toHome" class="wrap-text"
        >MennRenn</v-app-bar-title
      >
      <!-- 管理者 -->
      <v-tabs v-if="isAdmin" right>
        <v-tab :to="'/admin/users'"> ユーザー一覧</v-tab>
        <v-tab :to="'/rooms'">ルーム一覧</v-tab>
        <v-tab :to="'/admin/tags'">タグ一覧</v-tab>
        <v-tab :to="'/chatrooms'"> ルームチャット一覧</v-tab>
        <v-tab @click="logout"> ログアウト</v-tab>
      </v-tabs>
      <!-- ログイン中 -->
      <v-tabs v-else-if="logging" right>
        <v-tab @click="myProfile"> マイページ</v-tab>
        <v-tab :to="'/rooms'">部屋一覧</v-tab>
        <v-tab :to="'/room/new'"> 部屋作成</v-tab>
        <v-tab :to="'/chatrooms'"> ルームチャット</v-tab>
        <v-tab @click="logout"> ログアウト</v-tab>
      </v-tabs>
      <!-- ログアウト中 -->
      <v-tabs v-else right>
        <v-tab :to="'/'"> ホーム</v-tab>
        <!-- <v-tab :to="'/about'"> コンテンツ</v-tab> -->
          <v-menu bottom left open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text  class="align-self-center mr-4">コンテンツ</v-btn>
            </template>
            <v-list class="grey lighten-3">
              <v-list-item :to="`/aboutzoom`">ZOOM</v-list-item>
              <v-list-item :to="`/aboutvideo`">サイト内ビデオ通話</v-list-item>
            </v-list>
          </v-menu>
        <v-tab :to="'/signup'"> 新規登録</v-tab>
        <v-tab :to="'/signin'"> ログイン</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-if="isAdmin">
          <v-list-item :to="`/admin/users`">
            <v-list-item-title>ユーザー一覧</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/rooms`">
            <v-list-item-title>ルーム一覧</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/admin/tags`">
            <v-list-item-title>タグ一覧</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/chatrooms`">
            <v-list-item-title>ルームチャット一覧</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <!-- ログイン中 -->
        <v-list-item-group v-else-if="logging">
          <v-list-item @click="myProfile">
            <v-list-item-title>マイページ</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/rooms`">
            <v-list-item-title>部屋一覧</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/room/new`">
            <v-list-item-title>部屋作成</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/chatrooms`">
            <v-list-item-title>ルームチャット</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <!-- ログアウト中 -->
        <v-list-item-group v-else>
          <v-list-item :to="`/`">
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/about`">
            <v-list-item-title>コンテンツ</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/signup`">
            <v-list-item-title>新規登録</v-list-item-title>
          </v-list-item>
          <v-list-item :to="`/signin`">
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isAdmin() {
      return this.$store.getters['auth/currentUser'].admin;
    },
    logging() {
      return this.$store.getters['auth/currentUser'].id;
    },
  },
  methods: {
    logout() {
      if (confirm('ログアウトしますか？')) {
        this.$store.dispatch('auth/logout');
        this.$router.push(`/`);
      }
    },
    myProfile() {
      const userId = this.$store.getters['auth/currentUser'].id;
      this.$router.push(`/users/${userId}`);
    },
    toHome() {
      this.$router.push(`/`);
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

.wrap-text {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
