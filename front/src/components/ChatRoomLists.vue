<template>
  <v-list three-line>
      <v-list-item
        v-for="(user_room, i) in user_rooms"
        :key="i"
        link
      >
        <v-list-item-avatar color="grey darken-3" size="65" @click="enterChatRoom(user_room.room.id)">
          <!-- <v-img class="elevation-6" :src="user_room.user.avatar_url"></v-img> -->
          <v-img src="https://picsum.photos/80/80/?random"></v-img>
        </v-list-item-avatar>
        <v-list-item-content @click="enterChatRoom(`${user_room.room.id}`)">
          <v-list-item-title>{{ user_room.room.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ user_room.room.content }}</v-list-item-subtitle>
          <v-list-item-action
            v-text="
              $dayjs(user_room.room.created_at).format('YYYY-MM-DD HH:mm:ss')
            "
          >
          </v-list-item-action>
        </v-list-item-content>
        <div v-if="isAdmin">
         <v-btn
          class="mx-2"
          fab
          dark
          color="error lighten-1"
          @click="deleteRoom(user_room, user_room.room.id)"
          >
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-list-item>
  </v-list>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      delId: null
    }
  },
  props: {
    user_rooms: {
      type: Array,
    },
  },
  computed: {
    isAdmin() {
      return this.$store.getters[`auth/currentUser`].admin;
    }
  },
  methods: {
    enterChatRoom(roomId) {
      this.$router.push(`/chatroom/${roomId}`);
      this.$emit(`fetchMessages`);
      this.$emit(`fetchRoom`)
    },
    deleteRoom(userRoom, roomId) {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      if (confirm('削除しますか？')) {
        this.delId = this.user_rooms.indexOf(userRoom);
        this.user_rooms.splice(this.delId,1);
        axios.delete(`/api/v1/rooms/${roomId}`)
      }
    }
  },
};
</script>
