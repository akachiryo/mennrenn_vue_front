<template>
  <v-card @click="$router.push(`/users/${user.id}`)" >
    <v-card-title class="justify-center">
      <v-avatar size="120">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-avatar>
      <!-- <v-spacer></v-spacer>
      <v-btn
      class="ma-2"
      title
      outlined
      color="success"
      >
        <v-icon left>mdi-pencil</v-icon>プロフィール詳細
      </v-btn> -->
    </v-card-title>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account-details</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ user.introduction }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
    methods: {
      profile() {
        const userId = this.room.user.id
        this.$route.push({ path: `/user`, params: userId })
      }
    }
  },
};
</script>
