<template>
  <v-card max-width="800" class="mx-auto" v-if="user">
    <!--    <v-img-->
    <!--            src="https://cdn.vuetifyjs.com/images/lists/ali.png"-->
    <!--            height="300px"-->
    <!--            dark-->
    <!--    >-->
    <!--      <v-row class="fill-height">-->
    <!--        <v-card-title>-->
    <!--          <v-btn dark icon class="ml-4" @click="$router.push('/account/profile')">-->
    <!--            <v-icon large>mdi-pencil</v-icon>-->
    <!--          </v-btn>-->
    <!--        </v-card-title>-->

    <!--        <v-spacer></v-spacer>-->

    <!--        <v-card-title class="white&#45;&#45;text pl-12 pt-12">-->
    <!--          <div class="display-1 pl-12 pt-12 mr-4">{{user.name}}</div>-->
    <!--        </v-card-title>-->
    <!--      </v-row>-->
    <!--    </v-img>-->
    <v-card-title>
      <v-avatar size="120">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-icon color="secondary">mdi-camera</v-icon>
            </v-row>
          </template>
        </v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        tile
        outlined
        color="success"
        @click="$router.push('/account/profile')"
      >
        <v-icon left>mdi-pencil</v-icon> プロフィール編集
      </v-btn>
    </v-card-title>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ user.email }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account-details</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ user.introduction }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <profile-edit-modal ref="dialog"></profile-edit-modal>
    <router-view></router-view>
  </v-card>
</template>

<script>
import axios from 'axios';
import ProfileEditModal from '../components/ProfileEditModal';
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    ProfileEditModal,
  },
  computed: {
    isMe() {
      return (
        this.$store.getters['auth/currentUser'] &&
        this.userId == this.$store.getters['auth/currentUser'].id
      );
    },
    userId() {
      return (
        this.$route.params.id || this.$store.getters['auth/currentUser'].id
      );
    },
  },
  async created() {
    const res = await axios.get(`/api/users/${this.userId}`);
    this.user = res.data.user;
  },
};
</script>
