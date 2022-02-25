<template>
  <v-card min-height="400px">
    <v-card-title class="text-h4 mb-5">{{ room.title }}</v-card-title>
    <v-card-subtitle class="room-item-content text-h6">
      {{ room.content }}
    </v-card-subtitle>
    <v-card-text
      class="text-right"
      v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
    ></v-card-text>
    <v-card-actions>
      <div v-if="room.is_full === false">
        <v-btn large dark color="indigo" @click="enterRoom">
          <v-icon>mdi-door-open</v-icon>
          部屋に入室する
        </v-btn>
      </div>
      <div v-else>
        <v-btn large dark color="error lighten-1" @click="toRooms">
          <v-icon>mdi-door-closed-lock</v-icon>
          満室
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div v-if="isMine">
        <v-btn
          class="mx-2"
          fab
          large
          dark
          color="green lighten-1"
          @click="openEditRoom"
        >
          <v-icon dark>mdi-pen</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          large
          dark
          color="error lighten-1"
          @click="deleteRoom"
        >
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    room: {
      type: Object,
    },
  },
  computed: {
    isMine() {
      return this.room.user.id == this.$store.getters['auth/currentUser'].id;
    },
  },
  methods: {
    openEditRoom() {
      this.$emit('openEditRoom');
    },
    deleteRoom() {
      this.$emit('deleteRoom');
    },
    toRooms() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      axios.get('/api/v1/user_rooms', {
        room_id: this.room.id,
      }).then;
      this.$router.push(`/rooms`);
    },
    async enterRoom() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      await axios.post(`/api/v1/user_rooms`, {
        user_room: {
          room_id: this.room.id,
        },
      });
      this.$router.push({ name: 'ChatRoom', params: { roomId: this.room.id } });
    },
  },
};
</script>

<style>
.room-item-content {
  min-height: 200px;
}
</style>
