<template>
  <v-container class="pa-12">
    <v-row>
      <v-col cols="8">
        <h1 class="home-top">気軽に面接練習しませんか？</h1>
        <p>
          面接が苦手？このアプリを使えば、面接相手をマッチングできます。<br />
          時間・業種は選択できます。一緒に面接で成功しよう。
        </p>
        <v-btn color="primary" to="/signup" class="ml-15 mr-10 pr-10 pl-10">新規登録</v-btn>
        <v-btn color="secondary">ゲストログイン</v-btn>
      </v-col>
      <v-col cols="4">
        <v-img src="../assets/Home_top.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.home-top {
  color: #99ffff;
}
</style>
