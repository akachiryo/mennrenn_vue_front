<template>
  <v-card>
    <v-card-title class="text-h3">{{ room.title }}</v-card-title>
    <v-card-subtitle class="text-h5">{{ room.content }}</v-card-subtitle>
    <v-card-text
      class="text-right"
      v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
    ></v-card-text>
    <v-card-actions>
      <v-btn
      large
      dark color="indigo"
      @click="enterRoom">
        <v-icon>mdi-door-open</v-icon>
        部屋に入室する
      </v-btn>
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
import axios from 'axios'

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
    async enterRoom() {
    await axios.post(`http://localhost:3000/api/user_room`, {
      user_room: {
        room_id: this.room.id
      }
    })
    // チャットルームに移動
     this.$router.push('/chatroom')
    }
  },
};
</script>
