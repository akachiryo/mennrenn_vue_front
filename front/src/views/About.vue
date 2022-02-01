<template>
  <v-container mt-n2 pt-0>
    <v-parallax
      dark
      src="../assets/about-top.png"
      class="home-img"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <p class="text-h4 mb-4">サイトの使い方</p>
        </v-col>
      </v-row>
    </v-parallax>
    <p class="text-h4 about-title mt-10" align="center">面接の手順</p>
    <v-row class="mt-10">
      <v-col sm="6" xs="12">
         <v-img height="300" width="600" src="../assets/registed-page.png" ></v-img>
      </v-col>
      <v-col sm="6"  xs="12">
        <p class="text-h6">
          ①新規登録後、ログインしましょう。<br>
          ZOOMの登録も済ませておきましょう。無料で使え、3分ほどで登録できます。
        </p>
        <v-btn
        @click="moveLink(`https://zoom.us/`)"
        color="primary"
        >
        <v-icon class="me-5">mdi-message-video</v-icon>ZOOMの会員登録を行う
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" xs="12">
       <template>
          <v-carousel
          height="300"
          width="600"
          >
            <v-carousel-item
              v-for="(about,i) in about2s"
              :key="i"
              :src="about.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </v-col>
      <v-col sm="6" xs="12">
        <p class="text-h6">
          ②部屋一覧から、自分の条件と合う部屋に参加する。<br>
          部屋が見つからない場合、部屋を作成し、部屋に参加者が現れるまで待ちましょう。<br>
          ※部屋には作成者と参加した二人のみ入れます。
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" xs="12">
        <template>
          <v-carousel
          height="300"
          width="600"
          >
            <v-carousel-item
              v-for="(about,i) in about3s"
              :key="i"
              :src="about.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </v-col>
      <v-col sm="6" xs="12">
        <p class="text-h6">
          ③「ルームチャット」タブからチャット画面に移動し、日時を決めたらZOOMで部屋を作成し、リンクURLをチャットで送り練習を始めましょう。<br>
          <span class="text-h6">(スマートフォンの場合、ZOOMのアプリをダウンロードしましょう）。</span><br>
          練習が終わったら、「Delete Room」を押し、部屋を閉じて終了です。
        </p>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
export default {
  data () {
      return {
        about2s: [
          { src: require("../assets/about-2-1.png")},
          { src: require("../assets/about-2-2.png")},
          { src: require("../assets/about-2-3.png")},
        ],
        about3s: [
          { src: require("../assets/about-3-1.png")},
          { src: require("../assets/about-3-2.png")},
          { src: require("../assets/about-3-3.png")},
        ],
      }
    },
  methods: {
    moveLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
<style>
.about-title {
  color: #99ffff;
}

</style>