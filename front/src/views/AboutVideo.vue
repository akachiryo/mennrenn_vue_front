<template>
  <v-container mt-n2 pt-0>
    <v-parallax dark src="../assets/about-top.png" class="home-img">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <p class="text-h4 mb-4">サイトの使い方(サイト内ビデオ通話)</p>
        </v-col>
      </v-row>
    </v-parallax>
    <p class="text-h4 about-title mt-10" align="center">面接の手順</p>
    <v-row class="mt-10">
      <v-col xs="12" sm="12" md="6">
        <v-img
          height="300"
          width="600"
          src="../assets/registed-page.png"
        ></v-img>
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <p class="text-h6">
          ①新規登録後、ログインしましょう。
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="6">
        <template>
          <v-carousel height="300" width="600">
            <v-carousel-item
              v-for="(about, i) in about2s"
              :key="i"
              :src="about.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <p class="text-h6">
          ②部屋一覧から、自分の条件と合う部屋に参加する。<br />
          部屋が見つからない場合、部屋を作成し、部屋に参加者が現れるまで待ちましょう。<br />
          ※部屋には作成者と参加した二人のみ入れます。
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="6">
        <template>
          <v-carousel height="300" width="600">
            <v-carousel-item
              v-for="(about, i) in about3s"
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
          ③「ルームチャット」タブからチャット画面に移動し、日時を決めましょう。その後、右上の三点ドットのツールバーをクリックすると、「ビデオ通話を開始」というタブから通話画面用の新しいタブに移動しましょう。
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col sxs="12" sm="12" md="6">
        <template>
          <v-carousel height="300" width="600">
            <v-carousel-item
              v-for="(about, i) in about4s"
              :key="i"
              :src="about.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <p class="text-h6">
         ④通話画面には、電話番号代わりになるIDが表示されます。通話の時間になったらIDを相手に伝えましょう。IDが伝えられた側は、自分の通話画面から相手のIDを入れ「CALL」ボタンを押すと通話が開始されます。<br />
         通話が終わったら、「CLOSE」ボタンを押して通話を終了し、通話画面のタブを閉じます。<br />
         練習が終わったら、右上の三点ドットを開き、「部屋を削除」を押します。
         </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      about2s: [
        { src: require('../assets/about-2-1.png') },
        { src: require('../assets/about-2-2.png') },
        { src: require('../assets/about-2-3.png') },
      ],
      about3s: [
        { src: require('../assets/about-3-1.png') },
        { src: require('../assets/about-3-2.png') },
        { src: require('../assets/about-4-1.png') },
      ],
      about4s: [
        { src: require('../assets/about-4-1.png') },
        { src: require('../assets/about-4-2.png') },
        { src: require('../assets/about-4-3.png') },
        { src: require('../assets/about-4-4.png') },
        { src: require('../assets/about-4-1.png') },
      ],
    };
  },
  methods: {
    moveLink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>
<style>
.about-title {
  color: #99ffff;
}
</style>
