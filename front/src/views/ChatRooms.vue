<template>
  <v-container>
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
