<template>
  <v-container mt-n2 pt-0>
    <!-- <v-row  class="home-top">
      <v-col cols="60">
        <v-row>
          <p class="text-h5 font-weight-bold home-header-font">1人でできる面接練習</p>
          <p class="text-h6 home-header-font">
            1人では難しい面接練習を、このサイトが完全サポートいたします。<br>
            面接で成功しましょう。
          </p>
        </v-row>
        <v-row>
          <v-col cols="6">
             <v-btn
              color="primary"
              to="/signup"
              class="mx-10 px-12"
              x-large
            >
              <v-icon class="me-3">mdi-account-plus</v-icon>
              新規登録
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
          color="secondary"
          @click="guestLogin" x-large
          >
              <v-icon class="me-3">mdi-account-box</v-icon>
              ゲストログイン
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">

      </v-col>



      <v-col justify="center" align="center" cols="12" >
        <p class="home-header-font text-h4 font-weight-bold">1人でできる面接練習</p>
      </v-col>
      <v-row>
        <v-col cols="4">
          <v-img src="../assets/home-header-1.png" max-width="100%" height="auto"></v-img>
          <p class="home-header-img-font" align="center">録音・録画機能</p>
        </v-col>
        <v-col cols="4">
          <v-img src="https://picsum.photos/id/11/500/300"></v-img>
          <p class="home-header-img-font"  align="center">豊富な質問パターン、回答例</p>
        </v-col>
        <v-col cols="4">
          <v-img src="https://picsum.photos/id/11/500/300"></v-img>
          <p class="home-header-img-font"  align="center">困ったときに相談</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex align-end">
           <v-btn
              color="primary"
              to="/signup"
              class="ml-auto mx-10 px-12"
              x-large
            >
              <v-icon class="me-3">mdi-account-plus</v-icon>
              新規登録
            </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
          color="secondary"
          @click="guestLogin" x-large
          >
              <v-icon class="me-3">mdi-account-box</v-icon>
              ゲストログイン
            </v-btn>
        </v-col>
      </v-row>
    </v-row> -->
    <v-parallax dark src="../assets/home-top.png" class="home-img">
      <v-row align="center" justify="center">
        <v-col class="text-center" xs="12" sm="12" md="6">
          <h1 class="text-h4 font-weight-thin mb-4">個人でできる面接練習</h1>
          <h4>
            １人では難しい面接練習を、このサイトが完全サポートいたします。<br>
            面接で成功しましょう。
          </h4>
          <div class="mt-10">
            <v-btn
              color="primary"
              to="/signup"
              class="registed-btn mx-10 px-12"
              x-large
            >
              <v-icon class="me-3">mdi-account-plus</v-icon>
              新規登録
            </v-btn>
            <v-btn color="secondary" @click="guestLogin" x-large>
              <v-icon class="me-3">mdi-account-box</v-icon>
              ゲストログイン
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">
          <div class="header-top-sliders">
            <v-carousel height="400px" width="80%" cycle hide-delimiter-background>
              <v-carousel-item
                v-for="(about, i) in about4s"
                :key="i"
                :src="about.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
        
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <div>
      <h1 class="home-room text-center" color="#444444">新着ルーム一覧</h1>
    </div>
    <v-sheet class="mx-auto" color="#EEFFFF">
      <v-slide-group class="pa-4">
        <v-slide-item v-for="room in rooms" :key="room.id">
          <v-card class="ma-4" max-width="310">
            <v-card-title>
              <span class="text-h5 text-truncate">{{ room.title }}</span>
            </v-card-title>
            <v-card-text class="font-weight-bold text-truncate">
              {{ room.content }}
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    :src="room.user.avatar_url"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ room.user.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action
                  v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
                ></v-list-item-action>
              </v-list-item>
            </v-card-actions>
            <v-card-text
              class="text--primary text-truncate"
              style="min-height: 64px"
            >
              <v-chip
                class="ma-1"
                color="orange"
                text-color="white"
                small
                v-for="tag in room.tags"
                :key="tag.name"
              >
                <v-icon left class="mr-0">mdi-music-accidental-sharp</v-icon>
                {{ tag.name }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div>
      <h1 class="home-room text-center mt-10 mb-10" color="#444444">
        苦手を武器に。面接でライバルに差を付けよう！
      </h1>
      <fade-in-left>
        <v-row class="mt-10">
          <v-col xs="12">
            <v-img height="300" width="400" src="../assets/home-1.png"></v-img>
          </v-col>
          <v-col xs="12">
            <p class="text-h6 font-weight-bold">1人で面接練習ができる</p>
            <p>
              ユーザー作成から練習まで１分もかかりません。想定される質問もこちらで用意してあるので、あなたはその質問に答えるだけです。
            </p>
          </v-col>
        </v-row>
      </fade-in-left>
      <fade-in-right>
        <v-row class="mt-10">
          <v-col xs="12">
            <v-img height="300" width="400" src="../assets/home-2.png"></v-img>
          </v-col>
          <v-col xs="12">
            <p class="text-h6 font-weight-bold">「就職、転職したいけど何からしたらいいのかわからない」</p>
            <p>
              業界理解、転職方法等不安が多く面接に踏み切れないことがあります。そんなんときは、このサイトで情報収集をしましょう。相談部屋を作成することができます。また、タグの検索機能もあるので、気になったら検索してみましょう！
            </p>
          </v-col>
        </v-row>
      </fade-in-right>
      <fade-in-left>
        <v-row class="mt-10">
          <v-col xs="12">
            <v-img height="300" width="400" src="../assets/home-3.png"></v-img>
          </v-col>
          <v-col xs="12">
            <p class="text-h6 font-weight-bold">オンラインで練習ができる</p>
            <p>
              リモートワークなど働き方が変化している昨今、面接にもその影響が表れています。このサイトを使って練習相手を探し、当サイトもしくZOOMを使い面接本番と同じ環境で練習ができます。
            </p>
          </v-col>
        </v-row>
      </fade-in-left>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import FadeInLeft from '../components/FadeInLeft.vue';
import FadeInRight from '../components/FadeInRight.vue';

export default {
  data() {
    return {
      about4s: [
        { src: require('../assets/home-header1.png') },
        { src: require('../assets/home-header2.png') },
        { src: require('../assets/home-header3.png') },
      ],
      model: null,
      rooms: null,
      tags: [],
      query: {
        selectedTags: [],
        roomTitle: '',
      },
      pagingMeta: null,
      currentPage: 1,
    };
  },
  components: {
    FadeInRight,
    FadeInLeft,
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      const searchParams = {
        q: {
          title: this.query.roomTitle,
          tag_ids: this.query.selectedTags,
        },
      };
      const pagingParams = { page: this.currentPage };
      const params = { ...searchParams, ...pagingParams };
      const paramsSerializer = (params) =>
        qs.stringify(params, { arrayFormat: 'brackets' });
      const res = await axios.get(`/api/v1/rooms`, {
        params,
        paramsSerializer,
      });
      this.rooms = res.data.rooms;
      this.pagingMeta = res.data.meta;
    },
    async fetchTags() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      const res = await axios.get(`/api/v1/tags`);
      this.tags = res.data.tags;
    },
    async guestLogin() {
      try {
        const sessionParams = {
          session: {
            email: 'guest@guest.com',
            password: 'guestguest',
          },
        };
        await this.$store.dispatch('auth/login', sessionParams);
        this.$router.push(`/rooms`);
      } catch (error) {
        alert(error.response.data.error.messages);
      }
    },
  },
};
</script>

<style>
.home-top {
  background-color: #6472c9;
  width: 102vw;
  position: relative;
  left: 52%;
  transform: translateX(-50%);
  padding: 40px;
}

.home-header-font {
  color: white;
}

.home-header-img-font {
  color: white;
}

.header-top-sliders {
  width: 80%;
  height: 80%;
}

.home-top,
.home-room {
  color: #444444;
  font-size: xx-large;
}

.home-img {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

@media not all and (min-width: 521px) {
  .registed-btn {
    margin-bottom: 20px;
  }
}
</style>
