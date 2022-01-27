<template>
  <v-container>
    <!-- <v-list three-line>
      <v-list-item
       v-for="(user_room, i) in user_rooms"
       :key="i"
       @click="enterChatRoom(`${user_room.room.id}`)"
       link>
        <v-list-item-avatar  color="grey darken-3" size="65">
          <v-img class="elevation-6" :src="user_room.user.avatar_url"></v-img>
          <v-img src="https://picsum.photos/80/80/?random"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ user_room.room.title}}</v-list-item-title>
          <v-list-item-subtitle>{{ user_room.room.content}}</v-list-item-subtitle>
           <v-list-item-action v-text="$dayjs(user_room.room.created_at).format('YYYY-MM-DD HH:mm:ss')">
           </v-list-item-action>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
    <!-- <ChatRoomLists :user_rooms="user_rooms" /> -->
    <ChatRoomLists :user_rooms="user_rooms" />
  </v-container>
</template>

<script>
import axios from 'axios';
import ChatRoomLists from '../components/ChatRoomLists.vue';

export default {
  data() {
    return {
      user_rooms: null,
    };
  },
  components: {
    ChatRoomLists,
  },
  created() {
    this.fetchJoinRoom();
  },
  methods: {
    fetchJoinRoom() {
      axios.get('http://localhost:3000/api/user_rooms').then((response) => {
        this.user_rooms = response.data;
      });
    },
    //  enterChatRoom(roomId) {
    //    this.$router.push(`/chatroom/${roomId}`)
    // }
  },
};
</script>
