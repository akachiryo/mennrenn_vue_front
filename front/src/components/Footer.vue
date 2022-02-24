<template>
  <v-footer dark color="#6A76AB">
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        :to="{ path: `/privacy` }"
      >
        プライバシーポリシー
      </v-btn>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        Copyright test 2022. All right reserved
      </v-col>
    </v-row>

  </v-footer>
</template>
