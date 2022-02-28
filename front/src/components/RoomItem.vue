<template>
  <v-card
    max-width="400"
    min-height="346"
    @click="$router.push(`/rooms/${room.id}`)"
  >
    <v-card-title style="height: 100px">
      <span class="text-h5 room-title">{{ room.title }}</span>
    </v-card-title>
    <v-card-text class="font-weight-bold room-content">
      {{ room.content }}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" :src="room.user.avatar_url"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ room.user.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action
          v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
        ></v-list-item-action>
      </v-list-item>
    </v-card-actions>
    <v-card-text class="tag-content pa-0" style="min-height: 64px">
      <v-row>
        <v-col>
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
        </v-col>
        <v-col cols="2" v-if="isAdmin">
          <v-btn
            x-small
            fab
            dark
            color="error lighten-1"
            @click="deleteRoom(room.id)"
          >
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isAdmin() {
      return this.$store.getters['auth/currentUser'].admin;
    },
  },
  methods: {
    async deleteRoom(roomId) {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      if (confirm('削除しますか？')) {
        await axios.delete(`/api/v1/rooms/${roomId}`);
        this.$router.push('/rooms');
      }
    },
  },
};
</script>

<style>
.room-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.room-content {
  height: 110px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag-content {
  height: 64px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
